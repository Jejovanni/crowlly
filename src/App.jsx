import React from 'react'
import Nav from './components/Nav'
import Home from './Home'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (

    <div className="bg-black  " >
      <Nav />
      <Home />
      <Footer />
      <Outlet/>
    </div>

  )
}

export default App
