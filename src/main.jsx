import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './Components/ErrorPaeg.jsx'
import BrowseAll from './Components/BrowseAll/BrowseAll.jsx';
import { Result } from './Components/Result.jsx';
import Search from './Components/Search.jsx';
import Video from './Components/Video.jsx';


const LazyHome = lazy(() => delayForDemo(import('./Components/Home/Home.jsx')))
const Tranding = lazy(() => delayForDemo(import('./Components/Tranding/Tranding.jsx')))
const Tech = lazy(() => delayForDemo(import('./Components/Tech.jsx')))



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LazyHome />
      },
      {
        path: "/tranding",
        element: <Tranding />
      },
      {
        path: "/browseall",
        element: <BrowseAll />
      },

      {
        path: "/result/:queryResult",
        element: <Result />
      },
      {
        path: "/video/:videoId",
        element: <Video />
      },
      {
        path: "/tech",
        element: <Tech />
      },
    ]
  },
  {
    path: "/search/:queryResult",
    element: <Search />
  },


])

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
