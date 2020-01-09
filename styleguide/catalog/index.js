import React from 'react'
import ReactDOM from 'react-dom'
import { Catalog, pageLoader } from 'catalog'

const imports = {
  SignInPage: require('../../src/pages/SignInPage')
}

const pages = [
  {
    path: '/',
    title: 'Welcome',
    content: pageLoader(() => import('./WELCOME.md'))
  },
  {
    path: '/lists',
    title: 'Lists',
    content: pageLoader(() => import('./Lists.md'))
  }
]

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} imports={imports} />,
  document.getElementById('catalog')
)
