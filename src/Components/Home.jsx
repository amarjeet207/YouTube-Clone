import React, { useState } from 'react'
import NavBar from './NavBar'
import MiniSidebar from './MiniSidebar'
import VideoGrids from './VideoGrids'
import MainSidebar from './MainSidebar'

const Home = () => {

  const [isMenuClicked, setIsMenuClicked] = useState(true);
  return (
    <div className='relatuve box-border z-0'>
        
        <NavBar isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked}/>

        <div className='w-fit h-fit relative top-20 flex gap-4 '>
            {isMenuClicked ? <MainSidebar/> :  <MiniSidebar/>}
            <VideoGrids/>

        </div>
  </div>
  )
}

export default Home