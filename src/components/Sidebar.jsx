import React from 'react'
import { Link } from 'react-router-dom'
import { AccountBalanceWalletRounded, AccountCircle, Home, Logout, Person, Person2Rounded, } from '@mui/icons-material'


function Sidebar() {
    return (
        <div className='text-2xl hidden md:block md:min-w-[14%]'>
            <Link href="/" alt="Crowlly logo" className='logo lg:text-4xl'> crowlly </Link>
            <div className=' flex flex-col'>
                <div className=' flex flex-col md:mt-[10rem]'>
                <Link to="/dashboard"> <Home/> Home</Link>
                <Link> <AccountBalanceWalletRounded/> Balances</Link>
                </div>
                <div className=' flex flex-col md:mt-[45rem] justify-center' >
                <Link> <Person/> Profile</Link>
                <Link> <Logout/> Logout</Link>
                <Link> <AccountCircle/> User 1</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar