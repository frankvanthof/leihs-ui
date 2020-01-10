import React from 'react'
import { Page, ReactSpecimen, ColorPaletteSpecimen } from 'catalog'
// import Button from 'components/Button/Button'

const Button = props => <button {...props} />

const Content = () => (
  <Page style={{ display: 'block' }}>
    <div style={{ width: '100%' }}>
      <h2>My Buttons</h2>
    </div>

    <div>
      <p>Are so nice</p>
    </div>

    <ul>
      <li>Yes</li>
      <li>or no?</li>
    </ul>

    <ReactSpecimen span={3} frame={true}>
      <Button primary>Foo</Button>
    </ReactSpecimen>

    <ColorPaletteSpecimen span={3} colors={['red', 'yellow', 'blue']} />
  </Page>
)

export default Content
