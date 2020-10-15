import React from 'react'

import { AppWrapper, MainView, Navbar, Page, CallToAction } from './AppLayout'

export default {
  title: 'MobileApp/Components/AppLayout',
  parameters: { layout: 'fullscreen' }
}

const fakeNavbar = (
  <Navbar brandName="LEIHS" menuItem={{ href: '#/app/borrow/about' }} cartItem={{ href: '#/app/borrow/order' }} />
)

// stories

export const empty_page = () => (
  <AppWrapper>
    <MainView navbar={fakeNavbar}>
      <Page title={'Title'}>Content</Page>
    </MainView>
  </AppWrapper>
)

export const empty_cart_with_call_to_action = () => (
  <AppWrapper>
    <MainView navbar={fakeNavbar}>
      <Page title={'Bestellübersicht'}>
        <div className="d-flex">
          <CallToAction
            className="xmy-4 w-100 my-auto"
            actions={[{ href: '#/app/borrow/', children: 'Gegenstände ausleihen' }]}
          >
            Deine Bestellung ist leer
          </CallToAction>
        </div>
      </Page>
    </MainView>
  </AppWrapper>
)
