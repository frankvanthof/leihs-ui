import React from 'react'
import Link from 'next/link'
import { LeihsPage } from '../../src/components/styleguide'

export default function IndexPage() {
  return (
    <LeihsPage>
      <div className="container p-4">
        <h1>notices</h1>
        <ul>
          <li>
            <Link prefetch href="./maintenance">
              <a>maintenance</a>
            </Link>
          </li>
        </ul>
      </div>
    </LeihsPage>
  )
}
