import React from 'react'
import cx from 'classnames'

import Icon from '../Icons'

const SidebarMenu = ({ menuTree, dark }) => {
  const fallbackIcon = Icon.MenuItem

  const NavItem = ({ id, label, icon, active, link = { href: '#' }, children }) => {
    const IconElm = icon || fallbackIcon
    return (
      <li key={id} className="nav-item menu-open nav-sidebar-level-2">
        <a {...link} className={cx('nav-link', link.className, { active: active })}>
          <IconElm className="nav-icon" /> <p>{label}</p>
          {!!children && (
            <>
              {' '}
              <Icon.MenuAngleDown className="nav-icon right" />
            </>
          )}
        </a>
        {children}
      </li>
    )
  }

  return (
    <div className={cx('sidebar', dark ? 'sidebar-dark-primary' : 'sidebar-light-primary')}>
      {/* <div className={cx('sidebar', dark ? 'sidebar-dark-primary' : 'sidebar-light-primary')}> */}
      <ul className="nav nav-flat nav-sidebar nav-child-indent flex-column" data-widget="treeview" role="menu">
        {menuTree.map(({ id, label, submenu }) => (
          <>
            <li key={id} className="nav-header px-4 py-3 text-uppercase font-weight-bold" style={{ fontSize: '80%' }}>
              {label}
            </li>

            {!!submenu &&
              submenu.map(({ submenu, ...item }, ix) => {
                return (
                  <NavItem key={ix} {...item}>
                    {!!submenu && (
                      <ul className={cx('nav nav-treeview')}>
                        {submenu.map((item, ix) => {
                          if (item.submenu) throw new Error('menu level too deep!')
                          return <NavItem key={ix} {...item} />
                        })}
                      </ul>
                    )}
                  </NavItem>
                )
              })}
          </>
        ))}
      </ul>
    </div>
  )
}

const Sidebar = () => (
  <nav
    className="main-sidebar bg-dark sidebar-no-expand elevation-1"
    style={{ marginTop: '3.21875rem', fontWeight: '300 !important' }}
  >
    <SidebarMenu menuTree={fakeMenuTree.slice(0, 1)} />
    <SidebarMenu dark menuTree={fakeMenuTree.slice(1)} />
  </nav>
)

export default Sidebar
