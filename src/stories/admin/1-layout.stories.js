import React from 'react'

import Navbar from '../../components/Navbar'
import sharedNavbarProps from '../_sharedNavbarProps.json'

export default {
  title: 'Admin/Layout',
  parameters: { layout: 'fullscreen', viewport: null }
}

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
            <a href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04">
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
          <div style={{ display: 'none' }} className="hidden-routing-state-component">
            <pre>
              {'{'}:route-params{'\n'} {'{'}:inventory-pool-id "4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04"{'}'},{'\n'}{' '}
              :handler-key :inventory-pool-groups,{'\n'} :page{'\n'}{' '}
              #'leihs.admin.resources.inventory-pools.inventory-pool.groups.main/index-page,{'\n'} :url{'\n'}{' '}
              "http://localhost:3220/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/?page=1&amp;per-page=50&amp;org-member=&amp;term=&amp;including-user=&amp;role=any",
              {'\n'} :path{'\n'} "/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/",{'\n'}{' '}
              :query-params-raw{'\n'} {'{'}:page "1",{'\n'}
              {'  '}:per-page "50",{'\n'}
              {'  '}:org-member "",{'\n'}
              {'  '}:term "",{'\n'}
              {'  '}:including-user "",{'\n'}
              {'  '}:role "any"{'}'},{'\n'} :query-params{'\n'} {'{'}:page 1,{'\n'}
              {'  '}:per-page 50,{'\n'}
              {'  '}:org-member "", {'\n'}
              {'  '}:term "", {'\n'}
              {'  '}:including-user "", {'\n'}
              {'  '}:role "any"{'}'}
              {'}'}
              {'\n'}
            </pre>
          </div>
          <a href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04">
            <em>ITZ-Ausstellungen</em>
          </a>
        </span>
      </h1>
      <div>
        <div style={{ display: 'none' }} className="hidden-routing-state-component">
          <pre>
            {'{'}:route-params{'\n'} {'{'}:inventory-pool-id "4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04"{'}'},{'\n'}{' '}
            :handler-key :inventory-pool-groups,{'\n'} :page{'\n'}{' '}
            #'leihs.admin.resources.inventory-pools.inventory-pool.groups.main/index-page,{'\n'} :url{'\n'}{' '}
            "http://localhost:3220/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/?page=1&amp;per-page=50&amp;org-member=&amp;term=&amp;including-user=&amp;role=any",
            {'\n'} :path{'\n'} "/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/",{'\n'}{' '}
            :query-params-raw{'\n'} {'{'}:page "1",{'\n'}
            {'  '}:per-page "50",{'\n'}
            {'  '}:org-member "",{'\n'}
            {'  '}:term "",{'\n'}
            {'  '}:including-user "",{'\n'}
            {'  '}:role "any"{'}'},{'\n'} :query-params{'\n'} {'{'}:page 1,{'\n'}
            {'  '}:per-page 50,{'\n'}
            {'  '}:org-member "", {'\n'}
            {'  '}:term "", {'\n'}
            {'  '}:including-user "", {'\n'}
            {'  '}:role "any"{'}'}
            {'}'}
            {'\n'}
          </pre>
        </div>
        <div className="card bg-light">
          <div className="card-body">
            <div className="form-row">
              <div className="form-group ml-2 mr-2 mt-2 col-md-3">
                <div style={{ display: 'none' }} className="hidden-routing-state-component">
                  <pre>
                    {'{'}:route-params{'\n'} {'{'}:inventory-pool-id "4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04"{'}'},{'\n'}{' '}
                    :handler-key :inventory-pool-groups,{'\n'} :page{'\n'}{' '}
                    #'leihs.admin.resources.inventory-pools.inventory-pool.groups.main/index-page,{'\n'} :url{'\n'}{' '}
                    "http://localhost:3220/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/?page=1&amp;per-page=50&amp;org-member=&amp;term=&amp;including-user=&amp;role=any",
                    {'\n'} :path{'\n'} "/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/",{'\n'}{' '}
                    :query-params-raw{'\n'} {'{'}:page "1",{'\n'}
                    {'  '}:per-page "50",{'\n'}
                    {'  '}:org-member "",{'\n'}
                    {'  '}:term "",{'\n'}
                    {'  '}:including-user "",{'\n'}
                    {'  '}:role "any"{'}'},{'\n'} :query-params{'\n'} {'{'}:page 1,{'\n'}
                    {'  '}:per-page 50,{'\n'}
                    {'  '}:org-member "", {'\n'}
                    {'  '}:term "", {'\n'}
                    {'  '}:including-user "", {'\n'}
                    {'  '}:role "any"{'}'}
                    {'}'}
                    {'\n'}
                  </pre>
                </div>
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
              href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/?page=0&per-page=50&org-member=&term=&including-user=&role=any"
            >
              <i className="fas fa-arrow-circle-left" /> previous{' '}
            </a>
          </div>
          <div className="float-right">
            <a
              href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/?page=2&per-page=50&org-member=&term=&including-user=&role=any"
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
            <tr className="group">
              <td>1</td>
              <td>no</td>
              <td>8</td>
              <td>
                <a href="/admin/groups/9d12c34b-467c-4931-b7c8-235ddb4908fe">
                  <span>Anonyme</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/9d12c34b-467c-4931-b7c8-235ddb4908fe/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>2</td>
              <td>no</td>
              <td>6562</td>
              <td>
                <a href="/admin/groups/a9dbe377-429f-4de3-999a-5d5cb276e90c">
                  <span>App_Intranet-Business-Applikationen-Admin</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/a9dbe377-429f-4de3-999a-5d5cb276e90c/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>3</td>
              <td>no</td>
              <td>6488</td>
              <td>
                <a href="/admin/groups/4daf3591-76dc-43f3-b172-5a581c8752a2">
                  <span>App_Intranet-Formular-DMU-Wettbewerbe</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/4daf3591-76dc-43f3-b172-5a581c8752a2/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>4</td>
              <td>no</td>
              <td>6490</td>
              <td>
                <a href="/admin/groups/836e4066-1b25-4bcd-a7eb-501b50821c8c">
                  <span>App_Intranet-Formular-ITZ-Ausstellungen</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/836e4066-1b25-4bcd-a7eb-501b50821c8c/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>5</td>
              <td>no</td>
              <td>6492</td>
              <td>
                <a href="/admin/groups/9fd93bb2-0816-43be-b5a4-f8d946480303">
                  <span>App_Intranet-Formular-Jahresbericht</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/9fd93bb2-0816-43be-b5a4-f8d946480303/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>6</td>
              <td>no</td>
              <td>6494</td>
              <td>
                <a href="/admin/groups/75abb90b-8270-484b-9051-e220a34c2198">
                  <span>App_Intranet-Formular-Personalrat-Feedback</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/75abb90b-8270-484b-9051-e220a34c2198/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>7</td>
              <td>no</td>
              <td>6496</td>
              <td>
                <a href="/admin/groups/3aa42892-1d00-4c98-b8bf-75e8a73619d2">
                  <span>App_Intranet-ILV</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/3aa42892-1d00-4c98-b8bf-75e8a73619d2/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>8</td>
              <td>no</td>
              <td>6566</td>
              <td>
                <a href="/admin/groups/1d90cc3b-1ca9-4c52-bbe2-5a800aa6121e">
                  <span>App_Intranet-ITZ-DevIn-PHP</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/1d90cc3b-1ca9-4c52-bbe2-5a800aa6121e/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>9</td>
              <td>no</td>
              <td>6500</td>
              <td>
                <a href="/admin/groups/a81b343c-2ad2-4a1c-95fd-04aa63695aca">
                  <span>App_Intranet-Orchesteradministration-DMU-Admin</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/a81b343c-2ad2-4a1c-95fd-04aa63695aca/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>10</td>
              <td>no</td>
              <td>6502</td>
              <td>
                <a href="/admin/groups/da011c35-0d8c-42cf-92e0-19c47ef09c50">
                  <span>App_Intranet-Personendaten-Account-Info</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/da011c35-0d8c-42cf-92e0-19c47ef09c50/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>11</td>
              <td>no</td>
              <td>6504</td>
              <td>
                <a href="/admin/groups/18a48df1-1f66-44dd-bdc3-f2cb3c42da0d">
                  <span>App_Intranet-Personendaten-Adresse</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/18a48df1-1f66-44dd-bdc3-f2cb3c42da0d/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>12</td>
              <td>no</td>
              <td>6508</td>
              <td>
                <a href="/admin/groups/c3a76d66-c6ab-4fbf-9990-3385d0d24f7d">
                  <span>App_Intranet-Personendaten-Anmeldung-Stjg-Status-Start-Ende</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/c3a76d66-c6ab-4fbf-9990-3385d0d24f7d/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>13</td>
              <td>no</td>
              <td>6510</td>
              <td>
                <a href="/admin/groups/7b69b913-4da7-46c1-9251-5e7c94fa55c0">
                  <span>App_Intranet-Personendaten-Anmeldung-Stjg-Unterbruch-Urlaub</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/7b69b913-4da7-46c1-9251-5e7c94fa55c0/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>14</td>
              <td>no</td>
              <td>6512</td>
              <td>
                <a href="/admin/groups/ddfe742d-ca1f-4443-8ae4-a220696fc6a1">
                  <span>App_Intranet-Personendaten-Benutzergruppen</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/ddfe742d-ca1f-4443-8ae4-a220696fc6a1/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>15</td>
              <td>no</td>
              <td>6514</td>
              <td>
                <a href="/admin/groups/99f8e46b-6742-4b49-ac31-b1f14378b0b5">
                  <span>App_Intranet-Personendaten-Benutzername</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/99f8e46b-6742-4b49-ac31-b1f14378b0b5/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>16</td>
              <td>no</td>
              <td>6516</td>
              <td>
                <a href="/admin/groups/25d88eb7-ae39-4b08-bd63-fd9e3256fdc9">
                  <span>App_Intranet-Personendaten-CC-Nebisnr-Matrikelnr</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/25d88eb7-ae39-4b08-bd63-fd9e3256fdc9/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>17</td>
              <td>no</td>
              <td>6518</td>
              <td>
                <a href="/admin/groups/a51a6faf-529d-4b11-b27a-b101e0f7ccac">
                  <span>App_Intranet-Personendaten-CMS-Info</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/a51a6faf-529d-4b11-b27a-b101e0f7ccac/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>18</td>
              <td>no</td>
              <td>6520</td>
              <td>
                <a href="/admin/groups/99e7d238-25b4-4d8b-ac77-f35dd5ec33a1">
                  <span>App_Intranet-Personendaten-Email-privat</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/99e7d238-25b4-4d8b-ac77-f35dd5ec33a1/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>19</td>
              <td>no</td>
              <td>6522</td>
              <td>
                <a href="/admin/groups/1ce65f61-91a8-490f-a956-5376d421545d">
                  <span>App_Intranet-Personendaten-Foto</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/1ce65f61-91a8-490f-a956-5376d421545d/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>20</td>
              <td>no</td>
              <td>6524</td>
              <td>
                <a href="/admin/groups/a31e7451-1261-4c60-a45c-7060c6230dfd">
                  <span>App_Intranet-Personendaten-Foto-CC</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/a31e7451-1261-4c60-a45c-7060c6230dfd/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>21</td>
              <td>no</td>
              <td>6526</td>
              <td>
                <a href="/admin/groups/69bde307-7636-4d68-9bd8-cb37aca417dd">
                  <span>App_Intranet-Personendaten-Geburtsdatum-Bürgerort</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/69bde307-7636-4d68-9bd8-cb37aca417dd/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>22</td>
              <td>no</td>
              <td>6528</td>
              <td>
                <a href="/admin/groups/063aec02-d2bf-45a8-ad57-09741e56e19f">
                  <span>App_Intranet-Personendaten-Geburtsjahr</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/063aec02-d2bf-45a8-ad57-09741e56e19f/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>23</td>
              <td>no</td>
              <td>6530</td>
              <td>
                <a href="/admin/groups/b9a1f040-d6be-476a-8551-c7fdc5a818ae">
                  <span>App_Intranet-Personendaten-Person-Info</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/b9a1f040-d6be-476a-8551-c7fdc5a818ae/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>24</td>
              <td>no</td>
              <td>6532</td>
              <td>
                <a href="/admin/groups/8b125aa9-9c17-4bae-9a67-ac7dc8c86a53">
                  <span>App_Intranet-Personendaten-Personalnr</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/8b125aa9-9c17-4bae-9a67-ac7dc8c86a53/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>25</td>
              <td>no</td>
              <td>6534</td>
              <td>
                <a href="/admin/groups/8f11faf0-5916-4720-b5d2-fd235da15de1">
                  <span>App_Intranet-Personendaten-SWITCH-edu-ID</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/8f11faf0-5916-4720-b5d2-fd235da15de1/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>26</td>
              <td>no</td>
              <td>6536</td>
              <td>
                <a href="/admin/groups/ad4b6097-1373-4256-99f0-08622b93d62b">
                  <span>App_Intranet-Personendaten-Telefon-privat-Fax-Mobile-Business</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/ad4b6097-1373-4256-99f0-08622b93d62b/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>27</td>
              <td>no</td>
              <td>6538</td>
              <td>
                <a href="/admin/groups/45a6060a-cbda-408e-b2cc-42ae743cea65">
                  <span>App_Intranet-Personendaten-ZHdK-Angehörige</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/45a6060a-cbda-408e-b2cc-42ae743cea65/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>28</td>
              <td>no</td>
              <td>6506</td>
              <td>
                <a href="/admin/groups/32c925ee-0c95-459a-8e3e-9ff63826a902">
                  <span>App_Intranet-Personendaten-alle-Personen</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/32c925ee-0c95-459a-8e3e-9ff63826a902/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>29</td>
              <td>no</td>
              <td>6564</td>
              <td>
                <a href="/admin/groups/68a8a71c-c9d8-49f1-9b17-ba2fabdf16e1">
                  <span>App_Intranet-Personensuche-Admin</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/68a8a71c-c9d8-49f1-9b17-ba2fabdf16e1/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>30</td>
              <td>no</td>
              <td>6540</td>
              <td>
                <a href="/admin/groups/5920cad9-d2f8-4974-8e2c-1813a198c9ff">
                  <span>App_Intranet-Qualitaetsmanagement</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/5920cad9-d2f8-4974-8e2c-1813a198c9ff/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>31</td>
              <td>no</td>
              <td>6546</td>
              <td>
                <a href="/admin/groups/3b5fd240-9606-40b0-98b1-80a9445bacda">
                  <span>App_Intranet-Studiosession-DMU-Admin</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/3b5fd240-9606-40b0-98b1-80a9445bacda/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>32</td>
              <td>no</td>
              <td>6552</td>
              <td>
                <a href="/admin/groups/d09a41db-c31c-4307-8719-d47193c942fc">
                  <span>App_Intranet-Themenkoordination</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/d09a41db-c31c-4307-8719-d47193c942fc/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>33</td>
              <td>no</td>
              <td>6554</td>
              <td>
                <a href="/admin/groups/9e061b91-8a2d-4f39-b9c6-e6f7f8b32699">
                  <span>App_Intranet-Typo3-Redaktionen</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/9e061b91-8a2d-4f39-b9c6-e6f7f8b32699/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>34</td>
              <td>no</td>
              <td>6556</td>
              <td>
                <a href="/admin/groups/e4644d03-ee77-40e2-95ad-36245bd4875f">
                  <span>App_Intranet-Typo3-Redaktionsleitung</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/e4644d03-ee77-40e2-95ad-36245bd4875f/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>35</td>
              <td>no</td>
              <td>6484</td>
              <td>
                <a href="/admin/groups/2c4f0dae-7b36-4ddc-b4ca-fbad25207070">
                  <span>App_Intranet_ClickEnroll-Admin</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/2c4f0dae-7b36-4ddc-b4ca-fbad25207070/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>36</td>
              <td>no</td>
              <td>6486</td>
              <td>
                <a href="/admin/groups/9be57823-f135-4b76-9b9c-4988bc9388fe">
                  <span>App_Intranet_Einschreibung-DMU-SuperAdmin</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/9be57823-f135-4b76-9b9c-4988bc9388fe/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>37</td>
              <td>no</td>
              <td>6548</td>
              <td>
                <a href="/admin/groups/65e53ede-6cda-4008-9cab-72a02687bc38">
                  <span>App_Intranet_Studiosession-FTM-Superadmin</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/65e53ede-6cda-4008-9cab-72a02687bc38/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>38</td>
              <td>no</td>
              <td>6558</td>
              <td>
                <a href="/admin/groups/bdf70c87-43c3-4a05-b813-9f5684cd4f30">
                  <span>App_Intranet_ZuKoIA-Admin</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/bdf70c87-43c3-4a05-b813-9f5684cd4f30/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>39</td>
              <td>no</td>
              <td>6498</td>
              <td>
                <a href="/admin/groups/9a6bc260-909a-44c1-9e0d-99e03010b741">
                  <span>App_RaumRes-Jahreskalender</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/9a6bc260-909a-44c1-9e0d-99e03010b741/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>40</td>
              <td>no</td>
              <td>6542</td>
              <td>
                <a href="/admin/groups/e294544d-d177-4e03-9986-e9a9b6091758">
                  <span>App_RaumRes-Raumadministratoren</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/e294544d-d177-4e03-9986-e9a9b6091758/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>41</td>
              <td>no</td>
              <td>6544</td>
              <td>
                <a href="/admin/groups/2d8541fa-6494-4fa7-9db5-072e27b637fc">
                  <span>App_RaumRes-Raumadministratoren-Theoriepoolraeume</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/2d8541fa-6494-4fa7-9db5-072e27b637fc/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>42</td>
              <td>no</td>
              <td>6550</td>
              <td>
                <a href="/admin/groups/4e5aa139-d14c-47ce-838e-a95a504dc976">
                  <span>App_RaumRes-SuperAdmin</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/4e5aa139-d14c-47ce-838e-a95a504dc976/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>43</td>
              <td>no</td>
              <td>4084</td>
              <td>
                <a href="/admin/groups/703affd6-c9c0-4454-9600-8c9e27fcab37">
                  <span>BA.alle</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/703affd6-c9c0-4454-9600-8c9e27fcab37/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>44</td>
              <td>no</td>
              <td>4088</td>
              <td>
                <a href="/admin/groups/33bfa0f8-e0f8-4ae2-9ae7-8f7b94a09eea">
                  <span>BA.studierende</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/33bfa0f8-e0f8-4ae2-9ae7-8f7b94a09eea/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>45</td>
              <td>no</td>
              <td>6053</td>
              <td>
                <a href="/admin/groups/5925d58b-8d7f-43dd-adf7-a690f2cd3085">
                  <span>CASARS_18F.studierende</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/5925d58b-8d7f-43dd-adf7-a690f2cd3085/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>46</td>
              <td>no</td>
              <td>12</td>
              <td>
                <a href="/admin/groups/c23cfeff-0a81-4c06-a7ac-edaf161bfde5">
                  <span>DDE.alle</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/c23cfeff-0a81-4c06-a7ac-edaf161bfde5/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>47</td>
              <td>no</td>
              <td>2311</td>
              <td>
                <a href="/admin/groups/71f0190a-4097-446b-bddf-ce4e7631edd0">
                  <span>DDE.alle_angestellte</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/71f0190a-4097-446b-bddf-ce4e7631edd0/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>48</td>
              <td>no</td>
              <td>13</td>
              <td>
                <a href="/admin/groups/d3b79401-18eb-462e-860f-7b98da47607b">
                  <span>DDE.dozierende</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/d3b79401-18eb-462e-860f-7b98da47607b/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>49</td>
              <td>no</td>
              <td>14</td>
              <td>
                <a href="/admin/groups/47d4fbf2-b3a7-4391-956a-fc5c0cae36b2">
                  <span>DDE.mittelbau</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/47d4fbf2-b3a7-4391-956a-fc5c0cae36b2/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
            <tr className="group">
              <td>50</td>
              <td>no</td>
              <td>15</td>
              <td>
                <a href="/admin/groups/ec0baf9f-93d6-4f0e-ae48-6590d4459872">
                  <span>DDE.personal</span>
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
                  href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/ec0baf9f-93d6-4f0e-ae48-6590d4459872/roles"
                  className="btn btn-outline-primary btn-sm"
                >
                  <span>
                    <i className="fas fa-plus-circle" /> Add{' '}
                  </span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="clearfix mt-2 mb-2">
          <div className="float-left">
            <a
              className="btn btn-outline-primary btn-sm disabled"
              href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/?page=0&per-page=50&org-member=&term=&including-user=&role=any"
            >
              <i className="fas fa-arrow-circle-left" /> previous{' '}
            </a>
          </div>
          <div className="float-right">
            <a
              href="/admin/inventory-pools/4a1ba40c-467e-5efe-8cf1-e8d3dbb59f04/groups/?page=2&per-page=50&org-member=&term=&including-user=&role=any"
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

export const some_entity_page = () => (
  <>
    <Navbar {...fakeAdminNavbarProps} />
    <div id="app">
      <main>
        <div className="container-fluid">
          <FakePoolGroupsPage />
        </div>
      </main>
    </div>
  </>
)

// loggedOut.storyName = 'to Storybook'
