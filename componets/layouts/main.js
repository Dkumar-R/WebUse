import React from 'react'
import Navbar from '../Navbar'

const main = ({children }) => {
  return (
    <>
     <Navbar/> 
     <div>{children}</div>
    </>
  )
}

export default main
