import React from 'react'
import ReactDOM from 'react-dom'
import { Catalog, pageLoader } from 'catalog'

const imports = {
  SignInPage: require('../src/pages/SignInPage'),
  sharedNavbarProps: require('../pages/_sharedNavbarProps.json')
}

const styles = ['/css/bootstrap-leihs.css']

const pages = [
  {
    path: '/',
    title: 'Welcome',
    content: pageLoader(() => import('./WELCOME.md'))
  },
  {
    title: 'Login Screens',
    pages: [
      {
        title: 'No user',
        path: '/login-screens',
        content: pageLoader(() => import('./LoginScreens.md'))
      }
    ]
  },
  {
    path: '/lists',
    title: 'Lists',
    content: pageLoader(() => import('./Lists.md'))
  },
  {
    path: '/app-lists',
    title: 'App Lists',
    content: pageLoader(() => import('./app-lists'))
  }
]

ReactDOM.render(
  <Catalog title="Leihs UI" {...{ pages, imports, styles }} />,
  document.getElementById('catalog')
)
