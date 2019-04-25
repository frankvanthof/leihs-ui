import React, { Component } from 'react'
// import f from 'lodash'

import Navbar from '../components/Navbar'
import FlashMessages from '../components/FlashMessages'
import { Translator as T } from '../locale/translate'

const defaultProps = {
  resetPwLink: '/password-reset/reset-password'
}

class Page extends Component {
  render(props = this.props) {
    const t = T(props.navbar.config.locales)

    return (
      <div className="bg-paper h-100">
        <Navbar {...props.navbar} hideSignInField />

        <div
          className="m-auto d-flex minh-100 pb-sm-5"
          style={{
            maxWidth: '42rem'
          }}
        >
          <div className="p-sm-4 pb-sm-5 m-sm-auto w-100 minw-100">
            <PasswordForgotSuccessCard
              t={t}
              resetPwLink={props.resetPwLink}
              message={props.message}
            />
          </div>
        </div>
      </div>
    )
  }
}
Page.defaultProps = defaultProps

export default Page

const PasswordForgotSuccessCard = ({ t, message, resetPwLink }) => {
  return (
    <section
      className="card shadow-sm text-center p-4 pb-5 pb-sm-4 m-auto"
      style={{
        maxWidth: '30rem'
      }}
    >
      <h1 className="h3 my-2 font-weight-normal">
        {t('password_forgot_title')}
      </h1>
      <hr className="xmb-3" />

      <FlashMessages
        messages={[{ message: message, level: 'success' }]}
        className="rounded"
        messageClasses="h5 rounded"
      />

      <a href={resetPwLink}>
        go here to reset the password using the token in the email
      </a>
    </section>
  )
}
