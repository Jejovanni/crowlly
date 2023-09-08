import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <>
      <div class="bg-black  " >
        <nav className=' flex justify-between px-4 mx-auto max-w-[1640px] h-28 items-center text-2xl text-white ' >

          <Link href="/" alt="Crowlly logo" className='logo'> crowlly </Link>

          <div className=' items-center hidden lg:flex justify-between max-w-[76em]'>
            <div >
              <ul className=' flex'>
                <li className=' p-4 '> <Link to="/dashboard"> Dashboard</Link></li>
                <li className=' p-4'> <Link to="/about"> About</Link></li>
              </ul>
            </div>
            <div>
              <ul className=' flex'>
                <li className=' p-4'> <button className=' bg-fuchsia-600 hover:bg-fuchsia-600 bg-opacity-60 rounded-lg min-w-[10.5rem] min-h-[3.5rem]'> <Link to="/signup"> Login</Link></button></li>
                <li className=' p-4'> <button className=' bg-fuchsia-600 hover:bg-fuchsia-500 rounded-lg min-w-[10.5rem] min-h-[3.5rem]'> <Link to="/register">Get started</Link></button></li>
              </ul>
            </div>
          </div>

          <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}

          </div>

          <div className={!nav ? 'flex flex-col fixed left-0 top-0 min-h-[100vh] w-[75%] border-r-gray-500 bg-zinc-950 justify-between items-center ease-in-out duration-500  ' : 'fixed left-[-100%]'}  >
            <div >
              <ul className=' flex flex-col p-7'>
                <li className=' p-4'> <Link to="/dashboard"> Dashboard</Link></li>
                <li className=' p-4 '> <Link to="/about"> About</Link></li>
              </ul>
            </div>
            <div>
              <ul className=' flex flex-col'>
                <li className=' p-4'> <button className=' bg-fuchsia-600 hover:bg-fuchsia-600 bg-opacity-60 rounded-lg min-w-[10.5rem] min-h-[3.5rem]'> <Link to="/login"> Login</Link></button></li>
                <li className=' p-4'> <button className=' bg-fuchsia-600 hover:bg-fuchsia-500 rounded-lg min-w-[10.5rem] min-h-[3.5rem]'> <Link to="/register">Get started</Link></button></li>
              </ul>
            </div>

          </div>
        </nav>

        <div className=' min-h-screen flex flex-col justify-center items-start md:items-center bg-hero-pattern bg-center bg-no-repeat bg-cover lazy' >
          <h1 className=' text-white text-3xl text-left md:text-center font-semibold md:text-4xl  p-4 '>Secure Escrow</h1>
          <h3 className='text-white text-5xl text-left md:text-center  md:text-6xl lg:text-8xl lg:mx-10 tracking-tight font-medium p-4  ' >Your trusted escrow solution for safe and fair transactions.</h3>
          <div className=' bg-[#22be1c] font-bold p-5 mx-5 justify-center text-2xl min-w-[150px] flex  rounded-xl '>Get Started</div>
        </div>
        <div className=' min-h-[80vh] flex flex-col justify-center items-center'>
          <h3 className='text-white text-5xl text-center md:text-6xl lg:text-8xl  tracking-tight font-medium p-4 lg:mx-40 '>Crowlly is a secure and reliable solution for transactions involving multiple parties</h3>
        </div>
        <div className="min-h-[80vh] flex flex-col justify-center items-center">          
        <h3 className='text-white text-5xl text-center  md:text-6xl lg:text-8xl  tracking-tight font-medium p-4 lg:mx-40 '> A seamless and transparent escrow service</h3>
        </div>
        <div className="min-h-[80vh] flex flex-col justify-center items-center">
          <h3 className='text-white text-5xl text-center  md:text-6xl lg:text-8xl  tracking-tight font-medium p-4 lg:mx-40 '>Safe and fair financial transactions.</h3>
        </div>
        <div className=' text-white min-h-[39px] flex justify-between items-center font-mono p-9'>
          <Link href="/" alt="Crowlly logo" className='logo'> crowlly </Link>
          <p className=' text-lg md:text-2xl mx-4 text-center'> &copy;2023 Crowlly </p>
        </div>
      </div>
    </>
  )
}

export default App
