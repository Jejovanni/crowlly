import React from 'react'
import { AccountCircleRounded, MoreHorizRounded, AddCircleSharp, GroupAddSharp, RemoveCircleSharp, ArrowCircleUp, ArrowCircleDown } from '@mui/icons-material';
import Sidebar from './components/Sidebar';

function Dashboard() {
  return (
    <div className=' m-6 lg:m-20 md:flex  min-h-full'>

      <Sidebar />

      <div className=' md:min-w-[86%] '>
        <div className=' flex justify-between items-center'>
          <AccountCircleRounded sx={{ color: 'white' }} />
          <h1 className=' text-center text-2xl'>Dashboard</h1>
          <MoreHorizRounded sx={{ color: 'white' }} />

        </div>
        <div className=' flex min-h-[15vh] border-b border-gray-100 justify-start items-center'>
          <h2 className=' text-4xl font-semibold'> <span className=' text-neutral-400 text-base'>{'\u20A6'}</span> 400,000 <span className=' text-neutral-400 text-base'>.00</span> </h2>
        </div>
        <div className=' flex justify-between pt-4 pb-4'>
          <span className=' text-sm'> <AddCircleSharp sx={{ color: 'white' }} /> Top-up </span>
          <span className=' text-sm'> <GroupAddSharp sx={{ color: 'white' }} /> Group Hold</span>
          <span className=' text-sm'> <RemoveCircleSharp sx={{ color: 'white' }} /> Withdraw</span>
        </div>
        <div className=' flex pb-4 items-center'>
          <div className=' bg-neutral-400 rounded-3xl w-8 h-8 flex justify-center items-center '>
            <ArrowCircleUp />
          </div>
          <div className=' flex-col pl-2 items-center'>
            <h2>Send Money</h2>
            <p className=' text-sm'>Transfer money locally</p>
          </div>
        </div>
        <div className=' flex pb-4 items-center'>
          <div className=' bg-neutral-400 rounded-3xl w-8 h-8 flex justify-center items-center '>
            <ArrowCircleDown />
          </div>
          <div className=' flex-col pl-2'>
            <h2>Receive money</h2>
            <p className=' text-sm'>Receive funds from a contact or via a link</p>
          </div>
        </div>
        <div className=' flex justify-between pt-4 pb-4'>
          <h2>Recent</h2>
          <h2>View all</h2>
        </div>
        <div className=' flex flex-col rounded-md'>
          <div className=' flex pt-4 min-h-full'>
            <div>
              <GroupAddSharp sx={{ color: 'white' }} />
            </div>

            <div className=' flex pl-2'>
              <p> NGN Group Hold</p> <span>-1,000</span>
            </div>
          </div>
          <div className=' flex pt-4'>
            <div className='flex'>
              <ArrowCircleUp />
            </div>
            <div className=' flex pl-2'>
              <p> NGN Wallet Transfer</p> <p>-1,000</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard