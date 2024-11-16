import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Houserent from './components/pages/rent/Houserent';
import Transport from '../src/components/pages/landing/Transport';
import GSSProvider from '../src/components/pages/Health/GSSProvider';
import GetGSC from '../src/components/pages/Health/GetGSC';
import BeforeGettingGSC from '../src/components/pages/Health/BeforeGettingGSC';
import OptOutHealth from '../src/components/pages/Health/OptOutHealth';
import HowAndWhereToPrint from '../src/components/pages/LibraryResearch/HowAndWhereToPrint';
import LoadUwinCard from '../src/components/pages/LibraryResearch/LoadUwinCard';
import BookRoom from '../src/components/pages/LibraryResearch/BookRoom';
import SearchJournal from '../src/components/pages/LibraryResearch/SearchJournal';

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
  { path: "/search-journal", element: <SearchJournal /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();