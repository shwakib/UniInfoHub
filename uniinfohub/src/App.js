// App.js
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/pages/landing/Landing';
import Transport from './components/pages/landing/Transport';
import GSSProvider from './components/pages/Health/GSSProvider';
import GetGSC from './components/pages/Health/GetGSC';
import BeforeGettingGSC from './components/pages/Health/BeforeGettingGSC';
import OptOutHealth from './components/pages/Health/OptOutHealth';
import HowAndWhereToPrint from './components/pages/LibraryResearch/HowAndWhereToPrint';
import LoadUwinCard from './components/pages/LibraryResearch/LoadUwinCard';
import BookRoom from './components/pages/LibraryResearch/BookRoom';
import SearchJournal from './components/pages/LibraryResearch/SearchJournal';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/gss-provider" element={<GSSProvider />} />
        <Route path="/get-gsc-card" element={<GetGSC />} />
        <Route path="/before-getting-gsc" element={<BeforeGettingGSC />} />
        <Route path="/opt-out-health" element={<OptOutHealth />} />
        <Route path="/how-to-print" element={<HowAndWhereToPrint />} />
        <Route path="/load-uwincard" element={<LoadUwinCard />} />
        <Route path="/book-room" element={<BookRoom />} />
        <Route path="/search-journal" element={<SearchJournal />} />
      </Routes>
    </div>
  );
}

export default App;
