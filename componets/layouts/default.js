import React from 'react'

const defaultLayout = ({children }) => {
  return (
    <div>
        <div className="default-container">
    <div className="main">{children}</div>

    <style jsx>{`
      .default-container {
        padding: 40px 20px;
        text-align: center;
        max-width: 900px;
        margin: 0 auto;
      }
    `}</style>
  </div>
);
    </div>
  )
}

export default defaultLayout