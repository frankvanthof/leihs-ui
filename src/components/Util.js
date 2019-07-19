import React, { Fragment as F } from 'react'
import f from 'lodash'

export const breakLinesReact = text =>
  // 'hello\nworld' => hello<br/>world
  !!text &&
  (f.isArray(text) ? text : text.split('\n')).map((item, i, a) => (
    <React.Fragment key={i}>
      {item}
      {/* no break after last line: */}
      {i + 1 < a.length && <br />}
    </React.Fragment>
  ))


export const Let = ({ children, ...p }) => <F>{children(p)}</F>
                                               
export const IfLet = ({ children, ...bindings }) => {
  const keys = Object.keys(bindings)
  if (keys.length > 1) throw new TypeError('IfLet requires 0 or 1 bindings!')
  const binding = bindings[keys[0]]
  return binding ? children(binding) : null
}
IfLet.propTypes = {
  children: PropTypes.func.isRequired
}

export const IfLetElse = ({ children, ...bindings }) => {
  const keys = Object.keys(bindings)
  if (keys.length > 1) throw new TypeError('IfLet requires 0 or 1 bindings!')
  if (children.length > 2) throw new TypeError('IfLet requires 1 or 2 children!')
  const binding = bindings[keys[0]]
  return binding ? children[0](binding) : children[1] ? children[1](binding) : null
}
IfLetElse.propTypes = {
  children: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired
}

