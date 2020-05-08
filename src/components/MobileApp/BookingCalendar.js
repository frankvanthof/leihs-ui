import React, { useState } from 'react'
import cx from 'classnames'
import f from 'lodash'

import { DateRange } from 'react-date-range'
const df = require('date-fns')

// TODO:
// - fix isBlocked - distinguish blocked visits (only start/end) and unavailable (for ranges)
//   - how? it only has "disabled days", not "disabled ranges" :/
//   - try using diabledDates for *unavailable*, then it behaves correct
//   - figure out how to block visit days…
//   - if fork: disabledDays -> blockedDays, disabledStartDays, disabledEndDays…
// - reset endDate if new startDate is changed AND endDate is not valid anymore
// - fix in component:
//   - when selecting earlier start date do not reset range!
//   - allow initial selection to be empty!

const WIP_LARGE_SIZE = false
const BASE_CLASS = 'ui-booking-calendar'

const WIP_STYLES = `
  .ui-booking-calendar { margin-left: auto !important; margin-right: auto !important; }
  .rdrCalendarWrapper, .rdrDateRangeWrapper { margin: auto; }
  // .rdrDayDisabled:not(.rdrDayDisabledStart):not(.rdrDayDisabledEnd) .rdrDayNumber span {
  //   text-decoration: line-through;
  // }
`

export const BookingCalendar = ({
  small = false,
  disabled = false,
  required = false,
  minimumDays = 0,
  showClearDates = true,
  initialOpen = false,
  autoFocus = initialOpen,
  initialQuantity = 1,
  modelData,
  cardClass = 'm-2',
  cardStyle
}) => {
  const today = df.startOfDay(new Date())
  const [quantity, setQuantity] = useState(initialQuantity)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const availabilityByDate = getAvailabilityByDate(modelData)

  // const [selectedRange, setSelectedRange] = useState({
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: 'selection',
  //   autoFocus: true
  // })

  // TODO: select next possible date (maybe only if next week?)
  const initialSelectedRange = {
    startDate: today,
    endDate: today,
    key: 'selection',
    autoFocus: true,
    disabled: false,
    showDateDisplay: true
  }

  const [selectedRange, setSelectedRange] = useState(initialSelectedRange)
  // const hasSelectedRange =
  //   df.isValid(selectedRange.startDate) && df.isValid(selectedRange.endDate)

  const clearForm = () => {
    setQuantity(initialQuantity)
    setSelectedRange(initialSelectedRange)
    setHasUserInteracted(false)
  }

  const allBlockedDates = calcAllBlockedDates(availabilityByDate, quantity)
  // console.log({ allBlockedDates })
  const { blockedDates, blockedStartDates, blockedEndDates } = allBlockedDates

  const isValidForm = isValidSelection(selectedRange, allBlockedDates, quantity)

  const errorMessage = hasUserInteracted &&
    !isValidForm && (
      <div className="alert alert-danger p-2 mb-3 mt-1 text-center" role="alert">
        Something is wrong!
      </div>
    )

  return (
    <div
      className={cx('card', cardClass, BASE_CLASS)}
      style={{
        minWidth: '340px',
        ...(!WIP_LARGE_SIZE && { maxWidth: '340px' }),
        ...cardStyle
      }}
    >
      <style>{WIP_STYLES}</style>

      {!!WIP_LARGE_SIZE && (
        <style>{`
        .rdrCalendarWrapper, .rdrDateRangeWrapper {font-size: 14px; }
      `}</style>
      )}

      <div className="card-header">
        <h5 className="card-title d-inline-flex mr-3 mb-0">Add to order</h5>
        <p className="card-text d-inline-flex">AVCHD-Kamera Sony HXR-NX5E</p>
      </div>
      <div className="card-body px-2 px-sm-3 py-3 py-sm-4">
        <div className="form-row">
          <div className="form-group form-group-sm col-4">
            <label>
              Quantity{' '}
              <input
                className={cx('form-control', { 'is-invalid': quantity < 1 })}
                type="number"
                required
                min="1"
                value={quantity}
                onChange={e => {
                  setQuantity(e.target.value)
                  setHasUserInteracted(true)
                }}
              />
            </label>
          </div>
          <div className="form-group form-group-sm col-8 ">
            <label>
              Inventory Pool{' '}
              <select className="custom-select custom-select-sm">
                <option value="1">Ausleihe Toni-Areal (max. 5)</option>
              </select>
            </label>
          </div>
        </div>

        {errorMessage}

        <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
          <DateRange
            editableDateInputs={true}
            onChange={item => {
              setSelectedRange(item.selection)
              setHasUserInteracted(true)
            }}
            moveRangeOnFirstSelection={false}
            direction="vertical"
            className="m-0"
            scroll={{
              enabled: true,
              monthHeight: WIP_LARGE_SIZE ? 278 : undefined
            }}
            //
            ranges={[selectedRange]}
            //
            minDate={today}
            disabledDates={blockedDates}
            disabledStartDates={blockedStartDates}
            disabledEndDates={blockedEndDates}
            //
            weekStartsOn={1}
          />
        </div>
      </div>
      <div className="card-footer">
        <button
          type="submit"
          href="#"
          className="btn btn-primary"
          disabled={!isValidForm}
          onClick={e => alert('nope!')}
        >
          Add
        </button>
        <button type="button" href="#" className="btn btn-link">
          Cancel
        </button>
        <button type="button" href="#" className="btn btn-link" onClick={clearForm}>
          Clear
        </button>
      </div>
    </div>
  )
}

function getAvailabilityByDate(modelData) {
  const models = f.get(modelData, 'models.edges')
  if (!models) return {}
  return f.fromPairs(models.flatMap(edg => edg.node.availability.flatMap(avb => avb.dates)).map(i => [i.date, i]))
}

function getByDay(obj, date) {
  return obj[df.format(date, 'yyyy-MM-dd')]
}

function calcAllBlockedDates(availabilityByDate, wantedQuantity = 1) {
  const blockedDates = []
  const blockedStartDates = []
  const blockedEndDates = []
  Object.keys(availabilityByDate).forEach(date => {
    const day = df.parseISO(date)
    const dat = availabilityByDate[date]
    if (!dat || dat.quantity < wantedQuantity) blockedDates.push(day)
    if (dat.startDateRestriction) blockedStartDates.push(day)
    if (dat.endDateRestriction) blockedEndDates.push(day)
  })
  return { blockedDates, blockedStartDates, blockedEndDates }
}

function isValidSelection(
  { startDate, endDate },
  { blockedDates, blockedStartDates, blockedEndDates },
  wantedQuantity
) {
  if (!df.isValid(startDate) || !df.isValid(endDate)) return false

  if (getByDay(blockedStartDates, startDate)) return false
  if (getByDay(blockedEndDates, endDate)) return false

  if (df.isSameDay(startDate, endDate)) {
    return !getByDay(blockedDates, startDate)
  } else {
    if (df.isBefore(endDate, startDate)) return false // we get this from calendar sometime, need to check or interval throws RangeError!)
    // debugger
    if (f.isEmpty(blockedDates)) return true // dont iterate over interval if nothing is blocked!
    return !df
      .eachDayOfInterval({ start: df.startOfDay(startDate), end: df.startOfDay(endDate) })
      .some(date => getByDay(blockedDates, startDate))
  }
}
