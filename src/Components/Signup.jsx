import React from 'react'
import google from '../assets/google.png'

const Signup = () => {
  return (
    <div className='flex justify-center items-center bg-zinc-200 h-screen font-sans'>
         <div className=' bg-white w-fit rounded-3xl flex xs:flex-col lg:flex-row gap-15 p-10'>
           {/* left div */}
           <div>
             <div>
               <img src={google} />
             </div>
             <h1 className='mt-5 text-4xl '>Create a Google Account</h1>
             <p className='mt-5 text-[16px] text-zinc-800'>Enter your Details</p>
           </div>
   
           {/* right div */}
   
           <div>
             <input type="text" name="fullName" 
             placeholder='Full Name' 
             className='w-full p-4 border-1 border-zinc-500 rounded-md'/>

            <input type="text" name="email" 
             placeholder='Email' 
             className='w-full p-4 border-1 border-zinc-500 mt-5 rounded-md  '/>
            
            <input type="text" name="password" 
             placeholder='Password' 
             className='w-full p-4 border-1 border-zinc-500 mt-5 rounded-md  '/>

             <div className='mt-10 flex gap-10 justify-end items-center'>
             <button className='cursor-pointer bg-blue-700 text-slate-50 font-medium px-6 py-2 rounded-3xl '>Sign Up</button>
             </div>
             
           </div>
   
         </div>
       </div>
  )
}

export default Signup
