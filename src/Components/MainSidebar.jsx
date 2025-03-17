import React from 'react'
import home from '../assets/home.svg'
import Subscriptions from '../assets/subscriptions.svg'
import account from '../assets/account_black.svg'
import history from '../assets/history.svg'
import shorts from '../assets/shorts.svg'
import sigin from '../assets/account.svg'
import trending from '../assets/trending.svg'
import shopping from '../assets/shopping.svg'
import music from '../assets/music-light.svg'
import movies from '../assets/movies.svg'
import live from '../assets/live.svg'
import gaming from '../assets/gaming.png'
import news from '../assets/news.svg'
import trophy from '../assets/trophy.svg'
import courses from '../assets/courses.svg'
import fashion from '../assets/fashion.svg'
import podcasts from '../assets/podcasts.svg'
import youtube from '../assets/favicon.png'
import settings from '../assets/settings.svg'
import report from '../assets/report.svg'
import help from '../assets/help.svg'
import feedback from '../assets/feedback.svg'
import Ytmusic from '../assets/youtube-music.png'
import Ytkids from '../assets/youtube-kids.png'
import { useAppContext } from "../AppContext";

const MainSidebar = () => {
  
  const { isSignIn, setIsSignIn } = useAppContext();

  return (
    
      <div className='w-[18%] box-border z-5 font-[sans-serif] font-medium text-zinc-800'>


        {/* Home, Shorts, Subs  */}
        <div className='  w-full '>
          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={home} className='w-6 ' />
            <p className='text-[14px] '>Home</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={shorts} className='w-6 ' />
            <p className='text-[14px]'>Shorts</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={Subscriptions} className='w-6 ' />
            <p className='text-[14px]'>Subscriptions</p>
          </div>
        </div>
        
        {/* <hr class="bg-zinc-300 h-px border-0 " /> */}

        {/* You, History */}
        <div className=' w-full border-t border-gray-300 my-4 '>
          <div className='flex items-center gap-5 mt-5 mb-5 pl-8'>
            <img src={account} />
            <p className='text-[14px]'>You</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={history} className='w-5 ' />
            <p className='text-[14px]'>History</p>
          </div>
        </div>

        {/* <hr class="bg-zinc-300 h-px border-0 " /> */}

        {/* Sign In */}
        {isSignIn ? "" : <div className=' w-full border-t border-gray-300 my-4'>
          <p className='mt-5 pl-8 text-[14px] '>Sign in to like videos,<br />comment, and subscribe.</p>

          <div className='mt-3 mb-5 flex items-center gap-1 border-1 border-zinc-200 w-fit ml-8 rounded-3xl p-1 pr-2 pl-2 cursor-pointer'>
            <img src={sigin} />
            <p className='text-[#065fd4] font-medium'>Sign in</p>
          </div>
        </div>}

        {/* <hr class="bg-zinc-300 h-px border-0 " /> */}

        {/* Explore */}
        <div className=' w-full border-t border-gray-300 my-4 '>
          <h1 className='pl-7 font-bold text-[17px] mt-5'>Explore</h1>

          <div className='flex items-center gap-5 mt-5 mb-5 pl-8'>
            <img src={trending} className='w-7 ' />
            <p className='text-[14px]'>Trending</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={shopping} className='w-6 ' />
            <p className='text-[14px]'>Shopping</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={music} className='w-5 ' />
            <p className='text-[14px]'>Music</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={movies} className='w-6 ' />
            <p className='text-[14px]'>Movies</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={live} className='w-7 ' />
            <p className='text-[14px]'>Live</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={gaming} className='w-6 ' />
            <p className='text-[14px]'>Gaming</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={news} className='w-6 ' />
            <p className='text-[14px]'>News</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={trophy} className='w-6 ' />
            <p className='text-[14px]'>Sports</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={courses} className='w-6 ' />
            <p className='text-[14px]'>Courses</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={fashion} className='w-6 ' />
            <p className='text-[14px]'>Fashion & Beauty</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={podcasts} className='w-6 ' />
            <p className='text-[14px]'>Podcasts</p>
          </div>

        </div>

        {/* <hr class="bg-zinc-300 h-px border-0 " /> */}

        {/* More from YouTube */}
        <div className=' w-full border-t border-gray-300 my-4'>
          <h1 className='pl-7 font-bold text-[17px] mt-5'> More from YouTube</h1>

          <div className='flex items-center gap-5 mt-5 mb-5 pl-8'>
            <img src={youtube} className='w-5 ' />
            <p className='text-[14px]'>Youtube Premium</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={Ytmusic} className='w-6 ' />
            <p className='text-[14px]'>Youtube Music</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={Ytkids} className='w-6 ' />
            <p className='text-[14px]'>Youtube Kids</p>
          </div>

        </div>

        {/* <hr class="bg-zinc-300 h-px border-0 " /> */}

        {/* Settings,history etc */}
        <div className='  w-full border-t border-gray-300 my-4 '>

          <div className='flex items-center gap-5 mt-5 mb-5 pl-8'>
            <img src={settings} className='w-6 ' />
            <p className='text-[14px]'>Settings</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={report} className='w-6 ' />
            <p className='text-[14px]'>Report history</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={help} className='w-6 ' />
            <p className='text-[14px]'>Help</p>
          </div>

          <div className='flex items-center gap-5 mb-5 pl-8'>
            <img src={feedback} className='w-6 ' />
            <p className='text-[14px]'>Send feedback</p>
          </div>

        </div>
        {/* <hr class="bg-zinc-300 h-px border-0 " /> */}

        {/* Footer */}
        <div className=' mt-5 w-full border-t border-gray-300 my-4'>
          <p className='mb-5 mt-5 text-xs font-bold pl-8 text-gray-600 '>
            About &nbsp;Press&nbsp; Copyright <br /> Contact us&nbsp; Creators <br /> 
            Advertise&nbsp; Developers

          </p>
          <p className='mb-5 text-xs font-bold pl-8 text-gray-600 '>
          Terms &nbsp;Privacy&nbsp; Policy & Safety <br />
          How Youtube works <br /> 
          Test new features

          </p>
        
          <p className='mt-5 mb-5 pl-8 text-zinc-500 text-[13px]'>&copy; 2025 Google LLC</p>

        </div>

      </div>
   
  )
}

export default MainSidebar