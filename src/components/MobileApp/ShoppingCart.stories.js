import React from 'react'
import PropTypes from 'prop-types'
import f from 'lodash'

import { Let } from '../Util'
import Icon from '../Icons'
// import { ImgPlaceholder } from './ImageThumbnail'

export default {
  title: 'MobileApp/Components/ShoppingCart',
  component: ReservationLines
}

const FAKE_DATA = {
  lines: [
    {
      reservation: {
        'end-date': '2020-10-13T00:00:00Z',
        id: '973668f8-e198-4018-bde9-9dc844b71194',
        'inventory-pool': { id: '8bd16d45-056d-5590-bc7f-12849f034351', name: 'Ausleihe Toni-Areal' },
        model: {
          id: '1c18b3d3-88e8-57ac-8c28-24d3f8f77604',
          name: 'AVCHD-Kamera Sony HXR-NX5E',
          manufacturer: 'Sony',
          coverImage: {
            id: 'e2d0cfdf-745c-57cb-8c6b-09c14af6bb51',
            'image-url': require('../../static/example-images/models/e2d0cfdf-745c-57cb-8c6b-09c14af6bb51.jpg')
          }
        },
        'start-date': '2020-10-12T00:00:00Z',
        status: 'UNSUBMITTED',
        user: { id: '7da6733c-c819-5613-8cad-2a40f51c90da' }
      },
      quantity: 3,
      isEditing: false,
      isInvalid: true
    },
    {
      reservation: {
        'end-date': '2020-10-13T00:00:00Z',
        id: 'e86b8785-2f4f-44a2-87e3-7b5eaf7ddfd2',
        'inventory-pool': { id: '8bd16d45-056d-5590-bc7f-12849f034351', name: 'Ausleihe Toni-Areal' },
        model: {
          id: '1d2e607b-d811-4984-a127-95cbc11b9bbf',
          name: 'Videostativ Manfrotto 755XB/MVH500AH Videoneiger',
          manufacturer: 'Manfrotto',
          coverImage: {
            id: '0350f864-3e72-43dc-9365-b5f8ca277063',
            'image-url': require('../../static/example-images/models/0350f864-3e72-43dc-9365-b5f8ca277063.jpg')
          }
        },
        'start-date': '2020-10-12T00:00:00Z',
        status: 'UNSUBMITTED',
        user: { id: '7da6733c-c819-5613-8cad-2a40f51c90da' }
      },
      quantity: 1,
      isEditing: false,
      isInvalid: false
    }
  ]
}

const ReservationLines = ({ lines }) => (
  <ul className="XXXlist-group XXXlist-group-flush" style={{ maxWidth: '650px', margin: 'auto' }}>
    {f.map(lines, (line, i) => (
      <ReservationLine key={i} {...line} />
    ))}
  </ul>
)

const ReservationLine = ({ reservation, quantity, isEditing, isInvalid }) => {
  const { model } = reservation

  return (
    <li className="media border-bottom pb-2 mb-2 align-items-center">
      {/* <div className="media"> */}
      <Let src={f.get(model, 'coverImage.image-url')}>
        {({ src }) => (
          <img
            style={{ maxWidth: '4rem', maxHeight: '4rem' }}
            className="img-fluid img-thumbnail mr-3"
            href={'#modelShow'}
            onClick={() => alert('would go to model page')}
            src={src}
          />
        )}
      </Let>
      <div className="media-body">
        <div className="container-fluid">
          <div className="row flex-nowrap align-items-end">
            <div className="col">
              <p className="font-semibold mb-0">
                {model.name}
                {/* <small>{model.manufacturer}</small> */}
              </p>
              <p className="small mb-0">{quantity} item(s)</p>
              <p className="small mb-0">{quantity} item(s)</p>
              {/* <pre className="mb-1">{JSON.stringify(reservation, 0, 2)}</pre> */}
            </div>
            <div className="col-2 align-self-center">
              <div className="btn-group-vertical">
                <button className="btn btn-sm btn-link text-muted text-center" onClick={() => alert('edit!')}>
                  <Icon.Edit fixedWidth />
                </button>
                <button className="btn btn-sm btn-link text-muted text-center" onClick={() => alert('delete!')}>
                  <Icon.Trash fixedWidth />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </li>
  )
}

ReservationLines.propTypes = {
  lines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      model: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        coverImage: PropTypes.shape({
          id: PropTypes.string.isRequired,
          'image-url': PropTypes.string.isRequired
        })
      }).isRequired,
      'inventory-pool': PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired,
      'start-date': PropTypes.string.isRequired,
      'end-date': PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired
}

export const ExampleLines = () => (
  <div className="p-4">
    {/* <pre>{JSON.stringify(FAKE_DATA, 0, 2)}</pre> */}
    <ReservationLines lines={FAKE_DATA.lines} />
  </div>
)
