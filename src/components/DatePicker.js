import React, { useEffect, useState, useRef, useMemo } from 'react'
// import f from 'lodash'
import cx from 'classnames/dedupe'
import { isValid, parseISO as parseISODate, format as formatDate, isBefore, isAfter } from 'date-fns'

import { Calendar } from '@leihs/calendar'

const DatePicker = ({
  value,
  required = false,
  minDate,
  maxDate,
  onChange,
  placeholder = '2001-01-01',
  disabled = false,
  months = 1,
  force = true,
  // scroll = false,
  forceValidations = false,
  errMsg = 'Please provide a valid date.'
}) => {
  const scroll = false // NOTE: does not work yet (when changing date from outside Calendar)
  const _popupcal = false
  const _restrictWidth = false

  if (value === 'now') value = new Date()
  const currentValueIsValidDate =
    (value ? isValid(value) : false) &&
    (minDate ? isBefore(minDate, value) : true) &&
    (maxDate ? isAfter(maxDate, value) : true)
  const currentInputIsValid = disabled || !required ? true : currentValueIsValidDate

  const inputVal = useRef(formatDateForInput(value), [value])
  const inputEl = useRef(null, [])
  const [isFocussed, setFocus] = useState(false, [])
  // const dateVal = useRef(value, [value])

  const isDateInputSupported = useMemo(checkIsDateInputBrowserSupported, [])
  const useNativeInput = force ? false : isDateInputSupported

  useEffect(
    function updateInputVal() {
      inputVal.current = formatDateForInput(value)
    },
    [value]
  )
  function updateInput() {
    inputEl.current && currentValueIsValidDate && (inputEl.current.value = formatDateForInput(value))
    inputEl.current && inputEl.current.setCustomValidity(currentInputIsValid ? '' : errMsg)
  }
  useEffect(updateInput, [inputVal, currentValueIsValidDate, currentInputIsValid, value, required, minDate, maxDate])

  const isOpen = !disabled && !useNativeInput

  return (
    <div
      className={cx(
        'ui-datepicker custom-datepicker mb-2',
        { 'flex-grow-1': _restrictWidth },
        currentInputIsValid ? 'custom-control-mark-valid' : 'custom-control-mark-invalid'
      )}
      style={_restrictWidth ? { maxWidth: '340px' } : null}
    >
      <div className={cx('rounded', { 'shadow-sm': isOpen, 'custom-control-focussed': isFocussed })}>
        {/* NOTE: use uncontrolled input because we already attach a ref for setting the validity, adn dont want the overhead of props-to-state */}
        <input
          type={useNativeInput ? 'date' : 'text'}
          className={cx(
            'form-control',
            forceValidations && (currentInputIsValid ? 'is-valid' : 'is-invalid'),
            'custom-datepicker-textinput'
          )}
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          placeholder={placeholder}
          disabled={disabled}
          defaultValue={inputVal.current || ''}
          onChange={e => {
            const val = e.target.value
            const date = parseDatefromInput(val)
            onChange(isValid(date) ? date : null)
          }}
          ref={inputEl}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
        />
        {isOpen && (
          <div
            className={cx('card', {}, 'custom-datepicker-calendar-container')}
            style={{ marginTop: '-1px', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
            tabIndex="-1" // NOTE: needed to make it focussable (i.e. to enable the focus/events below)
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
          >
            <Calendar
              key={value || 1} // force update shown date if changed via text input
              className={cx('m-auto rounded custom-datepicker-calendar', { 'd-none': _popupcal && !isFocussed })}
              displayMode="date"
              months={months}
              minDate={minDate}
              date={currentValueIsValidDate ? value : undefined}
              shownDate={currentValueIsValidDate ? value : undefined}
              onChange={onChange}
              scroll={{ enabled: scroll }}
            />
          </div>
        )}
      </div>
      {!currentInputIsValid && <div className="invalid-feedback">{errMsg}</div>}
    </div>
  )
}

export default DatePicker

function parseDatefromInput(date) {
  const DATE_STRING_REGEX = /[1-2]\d\d\d-(0\d|1[0-2])-[0-3]\d/
  if (!DATE_STRING_REGEX.test(date)) return
  return parseISODate(date)
}

function formatDateForInput(date) {
  if (!isValid(date)) return ''
  return formatDate(date, 'yyyy-MM-dd')
}

function checkIsDateInputBrowserSupported() {
  if (!(document && document.createElement)) return false
  const elem = document.createElement('input')
  elem.setAttribute('type', 'date')
  elem.value = 'test'
  return elem.type === 'date' && elem.value !== 'test'
}
