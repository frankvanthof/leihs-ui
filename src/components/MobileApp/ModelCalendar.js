import React, { useState } from 'react'
import 'react-dates/initialize'
import f from 'lodash'

import { DateRangePicker } from 'react-dates'
import {
  START_DATE,
  END_DATE,
  HORIZONTAL_ORIENTATION
} from 'react-dates/constants'

import Moment from 'moment'
import { extendMoment } from 'moment-range'
const moment = extendMoment(Moment)

export const ModelCalendar = ({
  small = false,
  disabled = false,
  required = false,
  minimumDays = 1,
  initialOpen = false,
  modelData
}) => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setFocusedInput] = useState(
    initialOpen ? START_DATE : null
  )
  const availabilityByDate = getAvailabilityByDate(modelData)
  console.log(availabilityByDate)

  return (
    <DateRangePicker
      startDate={startDate} // momentPropTypes.momentObj or null,
      startDateId="1" // PropTypes.string.isRequired,
      endDate={endDate} // momentPropTypes.momentObj or null,
      endDateId="2" // PropTypes.string.isRequired,
      onDatesChange={({ startDate, endDate }) => {
        setStartDate(startDate)
        setEndDate(endDate)
      }} // PropTypes.func.isRequired,
      focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
      //
      //   orientation={VERTICAL_ORIENTATION}
      // orientation="verticalScrollable"
      orientation={HORIZONTAL_ORIENTATION}
      numberOfMonths={1}
      //   disableScroll={false}
      //   withFullScreenPortal={true}
      //
      firstDayOfWeek={1} // Monday
      block={false}
      small={small}
      disabled={disabled}
      required={required}
      //

      // day presentation and interaction related props
      //   renderCalendarDay={undefined}
      //   renderDayContents={undefined}
      minimumNights={minimumDays} // for equipement we measure workdays, not nights
      enableOutsideDays={false} // show beginning of next month (easier to select same-week)
      // "blocked" means it can not be selected due to constraints and configuration that might change over time, like availability
      isDayBlocked={day =>
        isDayBlocked(day, availabilityByDate, startDate, focusedInput)
      }
      // "outside range" means it can never be selected, like any day in the past
      isOutsideRange={day => {
        if (isPastDay(day)) return true
        const dayData = getDayData(day, availabilityByDate)
        if (!dayData) return true
      }}
      // "highlighted" we currently have no usage for
      isDayHighlighted={() => true}
    />
  )
}

function getAvailabilityByDate(modelData) {
  return f.fromPairs(
    modelData.models.edges
      .flatMap(edg => edg.node.availability.flatMap(avb => avb.dates))
      .map(i => [i.date, i])
  )
}

function getDayData(day, availabilityByDate) {
  return availabilityByDate[day.format('YYYY-MM-DD')]
}

function isDayBlocked(
  day,
  availabilityByDate,
  selectedStartDate = null,
  focusedInput = null
) {
  const dayData = getDayData(day, availabilityByDate)
  if (!dayData) return true

  if (focusedInput === START_DATE && dayData.startDateRestriction) return true
  if (focusedInput === END_DATE && dayData.endDateRestriction) return true
  if (dayData.quantity < 1) return true

  // dont allow endDate before startDate
  if (selectedStartDate && day.isBefore(selectedStartDate, 'day')) {
    return true
  }

  // dont allow selection of ranges that include blocked dates
  if (selectedStartDate && focusedInput === END_DATE) {
    for (let rangeDay of moment.range(selectedStartDate, day).by('day')) {
      const rangeDayData = getDayData(rangeDay, availabilityByDate)
      if (!rangeDayData) return true
      if (rangeDayData.quantity < 1) return true
    }
  }
}

function isPastDay(day) {
  if (!moment.isMoment(day)) return false
  const now = moment()
  return day.isBefore(now, 'day')
}
