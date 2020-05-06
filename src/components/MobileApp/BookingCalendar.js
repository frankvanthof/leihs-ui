import React, { useState } from 'react'
import f from 'lodash'

// TODO:
// - fix isBlocked???
// - reset endDate if new startDate is changed AND endDate is not valid anymore

import { DateRange } from 'react-date-range'
// import { addDays, parseISO } from 'date-fns'
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
  modelData
}) => {
  const [quantity, setQuantity] = useState(initialQuantity)
  const availabilityByDate = getAvailabilityByDate(modelData)

  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
    autoFocus: true
  })

  // const disabledRange = {
  //   startDate: new Date(),
  //   endDate: addDays(new Date(), 3),
  //   key: 'blocked',
  //   color: 'red',
  //   disabled: true,
  //   autoFocus: false,
  //   showDateDisplay: false
  // }

  // const disabledDates = [
  //   new Date(),
  //   df.addDays(new Date(), 1),
  //   df.addDays(new Date(), 2),
  //   df.addDays(new Date(), 3)
  // ]

  const blockedDates = getBlockedDays(availabilityByDate, quantity)
  console.log({ blockedDates })

  return (
    <div>
      <label>
        quantity{' '}
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
      </label>{' '}
      <DateRange
        editableDateInputs={true}
        onChange={item => setSelectedRange(item.selection)}
        moveRangeOnFirstSelection={false}
        direction="vertical"
        scroll={{ enabled: true }}
        ranges={[selectedRange]}
        disabledDates={blockedDates}
        //
        // weekStartsOn={0}
      />
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
  return availabilityByDate[day.format('YYYY-MM-DD')]
}

function getBlockedDays(availabilityByDate, wantedQuantity = 1) {
  return Object.keys(availabilityByDate).map(date => {
    const day = df.parseISO(date)
    const dat = availabilityByDate[date]
    if (isDayDisabled(day, dat, wantedQuantity)) return day
  })
}

function isDayDisabled(day, dat, wantedQuantity) {
  if (!dat) return true

  if (isPastDay(day)) return true

  if (dat.startDateRestriction) return true
  if (dat.endDateRestriction) return true
  if (dat.quantity < wantedQuantity) return true
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
