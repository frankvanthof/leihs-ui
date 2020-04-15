import React from 'react'
// import Link from 'next/link'
import { LeihsPage } from '../../src/components/styleguide'

export default function IndexPage() {
  return (
    <LeihsPage id="page" className="text-center" style={{ height: '100%' }}>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <div className="mb-auto" />
        <main role="main" className="inner cover">
          <h1 className="cover-heading">Maintenance</h1>
          <p className="lead">
            This instance of <b>leihs</b> is currently <br />
            undergoing scheduled maintenance. <br />
            Please try again in a few minutes.
          </p>
          <p className="lead">
            <a href="#" className="btn btn-lg btn-success">
              Learn more
            </a>
          </p>
        </main>
        <div className="mt-auto" />
      </div>

      <style jsx>
        {`
          /*
           * Globals
           */

          /* Links */
          a,
          a:focus,
          a:hover {
            color: #fff;
          }

          // /* Custom default button */
          // .btn-secondary,
          // .btn-secondary:hover,
          // .btn-secondary:focus {
          //   color: #333;
          //   text-shadow: none; /* Prevent inheritance from body */
          //   background-color: #fff;
          //   border: 0.05rem solid #fff;
          // }

          html,
          body,
          #page {
            height: 100%;
            background-color: #333;
          }

          body,
          #page {
            display: -ms-flexbox;
            display: flex;
            color: #fff;
            text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
            box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
          }

          .cover-container {
            max-width: 42em;
          }

          .cover {
            padding: 0 1.5rem;
          }
          .cover .btn-lg {
            padding: 0.75rem 1.25rem;
            font-weight: 700;
          }
        `}
      </style>
    </LeihsPage>
  )
}
