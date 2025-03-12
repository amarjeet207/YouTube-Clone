import React from 'react'
import Home from './Components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
  ])


  return (
    <div className='box-border p-0 m-0 max-w-screen'>
       <RouterProvider router={router}/>
    </div>
  )
}

export default App
