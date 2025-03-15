import React from 'react';
import NavBar from './NavBar';
import MiniSidebar from './MiniSidebar';
import MainSidebar from './MainSidebar';
import VideoGallery from './VideoGallery';
import { useAppContext } from '../AppContext';

const Home = () => {
   const { toggleMenu, setToggleMenu } = useAppContext();
 
  return (
    <div className='max-w-screen h-screen box-border overflow-x-hidden '>
      <NavBar />

      <div className='relative top-20 flex gap-4'>
        {toggleMenu ? <MainSidebar /> : <MiniSidebar />}
        
        <VideoGallery />
      </div>
    </div>
  );
};

export default Home;
