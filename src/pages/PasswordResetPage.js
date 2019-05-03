import React, { Component } from 'react'
import cx from 'classnames'
import f from 'lodash'

import Navbar from '../components/Navbar'
import { CsrfTokenField } from '../components/Forms'
import FlashMessages from '../components/FlashMessages'
import { Translator as T } from '../locale/translate'

const defaultProps = {
  form: {
    action: '/reset-password',
    method: 'POST'
  }
}

class Page extends Component {
  render(props = this.props) {
    const t = T(props.navbar.config.locales)
    const csrf = { token: f.get(props, 'navbar.config.csrfToken') }
    const pwReset = f.get(props, 'pwReset') || {}
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
              csrf={csrf}
              pwReset={pwReset}
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
  pwReset,
  csrf,
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
        {t('password_reset_title')}
      </h1>
      <hr className="xmb-3" />
      {/* <p className="mb-4">{t('password_reset_description')}</p> */}
      <FlashMessages
        messages={messages}
        className="rounded"
        messageClasses="h5 rounded"
      />
      <form
        className="ui-form-signin text-left"
        method={form.method}
        action={form.action}
      >
        <CsrfTokenField {...csrf} isOptional={!pwReset.token} />
        {!f.isEmpty(pwReset.userParam) && (
          <div className="form-group form-group-sm">
            <label htmlFor={'inputEmail'}>
              {t('password_reset_userparam_label')}
            </label>
            <input
              id={'inputEmail'}
              name="user"
              required
              readOnly
              placeholder={t('password_reset_userparam_label')}
              className="form-control"
              defaultValue={pwReset.userParam}
            />
          </div>
        )}

        <div className={cx('form-group', { 'form-group-sm': pwReset.token })}>
          <label htmlFor={'inputToken'}>
            {t('password_reset_token_label')}
          </label>
          <input
            id={'inputToken'}
            name="secret-token"
            autoComplete="off"
            required
            placeholder={t('password_reset_token_label')}
            className="form-control text-monospace"
            defaultValue={pwReset.token || ''}
            autoFocus={!pwReset.token}
          />
        </div>

        <div className="form-group">
          <label htmlFor={'inputNewPassword'}>
            {t('password_reset_newpassword_label')}
          </label>
          <input
            type="password"
            id={'inputNewPassword'}
            name="newPassword"
            defaultValue={''}
            required
            minLength="4"
            autoComplete="new-password"
            placeholder={t('password_reset_newpassword_label')}
            className="form-control"
            autoFocus={!!pwReset.token}
          />
        </div>

        <button className="btn btn-success btn-block mt-3" type="submit">
          {t('password_reset_continue')}
        </button>
      </form>
    </section>
  )
}
