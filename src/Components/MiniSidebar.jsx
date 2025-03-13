import React from 'react'
import home from '../assets/home.svg'
import Subscriptions from '../assets/subscriptions.svg'
import account from '../assets/account_black.svg'
import history from '../assets/history.svg'
import shorts from '../assets/shorts.svg'


const MiniSidebar = () => {
  return (
    <div className=' box-border font-[sans-serif] font-medium text-[10px]'>
        <div className='mb-8 flex flex-col gap-2 items-center '>
          <img src={home} className='w-5' />
          <p className='text-xs '>Home</p>
        </div>

        <div className='mb-8 flex flex-col gap-2 items-center '>
          <img src={shorts} className='' />
          <p className='text-xs'>Shorts</p>
        </div>

        <div className='mb-8 flex flex-col gap-2 items-center '>
          <img src={Subscriptions} className=' ' />
          <p className='text-xs pl-4'>Subscriptions</p>
        </div>

        <div className='mb-8 flex flex-col gap-2 items-center '>
          <img src={account} className=' mb-1'/>
          <p className='text-xs'>You</p>
        </div>

        <div className='mb-8 flex flex-col gap-2 items-center '>
          <img src={history} className='w-5 ' />
          <p className='text-xs'>History</p>
        </div>
    </div>
  )
}

export default MiniSidebar