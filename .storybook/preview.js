import { addParameters, addDecorator } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import './fake-time'

// add global CSS styles
import '../src/theme/bootstrap-leihs.css'

const VIEWPORTS = ['iphone6', 'galaxys9', 'iphonex', 'iphonexsmax', 'ipad', ]
const DEFAULT_VIEWPORT = 'iphonex'

export const parameters = {
  viewport: { viewports: VIEWPORTS.map(key => INITIAL_VIEWPORTS[key]), defaultViewport: DEFAULT_VIEWPORT }
}