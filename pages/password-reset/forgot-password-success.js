// TODO!

import React from 'react'
import { withRouter } from 'next/router'

import PasswordForgotPage from '../../src/pages/PasswordForgotPage'
import navbarProps from '../_sharedNavbarProps.json'

const exampleProps = {
  navbar: navbarProps,
  emailToCheck: 'n*****@e******.com',
  flashMessages: [{ level: 'success', message: 'check ya mail' }]
}

const page = ({ router }) => {
  const userParam = router.query.user

  return <PasswordForgotPage {...exampleProps} />
}

export default withRouter(page)
