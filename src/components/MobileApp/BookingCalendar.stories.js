import React from 'react'
// import { action } from '@storybook/addon-actions'
import { BookingCalendar } from './BookingCalendar'
import { FAKE_STYLEGUIDE_TIME } from '../../../.storybook/fake-time'

export default {
  title: 'MobileApp/Components/BookingCalendar',
  component: BookingCalendar
}

export const just_a_datepicker = () => (
  <div className="mx-1 mt-2">
    <BookingCalendar initialOpen={true} />
  </div>
)
export const mock_data = () => {
  const mock = require('../../static/api-examples/features/borrow/calendar.feature/1_1_1_Model_reservation_calendar_.json')
  const apiData = mock.result.data
  console.log({ apiData })

  return (
    <div className="mx-1 mt-2">
      <samp className="p-2 m-4 d-block">
        NOTE: Fake time is set to {FAKE_STYLEGUIDE_TIME}
      </samp>
      <BookingCalendar
        initialOpen={true}
        autoFocus={true}
        initialQuantity={1}
        modelData={apiData}
      />
      <hr />
      <h3 className="code">mock data used:</h3>
      <pre>{JSON.stringify(apiData, 0, 2)}</pre>
      <h3 className="font-monospace">mock data from spec:</h3>
      <pre>{JSON.stringify(mock.spec, 0, 2)}</pre>
    </div>
  )
}
