import React from 'react'
import cx from 'classnames'

const BASE_CLASS = 'ui-search-form'
const noop = () => {}

const SearchForm = ({
  url = '/my-search',
  method = 'POST',
  fields: { searchTerm, startDate, endDate } = {},
  actions: { submit = { fn: noop }, clear = { fn: noop } } = {},
  id = 'model-search-form'
}) => {
  return (
    <div>
      <form
        className={cx('form form-compact', BASE_CLASS)}
        action={url}
        method={method}
        onSubmit={e => {
          e.preventDefault()
          submit.fn()
        }}
      >
        <div className="form-group row">
          <label
            htmlFor={id + '-inputsearchTerm'}
            className="col-2 col-form-label text-xs"
          >
            Search
          </label>
          <div className="col-10">
            <input
              className="form-control"
              id={id + '-inputsearchTerm'}
              type="text"
              name="search-term"
              value=""
              {...searchTerm}
            />
          </div>
        </div>

        <div className="form-group row">
          <label
            htmlFor={id + '-inputStartDate'}
            className="col-2 col-form-label text-xs"
          >
            from
          </label>
          <div className="col-10">
            <input
              id={id + '-inputStartDate'}
              className="form-control"
              type="date"
              name="start-date"
              required
              value=""
              {...startDate}
            />
          </div>
        </div>

        <div className="form-group row">
          <label
            htmlFor={id + 'inputEndDate'}
            className="col-2 col-form-label text-xs"
          >
            until
          </label>
          <div className="col-10">
            <input
              id={id + 'inputEndDate'}
              className="form-control"
              type="date"
              name="enddate"
              value=""
              required
              {...endDate}
            />
          </div>
        </div>

        <div className="form-group row mt-2">
          <div className="col-10 offset-2">
            <button
              type="submit"
              className="btn btn-success rounded-pill"
              disabled={submit.disabled}
              title={submit.title}
            >
              Get Results
            </button>
            <button
              type="reset"
              className="btn btn-secondary rounded-pill mx-1"
              onClick={clear.fn}
              disabled={clear.disabled}
              title={clear.title}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchForm
