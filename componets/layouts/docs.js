import React from 'react'
import Link from 'next/link'

const docs = ({children}) => {
  return (
    <div>
<div className="docs-container">
    <div className="sidebar">
      <h3>Docs</h3>
      {[...Array(50).keys()].map(i => (
        <div key={i}>
          <Link href="/docs/docs-1">
            <a>Page 1</a>
          </Link>
          <Link href="/docs/docs-2">
            <a>Page 2</a>
          </Link>
          <Link href="/docs/docs-3">
            <a>Page 3</a>
          </Link>
        </div>
      ))}
    </div>

    <div className="main">{children}</div>

    <style jsx>{`
      .docs-container {
        display: flex;
      }
      .sidebar {
        width: 200px;
        padding: 20px;
        background: #fafafa;
        overflow-y: auto;
        flex: 0 0 170px;
      }
      .main {
        padding: 20px;
        flex: 0 1 auto;
      }
      a {
        display: block;
        font-size: 16px;
        margin-bottom: 5px;
      }
    `}</style>
  </div>
    </div>
  )
}

export default docs