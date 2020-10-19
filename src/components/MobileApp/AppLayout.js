import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/dedupe'

export const AppWrapper = ({ children }) => <div id="app">{children}</div>

export const MainView = ({ navbar = false, errors = false, className, children }) => (
  <main className={cx(className, 'ui-mainview')}>
    {navbar}
    {/* NOTE: max width because we dont support larger screens yet */}
    <div className="container-md" style={{ maxWidth: '720px' }}>
      {errors}
      {children}
    </div>
  </main>
)

export const Page = ({ title, backLink, className, children }) => (
  <div className={cx('ui-page p-2 p-sm-3', className)}>
    <header className="mt-3 mb-3">
      {!!backLink && (
        <a {...backLink} className={cx('font-semibold', backLink.className)}>
          {'← '}
          {backLink.children || false}
        </a>
      )}
      {!!title && <h1 className="text-3xl font-bold">{title}</h1>}
    </header>
    {children}
  </div>
)

export const SubSection = ({ title, className, moreLink = {}, children, Elm = 'section' }) => (
  <Elm className={cx(className, 'ui-subsection')} data-title={title}>
    <div className="mt-2 pb-2 d-flex align-items-baseline justify-content-between">
      <h2 className="font-bold text-2xl">{title}</h2>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      {!!moreLink.href && <a className="font-semibold text-color-content text-l" {...moreLink} />}
    </div>
    {children}
  </Elm>
)
SubSection.propTypes = { title: PropTypes.string.isRequired }

export const CallToAction = ({ className, children, actions = [] }) => (
  <div className={cx(className, 'ui-calltoaction bg-content-muted text-center px-2 py-4 rounded-lg')}>
    <div className="text-base">{children}</div>
    <div className="mt-2 mb-0">
      {actions.map(({ className, children, ...props }, i) => (
        <a
          key={i}
          {...props}
          className={cx(className, 'btn btn-link d-inline-block text-xl rounded-pill px-4 py-2 my-2 mx-1', {
            'bg-content-inverse text-color-content-inverse': i === 0,
            'bg-content text-color-content': i !== 0
          })}
        >
          {children}
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
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <span className="ui-icon ui-icon-colored ui-shopping-cart-icon">🛒</span>
        </a>
      </div>
    </div>
  </nav>
)