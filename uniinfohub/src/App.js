// App.js
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/pages/landing/Landing';
import Transport from './components/pages/landing/Transport';
import GSSProvider from './components/pages/Health/GSSProvider';
import GetGSC from './components/pages/Health/GetGSC';
import BeforeGettingGSC from './components/pages/Health/BeforeGettingGSC';
import OptOutHealth from './components/pages/Health/OptOutHealth';

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
      </Routes>
    </div>
  );
}

export default App;
