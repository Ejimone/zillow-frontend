import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Sell from './pages/Sell';
import Mortgage from './pages/Mortgage';
import FindAgent from './pages/FindAgent';
import ManageRentals from './pages/ManageRentals';
import Advertise from './pages/Advertise';
import Help from './pages/Help';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/mortgage" element={<Mortgage />} />
          <Route path="/find-agent" element={<FindAgent />} />
          <Route path="/manage-rentals" element={<ManageRentals />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
