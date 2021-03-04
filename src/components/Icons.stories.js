// // import React from 'react'
import { examples as IconsExamples } from './Icons.examples'

import React, { Fragment as F } from 'react'
import f from 'lodash'

import Icon from './Icons'

export default {
  title: 'Components/Icons'
}

export const usage = () => IconsExamples[0].content
usage.storyName = IconsExamples[0].name

export const all_icons = () => (
  <>
    <h2>List of all Icons</h2>
    <p>
      They are all in <b>SVG</b> format, so the components can be used anywhere and do not need FontAwesome <b>CSS</b>!
    </p>
    <hr />
    {IconsExamples[1].content}
  </>
)
all_icons.storyName = 'All Icons'
