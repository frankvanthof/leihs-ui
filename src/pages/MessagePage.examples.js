// import React from 'react'
import f from 'lodash'

// import MessagePage from './MessagePage'

const LOREM_IPSUM_SHORT =
  'Lorem ipsum dolor amet ethical pop-up fam hashtag fixie crucifix godard semiotics la croix cold-pressed schlitz cardigan chia wayfarers four loko.'

const LOREM_IPSUM =
  LOREM_IPSUM_SHORT +
  '\n\nSelfies messenger bag master cleanse tumeric intelligentsia. Polaroid normcore schlitz humblebrag vaporware williamsburg vegan hot chicken seitan. Kinfolk everyday carry pour-over photo booth, crucifix meditation cold-pressed vape succulents bicycle rights disrupt selfies pinterest.\n\nPickled yuccie asymmetrical retro raclette godard blog roof party everyday carry pug disrupt.\nTruffaut disrupt mlkshk pinterest pug, af slow-carb chia squid hell of.'

export const examples = [
  {
    name: 'basic error message',
    props: {
      title: 'oh noes!',
      level: 'error',
      message:
        'something went wrong! there is nothing we can do expect showing you this message. it can be pretty long.\n\nlinebreaks are also allowed, so we can write as much prose as we need.',
      footer: [
        {
          text: 'go back to homepage',
          link: 'https://example.com'
        }
      ]
    }
  },
  {
    name: 'full example',
    props: {
      title: 'Title of Message',
      level: 'warning',
      message: LOREM_IPSUM,
      actions: [
        {
          text: 'I am old enough',
          action: '/verify-age',
          method: 'POST'
        },
        {
          text: 'I am not old enough',
          level: 'secondary',
          link: 'https://kika.de'
        }
      ],
      footer: [
        {
          text: 'cancel and go back to homepage',
          link: '/'
        }
      ]
    }
  },
  {
    name: 'no footer',
    props: {
      title: 'oh noes!',
      level: 'error',
      message: LOREM_IPSUM_SHORT
    }
  },
  {
    name: 'no footer and no title',
    props: {
      message: LOREM_IPSUM_SHORT
    }
  },
  {
    name: 'message with very long text',
    props: {
      title: 'Very Long Message!',
      message: f.times(10, a => LOREM_IPSUM).join('\n\n'),
      footer: [
        {
          text: 'go back to homepage',
          link: 'https://example.com'
        }
      ]
    }
  }
]
