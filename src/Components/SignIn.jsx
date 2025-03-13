import React from 'react'
import google from '../assets/google.png'

const SignIn = () => {
  return (
    <div className='flex justify-center items-center bg-zinc-200 h-screen font-sans'>
      <div className=' bg-white w-fit rounded-3xl flex xs:flex-col lg:flex-row gap-15 p-10'>
        {/* left div */}
        <div>
          <div>
            <img src={google} />
          </div>
          <h1 className='mt-5 text-4xl '>Sign in</h1>
          <p className='mt-5 text-[16px] text-zinc-800'>with your Google Account to continue to YouTube. This <br />
           account will be available to other Google apps in the <br />
           browser.
          </p>
        </div>

        {/* right div */}

        <div>
          <input type="text" name="email" 
          placeholder='Email or phone' 
          className='w-full p-4 border-1 border-zinc-500 rounded-md '/>
          <p className='mt-3 text-blue-700 text-sm font-medium'>Forgot email?</p>
          <p className='mt-10'>Not your computer? Use Guest mode to sign in privately. Learn <br />
          more about using Guest mode</p>

          <div className='mt-10 flex gap-10 justify-end items-center'>
          <p className='text-blue-700 font-medium cursor-pointer'>Create Account</p>
          <button className='cursor-pointer bg-blue-700 text-slate-50 font-medium px-6 py-2 rounded-3xl '>Sign In</button>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default SignIn