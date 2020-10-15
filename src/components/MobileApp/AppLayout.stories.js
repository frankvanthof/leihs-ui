import React from 'react'

import { AppWrapper, MainView, Navbar, Page } from './AppLayout'

export default {
  title: 'MobileApp/Components/AppLayout',
  parameters: { layout: 'fullscreen' }
}

const fakeNavbar = (
  <Navbar brandName="LEIHS" menuItem={{ href: '/app/borrow/about' }} cartItem={{ href: '/app/borrow/order' }} />
)

export const EmptyCart = () => (
  <AppWrapper>
    <MainView navbar={fakeNavbar}>
      <Page title={'Bestellübersicht'}>
        <div className="bg-content-muted text-center my-4 px-2 py-4 rounded-lg">
          <div className="text-base">Deine Bestellung ist leer</div>
          <a
            href="/app/borrow/"
            className="d-inline-block text-xl bg-content-inverse text-color-content-inverse rounded-pill px-4 py-2 my-4"
          >
            Gegenstände ausleihen
          </a>
        </div>
      </Page>
    </MainView>
  </AppWrapper>
)
