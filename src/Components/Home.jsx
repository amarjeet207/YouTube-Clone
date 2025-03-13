import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../Redux/reducer';
import NavBar from './NavBar';
import MiniSidebar from './MiniSidebar';
import MainSidebar from './MainSidebar';
import VideoGallery from './VideoGallery';

const Home = () => {
  const isMenuClicked = useSelector((state) => state.menu.isMenuClicked);
  const dispatch = useDispatch();

  return (
    <div className='max-w-screen h-screen box-border overflow-x-hidden '>
      <NavBar isMenuClicked={isMenuClicked} setIsMenuClicked={() => dispatch(toggleMenu())} />

      <div className='relative top-20 flex gap-4'>
        {isMenuClicked ? <MainSidebar /> : <MiniSidebar />}
        
        <VideoGallery />
      </div>
    </div>
  );
};

export default Home;
