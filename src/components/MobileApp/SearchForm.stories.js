import React from 'react'
import { action } from '@storybook/addon-actions'
import { addDays } from 'date-fns'
import SearchForm from './SearchForm'

export default {
  title: 'MobileApp/Components/SearchForm',
  component: SearchForm
}

const exampleActions = {
  submit: { fn: action('submit') },
  clear: { fn: action('clear') }
}

export const Empty = () => (
  <div className="p-3">
    <SearchForm params={{ searchTerm: '' }} actions={exampleActions} />
  </div>
)
export const SubmitDisabled = () => (
  <div className="p-3">
    <SearchForm
      params={{ searchTerm: '' }}
      actions={{
        ...exampleActions,
        submit: { ...exampleActions.submit, disabled: true }
      }}
    />
  </div>
)

export const Prefilled = () => (
  <div className="p-3">
    <SearchForm
      fields={{
        searchTerm: { value: 'sony', onChange: action('change-search-term') },
        startDate: {
          value: addDays(new Date(), 1)
            .toISOString()
            .split('T')[0],
          onChange: action('change-start-date')
        },
        endDate: {
          value: addDays(new Date(), 2)
            .toISOString()
            .split('T')[0],
          onChange: action('change-end-date')
        }
      }}
      actions={exampleActions}
    />
  </div>
)
