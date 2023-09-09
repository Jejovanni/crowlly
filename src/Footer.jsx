import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
          <div className=' text-white min-h-[39px] flex justify-between items-center font-mono p-9'>
              <Link to="/" alt="Crowlly logo" className='logo'> crowlly </Link>
              <p className=' text-lg md:text-2xl mx-4 text-center'> &copy;2023 Crowlly </p>
          </div>
    </div>
  )
}

export default Footer