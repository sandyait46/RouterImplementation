import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import React from 'react'
import { Outlet } from 'react-router-dom';

function Layout() {

  return (
    <>
      <h1 className="bg-green-700 p-4">React Router</h1>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
