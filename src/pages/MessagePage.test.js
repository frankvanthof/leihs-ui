import React from 'react'
import renderer from 'react-test-renderer'

import MessagePage from './MessagePage'
import { examples } from './MessagePage.examples'

examples.forEach(({ name, props }) => {
  it(`${name}: renders correctly`, () => {
    const content = <MessagePage {...props} />
    expect(renderer.create(content).toJSON()).toMatchSnapshot()
  })
})
