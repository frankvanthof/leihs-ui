import React from 'react'

import { AppWrapper, MainView, Navbar, Page, CallToAction } from './AppLayout'

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
        <CallToAction className="my-4" actions={[{ href: '#/app/borrow/', children: 'Gegenstände ausleihen' }]}>
          Deine Bestellung ist leer
        </CallToAction>
      </Page>
    </MainView>
  </AppWrapper>
)
