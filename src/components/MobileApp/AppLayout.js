import React from 'react'
import cx from 'classnames'

export const AppWrapper = ({ children }) => <div id="app">{children}</div>

export const MainView = ({ navbar = false, errors = false, children }) => (
  <main>
    {navbar}
    {errors}
    {children}
  </main>
)

export const CallToAction = ({ className, children, actions = [] }) => (
  <div className={cx(className, 'bg-content-muted text-center px-2 py-4 rounded-lg')}>
    <div className="text-base">{children}</div>
    <div className="my-3">
      {actions.map(({ className, ...props }, i) => (
        <a
          key={i}
          {...props}
          className={cx(className, 'btn btn-link d-inline-block text-xl rounded-pill px-4 py-2 my-1', {
            'bg-content-inverse text-color-content-inverse': i === 0,
            'text-color-content': i !== 0
          })}
        >
          Gegenstände ausleihen
        </a>
      ))}
    </div>
  </div>
)

export const Navbar = ({ brandName = 'LEIHS', menuItem, cartItem }) => (
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
        <a className="nav-item nav-link px-0" {...menuItem}>
          <span className="ui-icon ui-menu-icon">☰</span>
        </a>
      </div>
    </div>
    <div className="mx-auto">
      {!!brandName && (
        <a className="navbar-brand m-0 font-black text-xl" {...cartItem}>
          {' ' + brandName + ' '}
        </a>
      )}
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

export const Page = ({ title, children }) => (
  <div className="p-2">
    <h1 className="mt-3 font-bold text-3xl">{title}</h1>
    {children}
  </div>
)
