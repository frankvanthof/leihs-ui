// import { withInfo } from '@storybook/addon-info'
// import { action } from '@storybook/addon-actions'

import React, { useState } from 'react'
import cx from 'classnames'
import * as df from 'date-fns'

import DatePicker from './DatePicker'
const NOW = new Date()

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  // decorators: [withInfo],
  parameters: {
    // FIXME: does crash in snapshot test
    // storyshots: { disable: true }
  }
}

const makeBaseStory = ({ initialValue, onlyFuture, wasValidated }) => () => {
  const [selectedDate, setSelectedDate] = useState(initialValue)
  //
  const now = new Date()
  //
  const onChange = item => {
    setSelectedDate(item)
  }

  //
  return (
    <div className={cx('form-group', { 'was-validated': wasValidated })}>
      <label>Example label</label>

      <DatePicker
        required
        value={selectedDate}
        onChange={onChange}
        className="m-auto"
        displayMode="date"
        showPreview={false}
        months={1}
        minDate={onlyFuture ? now : null}
      />

      <small id="passwordHelpBlock" className="form-text text-muted">
        selected date: <samp>{JSON.stringify(selectedDate)}</samp>
      </small>
    </div>
  )
}

export const datepicker_future_no_value = makeBaseStory({ initialValue: undefined, onlyFuture: true })
datepicker_future_no_value.storyName = 'Datepicker, no initial value, only future dates'

export const datepicker_future_no_value_validation = makeBaseStory({
  initialValue: undefined,
  onlyFuture: true,
  wasValidated: true
})
datepicker_future_no_value_validation.storyName = 'Datepicker, no initial value, show validation, only future dates'

export const datepicker_future_with_value = makeBaseStory({ initialValue: df.addYears(NOW, 5), onlyFuture: true })
datepicker_future_with_value.storyName = 'Datepicker, with initial value, only future dates'

export const datepicker_future_with_value_validation = makeBaseStory({
  initialValue: df.addYears(NOW, 5),
  onlyFuture: true,
  wasValidated: true
})
datepicker_future_with_value_validation.storyName = 'Datepicker, with initial value, show validation, only future dates'
