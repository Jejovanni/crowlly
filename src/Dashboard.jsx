import React from 'react'
import {
  AccountCircleRounded,
  MoreHorizRounded,
  AddCircleSharp,
  GroupAddSharp,
  RemoveCircleSharp,
  ArrowCircleUp,
  ArrowCircleDown
} from '@mui/icons-material';
import Sidebar from './components/Sidebar';

function Dashboard() {
  return (
    <div className=' p-6 lg:pt-10 lg:pr-10 lg:pb-10 lg:pl-0 md:flex  min-h-screen'>

      <Sidebar />

      <div className=' md:min-w-[86%] lg:p-10'>
        
        <div className=' flex justify-between items-center'>
          <AccountCircleRounded sx={{ color: 'white' }} />
          <h1 className=' text-center text-2xl'>Dashboard</h1>
          <MoreHorizRounded sx={{ color: 'white' }} />

        </div>
        <div className=' flex min-h-[15vh] border-b border-gray-100 justify-center items-center '>
          <h2 className=' text-4xl lg font-semibold'> <span className=' text-neutral-400 text-base'>{'\u20A6'}</span> 400,000 <span className=' text-neutral-400 text-base'>.00</span> </h2>
        </div>
        <div className=' flex justify-between pt-4 pb-4'>
          <span className=' text-sm lg:text-xl'> <AddCircleSharp sx={{ color: 'white' }} /> Top-up </span>
          <span className=' text-sm lg:text-xl'> <GroupAddSharp sx={{ color: 'white' }} /> Group Hold</span>
          <span className=' text-sm lg:text-xl'> <RemoveCircleSharp sx={{ color: 'white' }} /> Withdraw</span>
        </div>
        <div className=' flex pb-4 items-center'>
          <div className=' bg-neutral-400 rounded-3xl w-8 h-8 flex justify-center items-center '>
            <ArrowCircleUp />
          </div>
          <div className=' flex-col pl-2 items-center'>
            <h2 className=' text-sm lg:text-xl'>Send Money</h2>
            <p className=' text-sm lg:text-xl'>Transfer money locally</p>
          </div>
        </div>
        <div className=' flex pb-4 items-center'>
          <div className=' bg-neutral-400 rounded-3xl w-8 h-8 flex justify-center items-center '>
            <ArrowCircleDown />
          </div>
          <div className=' flex-col pl-2'>
            <h2 className=' text-sm lg:text-xl'>Receive money</h2>
            <p className=' text-sm lg:text-xl'>Receive funds from a contact or via a link</p>
          </div>
        </div>
        <div className=' flex justify-between pt-4 pb-4'>
          <h2 className=' text-sm lg:text-xl'>Recent</h2>
          <h2 className=' text-sm lg:text-xl'>View all</h2>
        </div>
        <div className=' flex flex-col rounded-md'>
          <div className=' flex pt-4 min-h-full'>
            <div>
              <GroupAddSharp sx={{ color: 'white' }} />
            </div>

            <div className=' flex pl-2'>
              <p className=' text-sm lg:text-xl'> NGN Group Hold</p> <span className=' text-sm lg:text-xl'>-1,000</span>
            </div>
          </div>
          <div className=' flex pt-4'>
            <div className='flex'>
              <ArrowCircleUp />
            </div>
            <div className=' flex pl-2'>
              <p className=' text-sm lg:text-xl'> NGN Wallet Transfer</p> <span className=' text-sm lg:text-xl'>-1,000</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard