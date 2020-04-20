import React from 'react'
// import { action } from '@storybook/addon-actions'
import { ModelCalendar } from './ModelCalendar'

export default {
  title: 'MobileApp/Components/ModelCalendar',
  component: ModelCalendar
}

export const As_a_datepicker_inital_open = () => (
  <div className="mx-1 mt-2">
    <ModelCalendar />
  </div>
)
