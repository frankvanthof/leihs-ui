import React from 'react'
// import f from 'lodash'

import HomePage from '../src/pages/HomePage'

import navbarProps from './_sharedNavbarProps.json'

const exampleProps = {
  navbar: navbarProps
}

const page = () => <HomePage {...exampleProps} />
export default page
