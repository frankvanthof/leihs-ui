import React, { useState } from 'react'
import 'react-dates/initialize'
import f from 'lodash'

// TODO:
// - fix isBlocked???
// - reset endDate if new startDate is changed AND endDate is not valid anymore

import {
  DayPickerRangeController,
  DateRangePickerInputController
} from 'react-dates'

import {
  /* eslint-disable no-unused-vars */
  START_DATE,
  END_DATE,
  VERTICAL_ORIENTATION,
  HORIZONTAL_ORIENTATION,
  VERTICAL_SCROLLABLE
} from 'react-dates/constants'

import Moment from 'moment'
import { extendMoment } from 'moment-range'
const moment = extendMoment(Moment)

const renderCalendarInfo = () => <div>Hi!</div>

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
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setFocusedInput] = useState(
    initialOpen ? START_DATE : null
  )

  const [quantity, setQuantity] = useState(initialQuantity)
  const availabilityByDate = getAvailabilityByDate(modelData)

  return (
    <div style={{ height: 500 }}>
      <label>
        quantity{' '}
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
      </label>

      <DateRangePickerInputController
        startDate={startDate}
        endDate={endDate}
        onDatesChange={({ startDate, endDate }) => {
          console.log({ startDate, endDate })
          setStartDate(startDate)
          setEndDate(endDate)
        }}
        // focusedInput={focusedInput}
        isStartDateFocused={focusedInput === START_DATE}
        isEndDateFocused={focusedInput === END_DATE}
        onFocusChange={focusedInput => {
          console.log({ focusedInput })
          setFocusedInput(focusedInput)
        }}
        displayFormat="L"
      />

      <DayPickerRangeController
        startDate={startDate} // momentPropTypes.momentObj or null,
        // startDateId="1" // PropTypes.string.isRequired,
        endDate={endDate} // momentPropTypes.momentObj or null,
        // endDateId="2" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate)
          setEndDate(endDate)
        }} // PropTypes.func.isRequired,
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
        // showClearDates={showClearDates}
        initialVisibleMonth={() => moment()} // PropTypes.func or null,
        //
        // orientation={HORIZONTAL_ORIENTATION}
        // orientation={VERTICAL_ORIENTATION}
        orientation={VERTICAL_SCROLLABLE}
        numberOfMonths={6}
        // disableScroll={false}
        //   withFullScreenPortal={true}
        //
        firstDayOfWeek={1} // Monday
        // block={false}
        // small={small}
        disabled={disabled}
        // required={required}
        //

        // autoFocus={autoFocus}
        calendarInfoPosition="top"
        renderCalendarInfo={renderCalendarInfo}
        //
        // day presentation and interaction related props
        //   renderCalendarDay={undefined}
        //   renderDayContents={undefined}
        minimumNights={minimumDays} // for equipement we measure workdays, not nights
        enableOutsideDays={false} // show beginning of next month (easier to select same-week)
        //
        // TODO: show "day restrictions" as outside range and only "unavailable" as "isDayBlocked"
        //
        // "blocked" means it can not be selected due to constraints and configuration that might change over time, like availability
        isDayBlocked={day =>
          isDayBlocked({
            day,
            availabilityByDate,
            minimumDays,
            wantedQuantity: quantity,
            selectedStartDate: startDate,
            focusedInput
          })
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

function isDayBlocked({
  day,
  availabilityByDate,
  minimumDays,
  wantedQuantity,
  selectedStartDate = null,
  focusedInput = null
}) {
  // NOTE: for performance all checks use early return/bail out and are in descending order of cost
  const dayData = getDayData(day, availabilityByDate)
  if (!dayData) return true

  if (focusedInput === START_DATE && dayData.startDateRestriction) return true
  if (focusedInput === END_DATE && dayData.endDateRestriction) return true
  if (dayData.quantity < wantedQuantity) return true

  // dont allow endDate before startDate
  if (selectedStartDate && day.isBefore(selectedStartDate, 'day')) {
    return true
  }

  // dont allow selection of ranges that include blocked dates
  console.log({ selectedStartDate, focusedInput })
  if (selectedStartDate && focusedInput === END_DATE) {
    for (let rangeDay of moment.range(selectedStartDate, day).by('day')) {
      const rangeDayData = getDayData(rangeDay, availabilityByDate)
      if (!rangeDayData) return true
      if (rangeDayData.quantity < wantedQuantity) return true
    }
  }
}

function isPastDay(day) {
  if (!moment.isMoment(day)) return false
  const now = moment()
  return day.isBefore(now, 'day')
}
