import React from 'react'
// import Link from 'next/link'
import { LeihsPage } from '../src/components/styleguide'

import {
  Form,
  MyForm,
  MyFormNested,
  Example as ExampleHook
} from '../src/components/HooksExample'

export default function IndexPage() {
  return (
    <LeihsPage>
      <div className="container p-4">
        <h1>Hooks!</h1>
        <article>
          <h2>Example Counter</h2>
          <ExampleHook />
        </article>
        <hr />
        <article>
          <h2>Statefull Form</h2>
          <Form values={{ foo: 'foo' }} />
        </article>
        <article>
          <h2>MyForm</h2>
          <MyForm initialValues={{ foo: '1', bar: '2', baz: '3' }} />
        </article>
        <article>
          <h2>MyFormNested</h2>
          <MyFormNested />
        </article>
      </div>
    </LeihsPage>
  )
}
