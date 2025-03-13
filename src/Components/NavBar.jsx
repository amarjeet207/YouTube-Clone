import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../Redux/reducer';
import logo from '../assets/Youtube-Logo.png';
import menu from '../assets/menu.svg';
import search from '../assets/search.svg';
import mic from '../assets/mic.svg';
import vert from '../assets/more_vert.svg';
import signin from '../assets/account.svg';

const NavBar = () => {
  const isMenuClicked = useSelector((state) => state.menu.isMenuClicked);
  const dispatch = useDispatch();

  return (
    <div className='bg-white top-0 fixed z-20 w-screen font-sans box-border flex items-center justify-between'>
      <div className='w-24 object-cover flex items-center gap-5 ml-8 '>
        {/* menu */}
        <img
          src={menu}
          className='cursor-pointer'
          onClick={() => dispatch(toggleMenu())}
        />
        {/* Logo */}
        <img src={logo} className='cursor-pointer  ' />   
      </div>

      {/* Search , mic */}
      <div className='flex items-center gap-5'>
        <div className='shadow-inner flex justify-between items-center border-1 pl-2 rounded-3xl xs:w-[20rem] lg:w-[38rem] h-10 border-zinc-300 object-cover'>
          <input
            type='text'
            placeholder='Search'
            className='border-0 outline-0 ml-2 text-[18px]'
          />
          <div className='bg-[#f8f8f8] border-l-1 border-zinc-300 h-full rounded-br-3xl rounded-tr-3xl pl-4 pr-4 flex items-center justify-center'>
            <img src={search} className='w-7 cursor-pointer' />
          </div>
        </div>
        <div className='p-2 rounded-full bg-zinc-100 xs:hidden md:block'>
          <img src={mic} className='cursor-pointer' />
        </div>
      </div>

      {/* Signin */}
      <div className='flex items-center gap-5 mr-8'>
        <img src={vert} className='cursor-pointer xs:hidden md:block' />
        <div className='flex items-center gap-2 border-1 border-zinc-200 rounded-3xl py-1 px-2  cursor-pointer'>
          <img src={signin} className='w-6'/>
          <p className='text-[#065fd4] font-medium xs:hidden lg:block'>Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
