import React from 'react'
// import { action } from '@storybook/addon-actions'
import { ModelCalendar } from './ModelCalendar'
import { FAKE_STYLEGUIDE_TIME } from '../../../.storybook/fake-time'

export default {
  title: 'MobileApp/Components/ModelCalendar',
  component: ModelCalendar
}

export const just_a_datepicker = () => (
  <div className="mx-1 mt-2">
    <ModelCalendar initialOpen={true} />
  </div>
)
export const mock_data = () => {
  const mock = require('../../static/api-examples/features/borrow/calendar.feature/1_1_1_Model_reservation_calendar_.json')
  const apiData = mock.result.data
  return (
    <div className="mx-1 mt-2">
      <samp className="p-2 m-4 d-block">
        NOTE: Fake time is set to {FAKE_STYLEGUIDE_TIME}
      </samp>
      <ModelCalendar initialOpen={true} modelData={apiData} />
      <hr />
      <h3 className="code">mock data used:</h3>
      <pre>{JSON.stringify(apiData, 0, 2)}</pre>
      <h3 className="font-monospace">mock data from spec:</h3>
      <pre>{JSON.stringify(mock.spec, 0, 2)}</pre>
    </div>
  )
}
