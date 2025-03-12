import React, { useState } from 'react'
import NavBar from './NavBar'
import MiniSidebar from './MiniSidebar'
import MainSidebar from './MainSidebar'
import VideoGallery from './VideoGallery'

const Home = () => {

  const [isMenuClicked, setIsMenuClicked] = useState(true);
  return (
    <div className='relatuve box-border z-0'>
        
        <NavBar isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked}/>

        <div className='w-fit h-fit relative top-20 flex gap-4 '>
            {isMenuClicked ? <MainSidebar/> :  <MiniSidebar/>}
           <VideoGallery/>

        </div>
  </div>
  )
}

export default Home