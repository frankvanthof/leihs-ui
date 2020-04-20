import React, { useState } from 'react'
import moment from 'moment'
import 'react-dates/initialize'

import { DateRangePicker } from 'react-dates'
import { START_DATE, HORIZONTAL_ORIENTATION } from 'react-dates/constants'

export const ModelCalendar = ({
  small = false,
  disabled = false,
  required = false,
  minimumDays = 1
}) => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setFocusedInput] = useState(START_DATE)
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
      isDayBlocked={() => false}
      // "outside range" means it can never be selected, like any day in the past
      //   isOutsideRange={() => false}
      isOutsideRange={day => isPastDay(day)}
      // "highlighted" we currently have no usage for
      isDayHighlighted={() => false}
    />
  )
}

function isPastDay(day) {
  if (!moment.isMoment(day)) return false
  const now = moment()
  return day.isBefore(now, 'day')
}
