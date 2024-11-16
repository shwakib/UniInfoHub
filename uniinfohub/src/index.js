import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Landing from '../src/components/pages/landing/Landing'
import Transport from '../src/components/pages/transport/Transport'
// import BeforeGettingBusPass from '../src/components/pages/transport/BeforeGettingBusPass'
import GetBusPass from '../src/components/pages/transport/GetBusPass'
import RefillBusPass from '../src/components/pages/transport/RefillBusPass'
import Studentservices from '../src/components/pages/services/Studentservices' 
import Rentingrooms from '../src/components/pages/services/Rentingrooms' 
import Drivinglicense from '../src/components/pages/services/Drivinglicense' 
import Accommodation from '../src/components/pages/services/Accommodation' 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
  {
    path: "/transport",
    element: <Transport />
  },
  // {
  //   path: "/transport/beforegettingbuspass",
  //   element: <BeforeGettingBusPass />

  // },
  {
    path: "/transport/getbuspass",
    element: <GetBusPass />

  },
  {
    path: "/transport/refillbuspass",
    element: <RefillBusPass />

  },
  {
    path: "/services/Studentservices",
    element: <Studentservices />

  },
  {
    path: "/services/Accommodation",
    element: <Accommodation />

  },
  {
    path: "/services/Drivinglicense",
    element: <Drivinglicense />

  },
  {
    path: "/services/Rentingrooms",
    element: <Rentingrooms />

  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
