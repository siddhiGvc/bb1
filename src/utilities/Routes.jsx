import React, {useState} from 'react'
import {Route,Routes,createBrowserRouter,RouterProvider } from 'react-router-dom';
import SignIn from '../pages/Login/login';

import Main from './Main'
import Home from '../pages/home/home'

const Router = () => {
  const [elmBlog, setElmBlog] = useState([]);

  const router = createBrowserRouter([
      {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
      ]  
      
        },
        {
          path:'/login',
          element:<SignIn/>

        }
  ])
  return <>
   <RouterProvider router={router}></RouterProvider>
  
  
  </>
}

export default Router