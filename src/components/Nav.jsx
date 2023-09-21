import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'



function Nav() {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div>
          <nav className=' flex justify-between px-4 mx-auto max-w-[1640px] h-28 items-center text-2xl text-white ' >

              <Link to="/" alt="Crowlly logo" className='logo'> crowlly </Link>

              <div className=' items-center hidden lg:flex justify-between max-w-[76em]'>
                  <div >
                      <ul className=' flex'>
                          <li className=' p-4 '> <NavLink to="/dashboard"> Dashboard</NavLink></li>
                          <li className=' p-4'> <NavLink to="/about"> About</NavLink></li>
                      </ul>
                  </div>
                  <div>
                      <ul className=' flex'>
                          <li className=' p-4'><Link to="/login"> <button className=' bg-fuchsia-600 hover:bg-fuchsia-600 bg-opacity-60 rounded-lg min-w-[10.5rem] min-h-[3.5rem]'>  Login</button></Link></li>
                          <li className=' p-4'> <button className=' bg-fuchsia-600 hover:bg-fuchsia-500 rounded-lg min-w-[10.5rem] min-h-[3.5rem]'> <Link to="/register">Get started</Link></button></li>
                      </ul>
                  </div>
              </div>

              <div onClick={handleNav} className='block md:hidden'>
                  {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}

              </div>

              <div className={!nav ? 'flex flex-col fixed z-10 left-0 top-0 min-h-[100vh] w-[75%] border-r-gray-500 bg-zinc-950 justify-between items-center ease-in-out duration-500  ' : 'fixed left-[-100%]'}  >
                  <div >
                      <ul className=' flex flex-col p-7'>
                          <li className=' p-4'> <NavLink to="/dashboard"> Dashboard</NavLink></li>
                          <li className=' p-4 '> <NavLink to="/about"> About</NavLink></li>
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
        
    </div>
  )
}

export default Nav