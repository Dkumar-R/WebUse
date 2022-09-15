import React from 'react'
import App from 'next/app'
import '../styles/globals.css'
import MainLayout from '../componets/layouts/main'
import DefaultLayout from '../componets/layouts/default'
class MyApp extends App{
  render(){
    const { Component, pageProps} = this.props;
    const Layout = Component.Layout || DefaultLayout;
    return(
      <MainLayout>
        <Layout>
        <Component {...pageProps} />;
        </Layout>
      </MainLayout>
    )
  } 
}

export default MyApp
