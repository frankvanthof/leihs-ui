import React from 'react'
// import f from 'lodash'
import { useBarcodeScanner } from '../src/lib/react-useBarcodeScanner'

const FormWithBarcodeScanner = () => {
  const buffer = useBarcodeScanner()
  return (
    <form>
      <input type="text" value={buffer} onChange={() => {}} />
    </form>
  )
}

const page = () => {
  return (
    <div className="container p-1">
      <div className="bg-white card p-4">
        <h1>Barcode Scanner testing</h1>
        <p>
          Goals:
          <ol>
            <li>{'show every scan in a list of "notifications"'}</li>
            <li>
              {'handle a scanned code by adding it to a stateful form field'}
            </li>
            <li>{'handle a scanned code with ajax action'}</li>
            <li>
              {'develop strategy for dealing with multiple consumers per view'}
            </li>
          </ol>
        </p>
        <hr />
        <h3 className="h5">Some Form</h3>
        <div style={{ height: '10em' }}>
          <FormWithBarcodeScanner />
        </div>
      </div>
    </div>
  )
}

export default page
