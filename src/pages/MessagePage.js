import React from 'react'
// import cx from 'classnames'
import f from 'lodash'

import { Button, NBSP } from '../components/Bootstrap'
import { CenteredCard } from '../components/CardPage'
import { breakLinesReact } from '../components/Util'

const defaultProps = {
  title: null,
  level: 'info',
  message: null,
  actions: null,
  footer: null
}

const MessagePage = ({ title, message, actions, footer }) => {
  return (
    <CenteredCard title={title}>
      {breakLinesReact(message)}
      {f.isEmpty(actions) ? (
        !f.isEmpty(footer) && <hr className="mb-0" />
      ) : (
        <ActionsBar className="mt-4 mb-2" actions={actions} />
      )}
      {!f.isEmpty(footer) &&
        f.map(footer, ({ text, link }, i) => (
          <p key={i} className="card-text mb-0 mt-3">
            <a href={link}>{text}</a>
          </p>
        ))}
    </CenteredCard>
  )
}

MessagePage.defaultProps = defaultProps
export default MessagePage

const ActionsBar = ({ actions, ...rest }) => (
  <div {...rest}>
    {f
      .map(actions, (btn, i) => <ActionButton key={i} {...btn} />)
      .reduce((a, b) => [a, NBSP, b])}
  </div>
)

const ActionButton = ({ text, link, action, level }) => {
  if (!f.isEmpty(link) && !f.isEmpty(action))
    throw new Error('Only give link OR action!')

  return (
    <Button
      tag={link ? 'a' : 'button'}
      type={link ? null : 'button'}
      role={link ? 'button' : null}
      color={level}
      href={link}
    >
      {text}
    </Button>
  )
}
ActionButton.defaultProps = {
  level: 'primary',
  method: 'POST'
}
