import React, { useState } from 'react'
import cx from 'classnames'
import f from 'lodash'

// TODO:
// - fix isBlocked???
// - reset endDate if new startDate is changed AND endDate is not valid anymore

import { DateRange } from 'react-date-range'
const df = require('date-fns')

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
  const now = new Date()
  const [quantity, setQuantity] = useState(initialQuantity)
  const availabilityByDate = getAvailabilityByDate(modelData)

  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
    autoFocus: true
  })

  const blockedDates = getBlockedDays(availabilityByDate, quantity)
  // console.log({ blockedDates })

  const isValidForm = isValidSelection(
    selectedRange.startDate,
    selectedRange.endDate,
    availabilityByDate,
    quantity
  )

  const errorMessage = !isValidForm && (
    <div className="alert alert-danger p-2 mb-3 mt-1 text-center" role="alert">
      Something is wrong!
    </div>
  )

  return (
    <div
      className={cx('card', cardClass)}
      style={{ minWidth: '360px', ...cardStyle }}
    >
      <style>{`
        .rdrCalendarWrapper, .rdrDateRangeWrapper { margin: auto; }
      `}</style>
      <div className="card-header">
        <h5 className="card-title d-inline-flex mr-3">Add to order</h5>
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
                onChange={e => setQuantity(e.target.value)}
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
            onChange={item => setSelectedRange(item.selection)}
            moveRangeOnFirstSelection={false}
            direction="vertical"
            scroll={{ enabled: true }}
            //
            ranges={[selectedRange]}
            //
            minDate={now}
            disabledDates={blockedDates}
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
      </div>
    </div>
  )
}

function getAvailabilityByDate(modelData) {
  const models = f.get(modelData, 'models.edges')
  if (!models) return {}
  return f.fromPairs(
    models
      .flatMap(edg => edg.node.availability.flatMap(avb => avb.dates))
      .map(i => [i.date, i])
  )
}

function getDayData(day, availabilityByDate) {
  return availabilityByDate[df.format(day, 'yyyy-MM-dd')]
}

function getBlockedDays(availabilityByDate, wantedQuantity = 1) {
  return Object.keys(availabilityByDate).map(date => {
    const day = df.parseISO(date)
    const dat = availabilityByDate[date]
    if (isDayDisabled(dat, wantedQuantity)) return day
  })
}

function isDayDisabled(dat, wantedQuantity) {
  if (!dat) return true

  if (dat.startDateRestriction) return true
  if (dat.endDateRestriction) return true
  if (dat.quantity < wantedQuantity) return true
}

function isValidSelection(
  startDate,
  endDate,
  availabilityByDate,
  wantedQuantity
) {
  console.log({
    start: startDate,
    end: endDate,
    range: !f.some(
      df.eachDayOfInterval({ start: startDate, end: endDate }),
      date =>
        !!isDayDisabled(getDayData(date, availabilityByDate), wantedQuantity)
    )
  })
  // if (df.isValid(startDate) && df.isValid(endDate)) debugger
  return (
    df.isValid(startDate) &&
    df.isValid(endDate) &&
    !f.some(
      df.eachDayOfInterval({ start: startDate, end: endDate }),
      date =>
        !!isDayDisabled(getDayData(date, availabilityByDate), wantedQuantity)
    )
  )
}

// function isDayBlocked({
//   day,
//   availabilityByDate,
//   minimumDays,
//   wantedQuantity,
//   selectedStartDate = null,
//   focusedInput = null
// }) {
//   // NOTE: for performance all checks use early return/bail out and are in descending order of cost
//   const dayData = getDayData(day, availabilityByDate)
//   if (!dayData) return true

//   if (focusedInput === START_DATE && dayData.startDateRestriction) return true
//   if (focusedInput === END_DATE && dayData.endDateRestriction) return true
//   if (dayData.quantity < wantedQuantity) return true

//   // dont allow endDate before startDate
//   if (selectedStartDate && day.isBefore(selectedStartDate, 'day')) {
//     return true
//   }

//   // dont allow selection of ranges that include blocked dates
//   if (selectedStartDate && focusedInput === END_DATE) {
//     for (let rangeDay of moment.range(selectedStartDate, day).by('day')) {
//       const rangeDayData = getDayData(rangeDay, availabilityByDate)
//       if (!rangeDayData) return true
//       if (rangeDayData.quantity < wantedQuantity) return true
//     }
//   }
// }

function isPastDay(day) {
  if (!df.isValid(day)) return false
  const today = df.startOfDay(new Date())
  return df.isBefore(day, today)
}
