import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './Components/ErrorPaeg.jsx'
import BrowseAll from './Components/BrowseAll/BrowseAll.jsx'
import { Result } from './Components/Result.jsx'
import Search from './Components/Search.jsx'
import Video from './Components/Video.jsx'
import Home from './Components/Home/Home.jsx'
import Tech from './Components/Tech.jsx'
import Tranding from './Components/Tranding/Tranding.jsx'
import Profile from './Components/Auth/Profile.jsx'
import Login from './Components/Auth/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/tranding',
        element: <Tranding />
      },
      {
        path: '/browseall',
        element: <BrowseAll />
      },

      {
        path: '/result/:queryResult',
        element: <Result />
      },
      {
        path: '/video/:videoId',
        element: <Video />
      },
      {
        path: '/tech',
        element: <Tech />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  },
  {
    path: '/search/:queryResult',
    element: <Search />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
