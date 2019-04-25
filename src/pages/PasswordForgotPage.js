import React, { Component } from 'react'
import f from 'lodash'

import Navbar from '../components/Navbar'
import FlashMessages from '../components/FlashMessages'
import { Translator as T } from '../locale/translate'

const defaultProps = {
  form: {
    action: '/forgot-password',
    method: 'POST'
  }
}

class Page extends Component {
  render(props = this.props) {
    const t = T(props.navbar.config.locales)
    const userParam = f.get(props, 'userParam')
    const flashMessages = f.get(props, 'flashMessages')

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
            <PasswordForgotCard
              {...defaultProps}
              userParam={userParam}
              messages={flashMessages}
              t={t}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Page

const PasswordForgotCard = ({
  t,
  form,
  messages,
  userParam,
  autoFocusUserField = true
}) => {
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
      <p className="mb-4">{t('password_forgot_description')}</p>
      <FlashMessages
        messages={messages}
        className="rounded"
        messageClasses="h5 rounded"
      />
      <form
        className="ui-form-signin"
        method={form.method}
        action={form.action}
      >
        <label htmlFor={'inputEmail'} className="sr-only">
          {t('password_forgot_userparam_label')}
        </label>
        <input
          id={'inputEmail'}
          name="user"
          required
          placeholder={t('password_forgot_userparam_label')}
          className="form-control"
          defaultValue={userParam || ''}
          autoFocus={true}
          autoCapitalize="off"
          autoCorrect="off"
        />

        <button className="btn btn-success btn-block mt-3" type="submit">
          {t('password_forgot_continue')}
        </button>
      </form>
    </section>
  )
}
