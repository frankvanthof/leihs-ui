import React from 'react'
import PropTypes from 'prop-types'
import f from 'lodash'

const FAKE_DATA = {
  reservationLines: JSON.parse(
    '[{"end-date":"2020-10-13T00:00:00Z","id":"973668f8-e198-4018-bde9-9dc844b71194","inventory-pool":{"id":"8bd16d45-056d-5590-bc7f-12849f034351","name":"Ausleihe Toni-Areal"},"model":{"id":"1c18b3d3-88e8-57ac-8c28-24d3f8f77604","name":"AVCHD-Kamera Sony HXR-NX5E","images":[{"id":"e2d0cfdf-745c-57cb-8c6b-09c14af6bb51","image-url":"/app/borrow/images/e2d0cfdf-745c-57cb-8c6b-09c14af6bb51"},{"id":"98757afe-39fd-50df-9a51-562c6a9aa3b3","image-url":"/app/borrow/images/98757afe-39fd-50df-9a51-562c6a9aa3b3"},{"id":"81965bab-d763-5bc7-aa91-e9c02c888297","image-url":"/app/borrow/images/81965bab-d763-5bc7-aa91-e9c02c888297"},{"id":"d7ba5f5f-ce74-5609-8360-41a912e6587b","image-url":"/app/borrow/images/d7ba5f5f-ce74-5609-8360-41a912e6587b"}]},"start-date":"2020-10-12T00:00:00Z","status":"UNSUBMITTED","user":{"id":"7da6733c-c819-5613-8cad-2a40f51c90da"}},{"end-date":"2020-10-13T00:00:00Z","id":"e86b8785-2f4f-44a2-87e3-7b5eaf7ddfd2","inventory-pool":{"id":"8bd16d45-056d-5590-bc7f-12849f034351","name":"Ausleihe Toni-Areal"},"model":{"id":"1d2e607b-d811-4984-a127-95cbc11b9bbf","name":"Videostativ Manfrotto 755XB/MVH500AH Videoneiger","images":[{"id":"0350f864-3e72-43dc-9365-b5f8ca277063","image-url":"/app/borrow/images/0350f864-3e72-43dc-9365-b5f8ca277063"},{"id":"7f236f26-3520-40e3-9fd5-3ba3bc0778be","image-url":"/app/borrow/images/7f236f26-3520-40e3-9fd5-3ba3bc0778be"}]},"start-date":"2020-10-12T00:00:00Z","status":"UNSUBMITTED","user":{"id":"7da6733c-c819-5613-8cad-2a40f51c90da"}}]'
  )
}

const ReservationLines = ({ lines }) => f.map(lines, line => <div key={line.id}>{JSON.stringify(line, 0, 2)}</div>)

ReservationLines.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })).isRequired
}

export default {
  title: 'MobileApp/Components/ShoppingCart',
  component: ReservationLines
}

export const ExampleLines = () => (
  <div className="p-4">
    {/* <pre>{JSON.stringify(FAKE_DATA, 0, 2)}</pre> */}
    <ReservationLines lines={FAKE_DATA.reservationLines} />
  </div>
)
