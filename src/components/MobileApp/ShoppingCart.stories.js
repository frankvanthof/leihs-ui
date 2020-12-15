import React from 'react'

import { AppWrapper, MainView, Navbar, Page } from './AppLayout'

import { ReservationLines } from './ShoppingCart.js'

export default {
  title: 'MobileApp/Components/ShoppingCart',
  component: ReservationLines,
  argTypes: { onEdit: { action: 'onEdit' }, onDelete: { action: 'onDelete' } }
}

const fakeNavbar = (
  <Navbar brandName="LEIHS" menuItem={{ href: '#/app/borrow/about' }} cartItem={{ href: '#/app/borrow/order' }} />
)

const FAKE_EDITING_PROPS = {
  texts: {
    label_from: 'from',
    label_until: 'until',
    label_quantity: 'quantity',
    label_for: 'for',
    btn_update: 'update',
    btn_cancel: 'cancel'
  }
}

const FAKE_DATA = {
  lines: [
    {
      reservation: {
        id: '973668f8-e198-4018-bde9-9dc844b71194',
        model: {
          id: '1c18b3d3-88e8-57ac-8c28-24d3f8f77604',
          name: 'AVCHD-Kamera Sony HXR-NX5E',
          manufacturer: 'Sony'
        },
        startDate: '2020-10-12T00:00:00Z',
        endDate: '2020-10-13T00:00:00Z',
        user: { id: '7da6733c-c819-5613-8cad-2a40f51c90da' }
      },
      pools: [
        { id: '8bd16d45-056d-5590-bc7f-12849f034351', name: 'Ausleihe Toni-Areal' },
        { id: 'c7908e5d-ca98-4011-b926-c2e0ee09ce7a', name: 'Andere Ausleihe' }
      ],
      imageUrl: require('../../static/example-images/models/e2d0cfdf-745c-57cb-8c6b-09c14af6bb51.jpg'),
      quantity: 3,
      isEditing: false
    },
    {
      reservation: {
        id: 'e86b8785-2f4f-44a2-87e3-7b5eaf7ddfd2',
        model: {
          id: '1d2e607b-d811-4984-a127-95cbc11b9bbf',
          name: 'Videostativ Manfrotto 755XB/MVH500AH Videoneiger',
          manufacturer: 'Manfrotto'
        },
        startDate: '2020-10-12T00:00:00Z',
        endDate: '2020-10-13T00:00:00Z',
        user: { id: '7da6733c-c819-5613-8cad-2a40f51c90da' }
      },
      pools: [{ id: '8bd16d45-056d-5590-bc7f-12849f034351', name: 'Ausleihe Toni-Areal' }],
      imageUrl: require('../../static/example-images/models/0350f864-3e72-43dc-9365-b5f8ca277063.jpg'),
      quantity: 1,
      isEditing: false
    },
    {
      reservation: {
        id: '0d3c69c4-4879-4eff-92d5-041d664c20a7',
        model: {
          id: '0175ca09-453a-444b-84da-74165baa48d5',
          name: 'A Model with no Image',
          manufacturer: 'ACME'
        },
        startDate: '2020-10-12T00:00:00Z',
        endDate: '2020-10-13T00:00:00Z',
        user: { id: '7da6733c-c819-5613-8cad-2a40f51c90da' }
      },
      pools: [{ id: '8bd16d45-056d-5590-bc7f-12849f034351', name: 'Ausleihe Toni-Areal' }],
      imageUrl: undefined,
      quantity: 1,
      isEditing: false
    },
    {
      reservation: {
        id: '565ae871-2171-4f15-9601-6fefbcea60e0',
        model: {
          id: '508aa668-87f8-4e01-b780-980ada16d5e5',
          name: 'An invalid Reservation',
          manufacturer: 'ACME'
        },
        startDate: '2020-10-12T00:00:00Z',
        endDate: '2020-10-13T00:00:00Z',
        user: { id: '7da6733c-c819-5613-8cad-2a40f51c90da' }
      },
      pools: [{ id: '8bd16d45-056d-5590-bc7f-12849f034351', name: 'Ausleihe Toni-Areal' }],
      imageUrl: undefined,
      quantity: 1,
      isEditing: false,
      isInvalid: true
    },
    {
      reservation: {
        id: '9dab1adb-2a75-46ae-82ee-b2ad55fe7d01',
        model: {
          id: 'ef73e226-2345-4ed8-bb22-d1174484249b',
          name: 'Editing a Reservation',
          manufacturer: 'ACME'
        },
        startDate: '2020-10-12T00:00:00Z',
        endDate: '2020-10-13T00:00:00Z',
        user: { id: '7da6733c-c819-5613-8cad-2a40f51c90da' }
      },
      pools: [{ id: '8bd16d45-056d-5590-bc7f-12849f034351', name: 'Ausleihe Toni-Areal' }],
      imageUrl: undefined,
      quantity: 1,
      isEditing: true,
      ...FAKE_EDITING_PROPS,
      editorProps: {
        quantity: 1,
        maxQuantity: 5
      },
      isInvalid: false
    },
    {
      reservation: {
        id: '1958d2ce-bcff-4bff-b170-e9d1a0b59431',
        model: {
          id: '13e18b26-b2d9-406d-a137-7c7ac51cd339',
          name: 'Editing an invalid Reservation',
          manufacturer: 'ACME'
        },
        startDate: '2020-10-12T00:00:00Z',
        endDate: '2020-10-13T00:00:00Z',
        user: { id: '7da6733c-c819-5613-8cad-2a40f51c90da' }
      },
      pools: [{ id: '8bd16d45-056d-5590-bc7f-12849f034351', name: 'Ausleihe Toni-Areal' }],
      imageUrl: undefined,
      quantity: 1,
      isEditing: true,
      ...FAKE_EDITING_PROPS,
      editorProps: {
        quantity: 1,
        maxQuantity: 3,
        delegations: [
          { id: '37cd4f66-3533-4ce7-8a9c-a7123ecbaf81', label: 'Hans Heiri' },
          { id: '37cd4f66-3533-4ce7-8a9c-a7123ecbaf81', label: 'Superteam' }
        ]
      },
      isInvalid: true
    }
  ]
}

export const example_lines = args => (
  <div>
    {/* <pre>{JSON.stringify(FAKE_DATA, 0, 2)}</pre> */}
    <ReservationLines lines={FAKE_DATA.lines} onEdit={args.onEdit} onDelete={args.onDelete} />
  </div>
)

export const example_cart = args => (
  <AppWrapper>
    <MainView navbar={fakeNavbar}>
      <Page title={'Warenkorb'}>
        {/* <pre>{JSON.stringify(FAKE_DATA, 0, 2)}</pre> */}
        <ReservationLines lines={FAKE_DATA.lines} onEdit={args.onEdit} onDelete={args.onDelete} />
      </Page>
    </MainView>
  </AppWrapper>
)
example_cart.parameters = { layout: 'fullscreen' }
