import { addParameters, addDecorator } from '@storybook/react'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import './fake-time'

// add global CSS styles
import '../src/theme/bootstrap-leihs.css'


export const parameters = {
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile2'
  }
}