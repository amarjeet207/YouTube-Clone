import React, { useState,useEffect } from 'react'
import VideoItem from './VideoItem';
import { Link } from 'react-router-dom';
import { useAppContext } from '../AppContext';


const VideoGallery = () => {

  const filters = ["All","HTML","Gaming","React","Web Development","Coding","Data Structure",
                  "JavaScript","Stand up","Cricket bats","Indian Movies","Funny Videos","Cat Videos","Pop Music"];

    const  {allVideos, setAllVideos}  =  useAppContext();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/videos");
        const data = await res.json();
        console.log(data);
        setAllVideos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  
  

  return (
    <div className='box-border border-amber-400 pl-4 pr-4 font-sans w-[78%] '>

      {/* Filters */}
      <div className='flex gap-5 mb-10 w-full '>
        {filters.map(filter => (
          <button className='xs:text-[10px] lg:text-[14px] p-1 whitespace-nowrap text-center font-[Roboto] bg-[#0000000D] rounded-md text-[14px] text-zinc-800 font-semibold'>
            {filter}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      <div className=' grid xs:grid-cols-1  md:grid-cols-3  gap-4'>

        {
          allVideos.map(video => (
            <Link to={`/videopage/${video._id}`}  key ={video._id} >
            <VideoItem 
            title = {video.title}
            thumbnailURL = {video.thumbnailURL} 
            channelName = {video.channelName}
            views = {video.views}
            />
            </Link>  
          ))
        }  
     </div>
    </div>
  )
}

export default VideoGallery







