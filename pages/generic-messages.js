import React, { Fragment } from 'react'
// import Link from 'next/link'

import MessagePage from '../src/pages/MessagePage'
import { examples } from '../src/pages/MessagePage.examples'

const Page = () => {
  return (
    <Fragment>
      {/* Table of Contents */}
      <section className="px-4 py-2">
        <h1>TOC</h1>
        {examples.map(({ name, props }, ix) => (
          <Fragment key={ix}>
            <ul>
              <li>
                <a href={`#msg${ix}`}>{name}</a>
              </li>
            </ul>
          </Fragment>
        ))}
      </section>

      <hr />

      {/* PAGES */}
      {examples.map(({ name, props }, ix) => (
        <Fragment key={ix}>
          <section className="px-4 py-2">
            <h2>
              <a href={`#msg${ix}`}>{name}</a>
            </h2>
            <pre>
              {'uses props (example for server-side usage):\n\n'}
              {JSON.stringify(props, 0, 2)}
            </pre>
          </section>
          <hr id={`msg${ix}`} />
          <MessagePage {...props} />
          <hr />
        </Fragment>
      ))}
    </Fragment>
  )
}

export default Page
