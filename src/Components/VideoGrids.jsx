import React from 'react'
import Thumbnail from './Thumbnail';

const VideoGrids = () => {

  const filters = ["All","HTML","Gaming","React","Web Development","Coding","Data Structure",
                  "JavaScript","Stand up","Cricket bats","Indian Movies","Funny Videos","Cat Videos","Pop Music"];

  return (
    <div className=' w-fit h-screen flex flex-col gap-10
     box-border border-2 border-amber-400 pl-4 pr-4 font-sans '>

      {/* Filters */}
      <div className='flex gap-2 overflow-y-hidden '>
        {filters.map(filter => (
          <div className='w-fit h-fit p-1 px-2 font-[Roboto] bg-[#0000000D] rounded-md text-[14px] text-zinc-800 font-semibold'>{filter}</div>
        ))}
      </div>

      {/* Videos Grid */}
      <div className=' grid grid-cols-3 gap-4  border-2 border-red-500'>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
       
      </div>
    </div>
  )
}

export default VideoGrids