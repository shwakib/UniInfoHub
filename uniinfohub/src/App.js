import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/pages/landing/Landing';
import GSSProvider from './components/pages/GSSProvider';
import GetGSC from './components/pages/GetGSC';
import BeforeGettingGSC from './components/pages/BeforeGettingGSC';
import OptOutHealth from './components/pages/OptOutHealth';

function App() {
  return (
    <Router>
      <div className="App">
    
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/gss-provider" element={<GSSProvider />} />
          <Route path="/get-gsc-card" element={<GetGSC />} />
          <Route path="/before-getting-gsc" element={<BeforeGettingGSC />} />
          <Route path="/opt-out-health" element={<OptOutHealth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
