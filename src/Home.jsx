import React from 'react'

function Home() {
  return (
    <div>
          <div className=' min-h-screen flex flex-col justify-center items-start md:items-center bg-hero-pattern bg-center bg-no-repeat bg-cover lazy' >
              <h1 className=' text-white text-3xl text-left md:text-center font-semibold md:text-4xl  p-4 '>Secure Escrow</h1>
              <h3 className='text-white text-5xl text-left md:text-center  md:text-6xl lg:text-8xl lg:mx-10 tracking-tighter font-medium p-4  ' >Your trusted escrow solution for safe and fair transactions.</h3>
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
          
    </div>
  )
}

export default Home