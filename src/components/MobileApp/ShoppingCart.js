import React from 'react'
import PropTypes from 'prop-types'
import f from 'lodash'
import cx from 'classnames'

import { Container, Row } from '../Bootstrap'
import Icon from '../Icons'
import { ImgPlaceholder } from './ImageThumbnail'

// NOTE: not used in app, just for simulating what the app does in stories
export const ReservationLines = ({ lines, ...restProps }) => (
  <ul className="list-unstyled">
    {f.map(lines, (line, i) =>
      line.isEditing ? (
        'TBD' // <ReservationLineEditor key={i} {...line} {...restProps} />
      ) : (
        <ReservationLine key={i} {...line} {...restProps} />
      )
    )}
  </ul>
)

function formatDate(date, style = 'short') {
  const d = f.isDate(date) ? date : new Date(date)
  try {
    return Intl.DateTimeFormat({ dateStyle: style }).format(d)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error, date)
  }
}
function formatDateRange([startDate, endDate], style = 'short') {
  return formatDate(startDate, style) + ' – ' + formatDate(endDate, style)
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
    <li
      className={cx('ui-reservation-line media border-bottom pb-2 mb-2 align-items-start', {
        'text-danger': isInvalid
      })}
    >
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
                {quantity} Item(s) • {f.map(pools, 'name').join(',')}
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
