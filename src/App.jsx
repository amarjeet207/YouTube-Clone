import React from 'react'
import Home from './Components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import VideoPage from './Components/VideoPage'
import SignIn from './Components/SignIn'
import Signup from './Components/Signup'
import Channel from './Components/Channel'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/videopage',
      element: <VideoPage/>
    },
    {
      path:'/signin',
      element: <SignIn/>
    },
    {
      path:'/signup',
      element: <Signup/>
    },
    {
      path:'/channel',
      element: <Channel/>
    },
  ])


  return (
    <div className='box-border p-0 m-0 '>
       <RouterProvider router={router}/>
    </div>
  )
}

export default App
