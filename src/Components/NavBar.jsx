import React from 'react'
import logo from '../assets/Youtube-Logo.png'
import menu from '../assets/menu.svg'
import search from '../assets/search.svg'
import mic from '../assets/mic.svg'
import vert from '../assets/more_vert.svg'
import sigin from '../assets/account.svg'

const NavBar = (props) => {
    return (
        <div className='top-0 fixed z-10 mt-2 w-full font-sans box-border flex items-center justify-between '>

            <div className='w-24 object-cover flex items-center gap-5 ml-8'>
                <img src={menu} className='cursor-pointer' onClick={() => props.setIsMenuClicked(!props.isMenuClicked)} />
                <img src={logo} className='cursor-pointer' />
            </div>

            <div className='flex items-center gap-5'>

                <div className='shadow-inner flex justify-between items-center border-1 pl-2 rounded-3xl md:w-[20rem] lg:w-[38rem] h-10 border-zinc-300 object-cover '>
                    <input type="text" placeholder='Search' className='border-0 outline-0 ml-2 text-[18px] ' />

                    <div className=' bg-[#f8f8f8] border-l-1 border-zinc-300  h-full rounded-br-3xl rounded-tr-3xl pl-4 pr-4 flex items-center justify-center '>
                        <img src={search} className='w-7 cursor-pointer' />
                    </div>
                </div>
                <div className='p-2 rounded-full bg-zinc-100 '>
                    <img src={mic} className='cursor-pointer' />
                </div>
            </div>

            <div className='flex items-center gap-5 mr-8'>
                <img src={vert} className='cursor-pointer' />

                <div className='flex items-center gap-2 border-1 border-zinc-200 rounded-3xl p-1 pr-2 pl-2 cursor-pointer'>
                    <img src={sigin} />
                    <p className='text-[#065fd4] font-medium'>Sign in</p>
                </div>

            </div>



        </div>
    )
}

export default NavBar