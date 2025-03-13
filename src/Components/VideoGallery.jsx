import React from 'react'
import VideoItem from './VideoItem';


const VideoGallery = () => {

  const filters = ["All","HTML","Gaming","React","Web Development","Coding","Data Structure",
                  "JavaScript","Stand up","Cricket bats","Indian Movies","Funny Videos","Cat Videos","Pop Music"];

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
        <VideoItem pageType={"videoGallary"}/>
        <VideoItem pageType={"videoGallary"}/>
        <VideoItem pageType={"videoGallary"}/>
        <VideoItem pageType={"videoGallary"}/>
        <VideoItem pageType={"videoGallary"}/>
        <VideoItem pageType={"videoGallary"}/>
        <VideoItem pageType={"videoGallary"}/>
        <VideoItem pageType={"videoGallary"}/>
        <VideoItem pageType={"videoGallary"}/>
        <VideoItem pageType={"videoGallary"}/>
        <VideoItem pageType={"videoGallary"}/>
        <VideoItem pageType={"videoGallary"}/>
        <VideoItem pageType={"videoGallary"}/>
        <VideoItem pageType={"videoGallary"}/>
        <VideoItem pageType={"videoGallary"}/>
        
       
      </div>
    </div>
  )
}

export default VideoGallery







