import React from 'react'

export default {
  title: 'MobileApp/Components/AppLayout',
  parameters: { layout: 'fullscreen' }
}

const AppWrapper = ({ children }) => <div id="app">{children}</div>

const MainView = ({ navbar = false, errors = false, children }) => (
  <main>
    {navbar}
    {errors}
    {children}
  </main>
)
const fakeNavbar = (
  <nav
    className="ui-main-nav navbar navbar-light text-xl shadow-md py-0 px-2 sticky-top flex-nowrap justify-content-between"
    style={{
      top: '0px',
      zIndex: 1000,
      borderBottomColor: 'rgba(0, 0, 0, 0.08)',
      WebkitBackdropFilter: 'blur(12px)',
      backgroundColor: 'rgba(255, 255, 255, 0.83)',
      backgroundPosition: 'initial initial',
      backgroundRepeat: 'initial initial'
    }}
  >
    <div className="navbar-nav w-100">
      <div className="mr-auto">
        <a href="/app/borrow/about" className="nav-item nav-link px-0">
          <span className="ui-icon ui-menu-icon">☰</span>
        </a>
      </div>
    </div>
    <div className="mx-auto">
      <a href="/app/borrow/" className="navbar-brand m-0 font-black text-xl">
        {' '}
        LEIHS{' '}
      </a>
    </div>
    <div className="navbar-nav w-100">
      <div className="ml-auto d-flex align-items-center">
        <div className="mx-auto px-2 text-xs">
          <span className="text-color-info" />
        </div>{' '}
        <a href="/app/borrow/order" className="nav-item nav-link px-0">
          <span className="ui-icon ui-icon-colored ui-shopping-cart-icon">🛒</span>
        </a>
      </div>
    </div>
  </nav>
)

export const EmptyCart = () => (
  <AppWrapper>
    <MainView navbar={fakeNavbar}>
      <div className="p-2">
        <h1 className="mt-3 font-bold text-3xl">Bestellübersicht</h1>
        <div className="bg-content-muted text-center my-4 px-2 py-4 rounded-lg">
          <div className="text-base">Deine Bestellung ist leer</div>
          <a
            href="/app/borrow/"
            className="d-inline-block text-xl bg-content-inverse text-color-content-inverse rounded-pill px-4 py-2 my-4"
          >
            Gegenstände ausleihen
          </a>
        </div>
      </div>
    </MainView>
  </AppWrapper>
)
