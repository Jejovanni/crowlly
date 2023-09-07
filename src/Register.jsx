import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className='flex flex-col lg:flex-row'>
            <div className='lg:flex lg:min-w-[50%] lg:bg-register-pattern lg:bg-cover hidden min-h-screen '>
                
            </div>
            <div className='flex flex-col justify-center items-center lg:min-w-[50%] min-h-screen bg-register-pattern bg-cover lg:bg-none px-6  '>
                <h1 className=' text-center text-2xl md:text-3xl lg:text-4xl '>Register your Crowlly account</h1>
                <form className='flex flex-col' action="">
                    <label htmlFor="first-name" className=' text-xl md:text-2xl '>First Name</label>
                    <input type="text" className=' min-h-[50px]' placeholder='Enter your first name' id='first-name' />

                    <label htmlFor="middle-name" className=' text-xl md:text-2xl '>Middle Name(optional)</label>
                    <input type="text" className=' min-h-[50px]' placeholder='Enter your middle name' id='middle-name' />

                    <label htmlFor="last-name" className=' text-xl md:text-2xl '>Last Name</label>
                    <input type="text" className=' min-h-[50px]' placeholder='Enter your last name' id='last-name' />

                    <label htmlFor="phone-number" className=' text-xl md:text-2xl '>Phone Number</label>
                    <input type="tel" name="" className=' min-h-[50px]' placeholder='08180000000' id="phone-number" />

                    <label htmlFor="password" className=' text-xl md:text-2xl '>Password</label>
                    <input type="password" className=' min-h-[50px]' name="" id="password" />

                    <label htmlFor=""></label>
                    <button className=' min-h-[50px] text-xl md:text-2xl bg-[#22be1c] '>Create account</button>
                    <p className=' text-base lg:text-lg text-center pt-4 '> <input type="checkbox" name="" id="" /> By registering, you accept our <Link className='underline underline-offset-4'> Terms of use </Link>and<Link className='underline underline-offset-4'> Privacy Policy</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register