import React, { useState } from 'react'
import PropTypes from 'prop-types'
import f from 'lodash'
import cx from 'classnames'

// import { Calendar } from '@leihs/calendar'
import { Container, Row, Col, Button } from '../Bootstrap'
import { Let } from '../Util'
import Icon from '../Icons'
// const df = require('date-fns')
import { ImgPlaceholder } from './ImageThumbnail'

// NOTE: not used in app, just for simulating what the app does in stories
export const ReservationLines = ({ lines, ...restProps }) => (
  <ul className="list-unstyled">
    {f.map(lines, (line, i) =>
      line.isEditing ? (
        <ReservationLineEditor key={i} {...line} {...restProps} />
      ) : (
        <ReservationLine key={i} {...line} {...restProps} />
      )
    )}
  </ul>
)
const noop = () => {}

function formatDate(date, style = 'short') {
  const d = f.isDate(date) ? date : new Date(date)
  try {
    return Intl.DateTimeFormat({ dateStyle: style }).format(d)
  } catch (error) {
    console.error(error, date)
  }
}
function formatDateRange([startDate, endDate], style = 'short') {
  return formatDate(startDate, style) + ' – ' + formatDate(endDate, style)
}

const DatePicker = ({ value, onChange = noop, ...props }) => {
  const [date, setDate] = useState(value)
  return (
    <div>
      <input
        type="date"
        class="form-control"
        id="exampleFormControlInput1"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      {/* <Calendar {...props} /> */}
    </div>
  )
}
export const ReservationLine = ({
  reservation,
  quantity,
  imageUrl,
  pools,
  isInvalid,
  onEdit,
  onDelete,
  isEditing,
  editorProps,
  texts
}) => {
  const { model } = reservation

  return (
    <li className={cx('media border-bottom pb-2 mb-2 align-items-start', { 'text-danger': isInvalid })}>
      <div className="d-flex">
        <a href="#modelShow" className="mr-3" style={{ maxWidth: '4rem' }}>
          {imageUrl ? (
            <img src={imageUrl} alt={model.name} className="img-fluid img-thumbnail" />
          ) : (
            <div
              className="square-container position-relative rounded-lg overflow-hidden border border-gray-200"
              style={{ width: '4rem', height: '4rem' }}
            >
              <ImgPlaceholder />
            </div>
          )}
        </a>
      </div>
      <div className="media-body">
        <Container fluid className="p-0">
          <Row className="no-gutters flex-nowrap align-items-end">
            <div className="col">
              <p className="font-semibold mb-0">
                {model.name}
                {/* <small>{model.manufacturer}</small> */}
              </p>
              <p className="small mb-0">
                {/* {formatDateRange([f.get(reservation, 'start-date'), f.get(reservation, 'end-date')])} */}
                {/* FIXME: those props should not be camelCased but i cant find where its transformed */}
                {formatDateRange([f.get(reservation, 'startDate'), f.get(reservation, 'endDate')])}
              </p>
              <p className="small mb-0">
                {quantity} item(s) • {f.map(pools, 'name').join(',')}
              </p>
            </div>
            <div className="col-2 align-self-center flex-grow-1 text-right">
              <div className="btn-group-vertical">
                <button
                  type="button"
                  className="btn btn-sm btn-link text-muted text-center"
                  onClick={() => onEdit(reservation.id)}
                >
                  <Icon.Edit fixedWidth />
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-link text-muted text-center"
                  onClick={() => onDelete(reservation.id)}
                >
                  <Icon.Trash fixedWidth />
                </button>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </li>
  )
}

const ReservationLinePropType = PropTypes.shape({
  quantity: PropTypes.number.isRequired,
  isEditing: PropTypes.bool,
  isInvalid: PropTypes.bool,
  reservation: PropTypes.shape({
    id: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    'inventory-pool': PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    model: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      manufacturer: PropTypes.string,
      coverImage: PropTypes.shape({
        id: PropTypes.string.isRequired,
        'image-url': PropTypes.string.isRequired
      })
    }).isRequired,
    user: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  })
})

ReservationLine.propTypes = ReservationLinePropType.isRequired

ReservationLines.propTypes = {
  lines: PropTypes.arrayOf(ReservationLinePropType).isRequired
}

const ReservationLineEditor = ({
  reservation,
  initialStartDate = '',
  initialEndDate = '',
  initialUserId,
  initialQuantity,
  maxQuantity,
  delegations = [],
  isInvalid,
  onSave,
  onCancelEdit,
  onChange,
  texts
}) => {
  const uid = `_${reservation.id}`

  const [fields, setFormFields] = useState({
    startDate: initialStartDate.split('T')[0],
    endDate: initialEndDate.split('T')[0],
    quantity: initialQuantity,
    userId: initialUserId
  })
  const setField = newFields => {
    setFormFields({ ...fields, ...newFields })
    onChange(fields.startDate, fields.endDate, fields.userId)
  }

  const isLoadingQuantity = maxQuantity == null
  const isValidSelection = maxQuantity >= fields.quantity
  const showValidations = false //isInvalid || (fields.startDate && fields.endDate)

  return (
    <Container className={cx('border-bottom px-0 pb-1 mb-2', { 'was-validated': showValidations })}>
      <p className="h5 text-color-muted mb-2">Change reservation</p>

      <Row>
        <Col md>
          <Row>
            <Col xs>
              <div className="form-group form-group-sm">
                <label for="exampleFormControlInput1">{'from'}</label>
                <DatePicker
                  type="date"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={fields.startDate}
                  onChange={e => setField({ startDate: e.target.value })}
                />
                {/* <input
              type="date"
              class="form-control"
              id="exampleFormControlInput1"
              value={startDate}
              onChange={e => setField({ startDate: e.target.value })}
            /> */}
              </div>
            </Col>
            <Col xs>
              <div className="form-group form-group-sm">
                <label for="exampleFormControlInput2">{'until'}</label>
                <input
                  type="date"
                  class="form-control"
                  id="exampleFormControlInput2"
                  value={fields.endDate}
                  onChange={e => setField({ endDate: e.target.value })}
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md>
          <Row>
            <Col xs>
              <Let id={'quantity' + uid} isLoading={isLoadingQuantity}>
                {({ id, isLoading }) => (
                  <div className="form-group form-group-sm">
                    <label htmlFor={id}>quantity</label>{' '}
                    <div className="input-group input-group-sm">
                      <input
                        id={id}
                        type="number"
                        className="form-control"
                        aria-describedby={uid + 'addon'}
                        max={maxQuantity}
                        value={fields.quantity}
                        onChange={e => setField({ quantity: e.target.value })}
                      />
                      <div className="input-group-append" onClick={() => setField({})}>
                        <span
                          className="input-group-text"
                          id={uid + 'addon'}
                          aria-label={`maximum available quantity is ${maxQuantity}`}
                        >
                          / {isLoading ? '…' : `${maxQuantity} max.`}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </Let>
            </Col>
            <Col xs>
              {delegations.length > 1 && (
                <div className="form-group form-group-sm">
                  <label for="exampleFormControlSelect1">{'for'}</label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    value={fields.userId}
                    onChange={e => setField({ userId: e.target.value })}
                  >
                    {delegations.map(({ id, label }) => (
                      <option value={id}>{label}</option>
                    ))}
                  </select>
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="my-2">
            <Button outline size="sm" color="success" className="mr-1" onClick={onSave} disabled={!isValidSelection}>
              {'update'}
            </Button>
            <Button outline size="sm" onClick={onCancelEdit}>
              {'cancel'}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
