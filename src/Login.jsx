import React from 'react'
import { Link } from 'react-router-dom'
import { Apple, Facebook, Google } from '@mui/icons-material'

function Login() {
  return (
      <div className=' flex flex-col items-center justify-center min-h-screen  '>
          <div className=''>

              <h1 className=' text-center text-xl md:text-3xl lg:text-4xl '> Log in to your Crowlly account</h1>
              <p className=' text-center text-sm md:text-lg lg:text-xl '> Don't have an account? <Link to={'/signup'} className=' underline underline-offset-4 hover:bg-slate-50'> Sign up</Link></p>
              <div className=' flex flex-col pt-4 pb-4'>
                  <label htmlFor="email" className=' text-base md:text-lg text-left lg:mb-1'> Email address</label>
                  <input type="email" name="email" id="" placeholder='Enter your email address' className=' rounded-md md:min-w-[30rem] lg:min-w-[45rem] md:text-xl min-h-[3.125rem] md:min-h-[3.125rem] ' />
                  <label htmlFor="password" className=' text-base md:text-lg text-left lg:mb-1 mt-3'>Password</label>
                  <input type="password" name="Password" placeholder='Enter password (min. of 8 characters)' id="" className=' rounded-md md:min-w-[30rem] lg:min-w-[45rem] md:text-xl h-[3.125rem] md:min-h-[3rem] ' />
                  <Link><span className=' underline mt-1'>Forgot your password?</span></Link>
                  <input type="submit" value="Next" className='rounded-3xl min-w-[10rem] md:min-w-[30rem] bg-[#22be1c] min-h-[3.125rem] md:text-xl mt-4' />
              </div>
              <p className=' text-sm lg:text-xl text-left pb-4'> or log in with</p>
              <div className=' flex justify-between items-center pb-4'>
                  <button className=' min-w-[5rem] md:min-w-[7rem] lg:min-w-[10rem] rounded-2xl bg-[#22be1c] min-h-[2rem] lg:min-h-[2.6rem] flex justify-center items-center'><Google /></button>
                  <button className=' min-w-[5rem] md:min-w-[7rem] lg:min-w-[10rem] rounded-2xl bg-[#22be1c] min-h-[2rem] lg:min-h-[2.6rem] flex justify-center items-center'><Facebook /></button>
                  <button className=' min-w-[5rem] md:min-w-[7rem] lg:min-w-[10rem] rounded-2xl bg-[#22be1c] min-h-[2rem] lg:min-h-[2.6rem] flex justify-center items-center'><Apple /></button>
              </div>
              <p className=' text-xs md:text-base lg:text-lg text-center pt-4 '> By registering, you accept our <Link className='underline underline-offset-4'> Terms of use </Link>and<Link className='underline underline-offset-4'> Privacy Policy</Link></p>

          </div>
      </div>
  )
}

export default Login