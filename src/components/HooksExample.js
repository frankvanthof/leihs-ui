import React, { useState, useEffect } from 'react'
import f from 'lodash'

export function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`

    if (count > 0) {
      return () => {
        // window.confirm(`You clicked ${count} times`)
      }
    }
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export function Form({ values, ...props }) {
  const [foo, setFoo] = useState(values.foo)

  return (
    <div>
      <form>
        <label>
          foo{' '}
          <input
            type="text"
            name="foo"
            value={foo}
            onChange={event => setFoo(event.target.value)}
          />
        </label>
      </form>
      <pre>
        {JSON.stringify({ state: { foo }, props: { values, ...props } }, 0, 2)}
      </pre>
    </div>
  )
}

export function MyForm({ initialValues = {}, ...props }) {
  const [fields, setFields] = useState(initialValues)

  const formPropsFor = name => ({
    name,
    value: fields[name],
    onChange: event => {
      const value = event.target.value
      setFields(f.merge({}, fields, f.set({}, name, value)))
    }
  })

  return (
    <div>
      <form>
        <label>
          foo <input type="text" {...formPropsFor('foo')} />
          <br />
          bar <input type="text" {...formPropsFor('bar')} />
          <br />
          baz <input type="text" {...formPropsFor('baz')} />
        </label>
      </form>
      <pre>
        {JSON.stringify({ fields, props: { initialValues, ...props } }, 0, 2)}
      </pre>
    </div>
  )
}

export class MyFormNested extends React.Component {
  constructor() {
    super()
    this.state = { formKey: 0, formFields: this._makeRandomFormState() }
  }

  _makeRandomFormState() {
    return { foo: f.random(12), bar: f.random(12), baz: f.random(12) }
  }
  _randomizeFormValues() {
    this.setState({ formFields: this._makeRandomFormState() })
  }
  _randomizeFormKey() {
    this.setState(cur => ({ formKey: cur.formKey + 1 }))
  }

  render() {
    return (
      <div>
        <button onClick={() => this._randomizeFormValues()}>
          randomize <code>initialValues</code> prop
        </button>{' '}
        <button onClick={() => this._randomizeFormKey()}>
          randomize <code>key</code> prop
        </button>
        <hr />
        <MyForm
          key={this.state.formKey}
          initialValues={this.state.formFields}
        />
      </div>
    )
  }
}
