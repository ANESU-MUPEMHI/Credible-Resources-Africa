import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthWizard from './components/AuthWizard';

import Home from './pages/Home';
import Services from './pages/Services';
import ProspectingForm from './pages/ProspectingForm';
import EquipmentSales from './pages/EquipmentSales';
import Checkout from './pages/Checkout';
import ProfileDashboard from './pages/ProfileDashboard';

// Custom hook to trigger auth wizard via URL search params
const AuthTrigger = ({ setIsAuthOpen }) => {
  const location = useLocation();
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('auth') === 'true') {
      setIsAuthOpen(true);
      // Remove it from URL without reloading
      window.history.replaceState(null, '', location.pathname);
    }
  }, [location, setIsAuthOpen]);

  return null;
};

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AuthTrigger setIsAuthOpen={setIsAuthOpen} />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar onOpenAuth={() => setIsAuthOpen(true)} />
        
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/equipment-sales" element={<EquipmentSales />} />
            <Route path="/prospecting-licence" element={<ProspectingForm />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<ProfileDashboard />} />
          </Routes>
        </main>
        
        <Footer />
        
        <AuthWizard isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
