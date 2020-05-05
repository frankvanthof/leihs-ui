import { addParameters } from '@storybook/react'
import './fake-time'

// add global CSS styles
import '../src/theme/bootstrap-leihs.css'

addParameters({
  viewport: {
    // viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'mobile2'
  }
})
