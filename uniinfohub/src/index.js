import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Houserent from './components/pages/services/Houserent';
import Transport from './components/pages/transport/Transport';
import GSSProvider from '../src/components/pages/Health/GSSProvider';
import GetGSC from '../src/components/pages/Health/GetGSC';
import BeforeGettingGSC from '../src/components/pages/Health/BeforeGettingGSC';
import OptOutHealth from '../src/components/pages/Health/OptOutHealth';
import HowAndWhereToPrint from '../src/components/pages/LibraryResearch/HowAndWhereToPrint';
import LoadUwinCard from '../src/components/pages/LibraryResearch/LoadUwinCard';
import BookRoom from '../src/components/pages/LibraryResearch/BookRoom';
import SearchJournal from '../src/components/pages/LibraryResearch/SearchJournal';
import GetBusPass from '../src/components/pages/transport/GetBusPass';
import RefillBusPass from '../src/components/pages/transport/RefillBusPass';
import Studentservices from '../src/components/pages/services/Studentservices';
import CheckStop from './components/pages/transport/Checkstop';
import Drivinglicense from '../src/components/pages/services/Drivinglicense'; 
import Accommodation from '../src/components/pages/services/Accommodation';
import Success from './components/pages/Payment/Success';
import Cancel from './components/pages/Payment/Cancel';
import BookAppointment from './components/pages/Health/BookAppointment';
import AdminDashboard from './helper/DashboardAppointments';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/transport", element: <Transport /> },
  { path: "/gss-provider", element: <GSSProvider /> },
  { path: "/get-gsc-card", element: <GetGSC /> },
  { path: "/before-getting-gsc", element: <BeforeGettingGSC /> },
  { path: "/opt-out-health", element: <OptOutHealth /> },
  { path: "/rent", element: <Houserent /> },
  { path: "/how-to-print", element: <HowAndWhereToPrint /> },
  { path: "/load-uwincard", element: <LoadUwinCard /> },
  { path: "/book-room", element: <BookRoom /> },
  { path: "/getbuspass", element: <GetBusPass /> },
  { path: "/refillbuspass", element: <RefillBusPass /> },
  { path: "/checkstop", element: <CheckStop /> },
  { path: "/studentservices", element: <Studentservices /> },
  { path: "/accommodation", element: <Accommodation /> },
  { path: "/drivinglicense", element: <Drivinglicense /> },
  { path: "/search-journal", element: <SearchJournal /> },
  { path: "/success", element: <Success /> },
  { path: "/cancel", element: <Cancel /> },
  { path: "/cancel", element: <Cancel /> },
  { path: "/book-appointment", element: <BookAppointment /> },
  { path: "/admin-dashboard", element: <AdminDashboard /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();