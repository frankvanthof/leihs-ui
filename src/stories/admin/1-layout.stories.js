import React from 'react'
import cx from 'classnames'

import Navbar from '../../components/Navbar'
import sharedNavbarProps from '../_sharedNavbarProps.json'

// TMP
// require('../../fontawesome-all.css')

export default {
  title: 'Admin/Layout',
  parameters: { layout: 'fullscreen', viewport: null }
}

const fakeMenuTree = [
  {
    id: 'manage',
    label: 'Manage',
    children: [
      {
        id: 'pools',
        label: 'Inventory-Pools'
      },
      {
        id: 'aa54457f-e470-4cca-bb12-516552e98777',
        label: 'ITZ-Ausstellungen',
        active: true,
        children: [
          { id: 'users', label: 'Users', icon: 'fa-user-friends' },
          { id: 'groups', label: 'Groups', icon: 'fa-users', active: true },
          { id: 'delegations', label: 'Delegations', icon: 'fa-hands-helping' },
          { id: 'entitlement-groups', label: 'Entitlement-Groups', icon: 'fa-hands' },
          { id: 'mail-templates', label: 'Mail Templates', icon: 'fa-list' },
          { id: 'fields', label: 'Fields', icon: 'fa-list' }
        ]
      }
    ]
  },
  {
    id: 'reports',
    label: 'reports',
    children: [
      { id: 'statistics', label: 'Statistics', icon: 'fa-chart-line' },
      { id: 'inventory', label: 'Inventory', icon: 'fa-cube' },
      { id: 'status-info', label: 'Status Info', icon: 'fa-thermometer-half' },
      {
        id: 'audits',
        label: 'Audits',
        icon: 'fa-history',
        children: [
          { id: 'legacy', label: 'Legacy', icon: 'fa-history' },
          { id: 'audited-changes', label: 'Audited Changes', icon: 'fa-save' },
          { id: 'audited-requests', label: 'Audited Requests', icon: 'fa-exchange-alt' }
        ]
      }
    ]
  },
  {
    id: 'configuration',
    label: 'Configuration',

    children: [
      { label: 'Fields', icon: 'fa-list' },
      { label: 'Buildings', icon: 'fa-list' },
      { label: 'Rooms', icon: 'fa-list' },
      { label: 'Suppliers', icon: 'fa-list' },
      { label: 'Languages', icon: 'fa-list' },
      { label: 'Mail Templates', icon: 'fa-list' }
    ]
  },
  {
    id: 'administration',
    label: 'Administration',
    children: [
      { label: 'Users', icon: 'fa-user-friends' },
      { label: 'Groups', icon: 'fa-users' },
      { label: 'System-Admins', icon: 'fa-user-astronaut' },
      { label: 'Authentication-Systems', icon: 'fa-id-card' },
      {
        label: 'Settings',
        children: [
          { label: 'Languages', icon: 'fa-globe' },
          { label: 'Miscellaneous', icon: 'fa-box-open' },
          { label: 'SMTP', icon: 'fa-paper-plane' },
          { label: 'System & Security', icon: 'fa-shield-alt' }
        ]
      }
    ]
  }
]

const fakeAdminNavbarProps = {
  ...sharedNavbarProps,
  config: {
    ...sharedNavbarProps.config,
    appTitle: 'Leihs',
    me: {
      user: {
        id: '4f3e27b1-dd1a-4ae1-a34c-6f0b5b233199',
        firstname: 'Adam',
        lastname: 'Administrateur',
        login: 'aadmin',
        email: 'adam.administrateur@example.org'
      }
    },
    subApps: {
      borrow: true,
      admin: false,
      procure: true,
      manage: [
        { name: 'Ausleihe Doni-Areal', href: '/manage/4e26679d-e504-4b4f-b933-8ef870544813/daily' },
        { name: 'UMU-Ausstellungen', href: '/manage/15e91f56-518c-4417-8764-a0d31422b7d5/daily' },
        { name: 'UMU-Software', href: '/manage/8230d5f8-7afd-4a67-8782-29256a7ab9c1/daily' }
      ]
    }
  }
}

const FAKE_GROUPS = require('../fake-data/admin-groups').default.slice(0, 50)

const FakePoolGroupsPage = () => (
  <div className="inventory-pool-groups">
    <div className="row nav-component mt-3 breadcrumbs-bar">
      <nav aria-label="breadcrumb" role="navigation" className="col-lg">
        <ol className="breadcrumb">
          <li className="breadcrumb-item ">
            <a href="/">
              <span>
                <i className="fas fa-home" /> Home{' '}
              </span>
            </a>
          </li>
          <li className="breadcrumb-item ">
            <a href="/admin/">
              <span>
                <i className="fas fa-wrench" /> Admin{' '}
              </span>
            </a>
          </li>
          <li className="breadcrumb-item ">
            <a href="/admin/inventory-pools/">
              <span>
                <i className="fas fa-cubes" /> Inventory-Pools{' '}
              </span>
            </a>
          </li>
          <li className="breadcrumb-item ">
            <a href="/admin/inventory-pools/fa70f3fa-8407-42b1-9a93-5a4612bb4925">
              <span>
                <i className="fas fa-cube" /> Inventory-Pool{' '}
              </span>
            </a>
          </li>
          <li className="breadcrumb-item active">
            <span>
              <span>
                <i className="fas fa-users" /> Groups{' '}
              </span>
            </span>
          </li>
        </ol>
      </nav>
      <nav role="navigation" className="col-lg breadcrumbs-right" />
    </div>
    <div>
      <h1>
        Groups with their Roles <span> in the Inventory-Pool </span>
        <span>
          <a href="/admin/inventory-pools/fa70f3fa-8407-42b1-9a93-5a4612bb4925">
            <em>Flowerlake Campus</em>
          </a>
        </span>
      </h1>
      <div>
        <div className="card bg-light">
          <div className="card-body">
            <div className="form-row">
              <div className="form-group ml-2 mr-2 mt-2 col-md-3">
                <label htmlFor="term">Search</label>
                <input
                  type="text"
                  placeholder="fuzzy term"
                  tabIndex={1}
                  id="term"
                  className="form-control mb-1 mr-sm-1 mb-sm-0"
                  defaultValue
                />
              </div>
              <div className="form-group ml-2 mr-2 mt-2">
                <label htmlFor="groups-including-user">Including User</label>
                <input
                  type="text"
                  placeholder="ID or E-Mail Address"
                  id="groups-including-user"
                  className="form-control mb-1 mr-sm-1 mb-sm-0"
                  defaultValue
                />
              </div>
              <div className="form-group ml-2 mr-2 mt-2">
                <label htmlFor="groups-filter-role" className="mr-1">
                  {' '}
                  Role{' '}
                </label>
                <select id="groups-filter-role" className="form-control">
                  <option value="any">any</option>
                  <option value="none">none</option>
                  <option value="customer">customer</option>
                  <option value="group_manager">group_manager</option>
                  <option value="lending_manager">lending_manager</option>
                  <option value="inventory_manager">inventory_manager</option>
                </select>
              </div>
              <div className="form-group ml-2 mr-2 mt-2">
                <label htmlFor="per-page" className="mr-1">
                  Per page
                </label>
                <select tabIndex={100} id="per-page" className="form-control">
                  <option value={12}>12</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                  <option value={250}>250</option>
                  <option value={500}>500</option>
                  <option value={1000}>1000</option>
                </select>
              </div>
              <div className="form-group mt-2">
                <label htmlFor="reset-query-params">Reset filters</label>
                <div>
                  <button tabIndex={1} id="reset-query-params" className="btn btn-outline-warning">
                    <i className="fas fa-times" /> Reset{' '}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix mt-2 mb-2">
          <div className="float-left">
            <a
              className="btn btn-outline-primary btn-sm disabled"
              href="/admin/inventory-pools/fa70f3fa-8407-42b1-9a93-5a4612bb4925/groups/?page=0&per-page=50&org-member=&term=&including-user=&role=any"
            >
              <i className="fas fa-arrow-circle-left" /> previous{' '}
            </a>
          </div>
          <div className="float-right">
            <a
              href="/admin/inventory-pools/fa70f3fa-8407-42b1-9a93-5a4612bb4925/groups/?page=2&per-page=50&org-member=&term=&including-user=&role=any"
              className="btn btn-outline-primary btn-sm"
            >
              {' '}
              next <i className="fas fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        <table className="groups table table-striped table-sm">
          <thead>
            <tr>
              <th>Index</th>
              <th>Protected</th>
              <th>Org ID</th>
              <th>Name</th>
              <th> Roles </th>
            </tr>
          </thead>
          <tbody>
            {FAKE_GROUPS.map((group, index) => (
              <tr className="group" key={index}>
                <td>{index}</td>
                <td>{group.protected}</td>
                <td>{group.org_id}</td>
                <td>
                  <a href={`/admin/groups/${group.id}`}>
                    <span>{group.name}</span>
                  </a>
                </td>
                <td>
                  <div className="mb-1">
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>
                  <a
                    href="/admin/inventory-pools/fa70f3fa-8407-42b1-9a93-5a4612bb4925/groups/ec0baf9f-93d6-4f0e-ae48-6590d4459872/roles"
                    className="btn btn-outline-primary btn-sm"
                  >
                    <span>
                      <i className="fas fa-plus-circle" /> Add{' '}
                    </span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="clearfix mt-2 mb-2">
          <div className="float-left">
            <a
              className="btn btn-outline-primary btn-sm disabled"
              href="/admin/inventory-pools/fa70f3fa-8407-42b1-9a93-5a4612bb4925/groups/?page=0&per-page=50&org-member=&term=&including-user=&role=any"
            >
              <i className="fas fa-arrow-circle-left" /> previous{' '}
            </a>
          </div>
          <div className="float-right">
            <a
              href="/admin/inventory-pools/fa70f3fa-8407-42b1-9a93-5a4612bb4925/groups/?page=2&per-page=50&org-member=&term=&including-user=&role=any"
              className="btn btn-outline-primary btn-sm"
            >
              {' '}
              next <i className="fas fa-arrow-circle-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const SidebarMenu = ({ menuTree }) => (
  <nav>
    <ul
      className="nav XXXnav-pills nav-flat nav-sidebar nav-child-indent flex-column"
      data-widget="treeview"
      role="menu"
    >
      {menuTree.map(({ id, label, children }) => (
        <>
          <li key={id} className="nav-header text-uppercase font-weight-bold">
            {label} {/* manage */}
          </li>

          {!!children &&
            children.map(({ id, label, icon, active, link = { href: '#' }, children }) => (
              <li key={id} className="nav-item menu-open nav-sidebar-level-1">
                <a {...link} className={cx('nav-link', link.className, { active: active })}>
                  <i className={cx('nav-icon', icon ? ['fa', icon] : 'fa fa-circle')} />
                  <p>{label}</p> {/* PoolName */}
                  {!!children && (
                    <>
                      {' '}
                      <i className="right fas fa-angle-left" />
                    </>
                  )}
                </a>

                {!!children && (
                  <ul className={cx('nav nav-treeview')}>
                    {children.map(({ id, label, icon, active, link = { href: '#' }, children }) => {
                      if (children) throw new Error('menu level too deep!')
                      return (
                        <li key={id} className="nav-item menu-open nav-sidebar-level-2">
                          <a {...link} className={cx('nav-link', link.className, { active: active })}>
                            <i className={cx('nav-icon', icon ? ['fa', icon] : 'fa fa-circle')} />
                            <p>{label}</p>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            ))}
        </>
      ))}
    </ul>
  </nav>
)

const Sidebar = () => (
  <aside
    className="main-sidebar sidebar-dark-primary sidebar-no-expand XXXnav-flat XXXnav-compact XXXelevation-4"
    style={{ marginTop: '3rem' }}
  >
    {/* <a href="index3.html" className="brand-link">
      <span className="brand-text font-weight-light">Leihs</span>
    </a> */}
    <div className="sidebar">
      <SidebarMenu menuTree={fakeMenuTree} />
    </div>
  </aside>
)

const FakeLTESidebar = () => (
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      {/* <img
        src="dist/img/AdminLTELogo.png"
        alt="AdminLTE Logo"
        className="brand-image img-circle elevation-3"
        style={{ opacity: '.8' }}
      /> */}
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">
            Alexander Pierce
          </a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <FakeLTESidebarContent />

      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
)

const FakeLTESidebarContent = () => (
  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar nav-child-indent flex-column" data-widget="treeview" role="menu">
      <li className="nav-item menu-open">
        <a href="/docs/3.1//components" className="nav-link active">
          <i className="nav-icon fas fa-th" />
          <p>
            Components
            <i className="right fas fa-angle-left" />
          </p>
        </a>
        <ul className="nav nav-treeview" style={{ display: 'block' }}>
          <li className="nav-item">
            <a href="/docs/3.1//components/main-sidebar.html" className="nav-link active">
              <i className="far fa-circle nav-icon" />
              <p>Main Sidebar</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//components/control-sidebar.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Control Sidebar</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//components/cards.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Card</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//components/boxes.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Small-/ Info-Box</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//components/direct-chat.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Direct Chat</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//components/timeline.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Timeline</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//components/ribbons.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Ribbons</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//components/miscellaneous.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Miscellaneous</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//components/plugins.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Plugins</p>
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a href="/docs/3.1//javascript" className="nav-link">
          <i className="nav-icon fas fa-code" />
          <p>
            JavaScript
            <i className="right fas fa-angle-left" />
          </p>
        </a>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <a href="/docs/3.1//javascript/layout.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Layout</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//javascript/push-menu.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Push Menu</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//javascript/treeview.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Treeview</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//javascript/card-widget.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Card Widget</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//javascript/card-refresh.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>CardRefresh</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//javascript/control-sidebar.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Control Sidebar</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//javascript/direct-chat.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Direct Chat</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//javascript/todo-list.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Todo List</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//javascript/toasts.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Toasts</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//javascript/sidebar-search.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Sidebar Search</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//javascript/expandable-tables.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Expandable Tables</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/docs/3.1//javascript/iframe.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>IFrame</p>
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a href="/docs/3.1//browser-support.html" className="nav-link">
          <i className="nav-icon fab fa-chrome" />
          <p>Browser Support</p>
        </a>
      </li>
      <li className="nav-item">
        <a href="/docs/3.1//implementations.html" className="nav-link">
          <i className="nav-icon fas fa-bookmark" />
          <p>Implementations</p>
        </a>
      </li>
      <li className="nav-item">
        <a href="/docs/3.1//additional-styles.html" className="nav-link">
          <i className="nav-icon fas fa-mortar-pestle" />
          <p>Additional Styles</p>
        </a>
      </li>
      <li className="nav-item">
        <a href="/docs/3.1//upgrade-guide.html" className="nav-link">
          <i className="nav-icon fas fa-hand-point-up" />
          <p>Upgrade Guide</p>
        </a>
      </li>
      <li className="nav-item">
        <a href="/docs/3.1//faq.html" className="nav-link">
          <i className="nav-icon fas fa-question-circle" />
          <p>FAQ</p>
        </a>
      </li>
      <li className="nav-item">
        <a href="/docs/3.1//license.html" className="nav-link">
          <i className="nav-icon fas fa-file-contract" />
          <p>License</p>
        </a>
      </li>
    </ul>
  </nav>
)

export const some_entity_page = () => {
  const FIXED_LAYOUT = false
  return (
    <>
      <div
        id="app-body"
        className={cx({ 'layout-fixed': FIXED_LAYOUT, 'layout-navbar-fixed': FIXED_LAYOUT, 'sidebar-collapse': false })}
      >
        <div className="wrapper">
          <Navbar {...fakeAdminNavbarProps} />
          {/* <FakeLTESidebar /> */}
          <Sidebar />
          <div id="app">
            <div className="content-wrapper">
              <main>
                <div className="container-fluid">
                  <FakePoolGroupsPage />
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
