import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
const main = ({children }) => {
  return (
    <>
     <Navbar/> 
     <div>{children}</div>
     {/* <Footer/> */}
     </>
  )
}

export default main
