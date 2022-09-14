import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar></Sidebar>
      <main>{children}</main>
      <Footer />
    </>
  )
}
