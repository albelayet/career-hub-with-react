import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Roots/Root';
import Home from './component/Home/Home';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import ErrorMsg from './component/ErrorMsg/ErrorMsg';
import Statistic from './component/Statistic/Statistic';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorMsg></ErrorMsg>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
