import React, { useState, useEffect } from 'react';
import { Share, PlusSquare, X } from 'lucide-react';

const IosInstallPrompt = () => {
  const [isIos, setIsIos] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Detect iOS Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    const isStandalone = window.navigator.standalone === true;
    
    // If it's iOS and not already installed, show prompt
    if (isIosDevice && !isStandalone) {
      // Optional: check if we've shown it before using localStorage
      const hasSeenPrompt = localStorage.getItem('iosInstallPromptSeen');
      if (!hasSeenPrompt) {
        setIsIos(true);
        setShowPrompt(true);
      }
    }
  }, []);

  const closePrompt = () => {
    setShowPrompt(false);
    localStorage.setItem('iosInstallPromptSeen', 'true');
  };

  if (!showPrompt) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '400px',
      background: 'rgba(24, 27, 33, 0.95)',
      backdropFilter: 'blur(10px)',
      border: '1px solid var(--brand-gold)',
      borderRadius: '12px',
      padding: '1rem',
      zIndex: 9999,
      boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
      <button 
        onClick={closePrompt}
        style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
      >
        <X size={16} />
      </button>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src={`${import.meta.env.BASE_URL}pwa-512x512.jpg`} alt="App Icon" style={{ width: '48px', height: '48px', borderRadius: '10px' }} />
        <div>
          <h4 style={{ margin: 0, color: 'var(--brand-gold)', fontSize: '1rem' }}>Install Credible App</h4>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Get quick access from your home screen.</p>
        </div>
      </div>
      
      <div style={{ fontSize: '0.85rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '8px' }}>
        Tap <Share size={16} style={{ color: '#007aff' }} /> and then <PlusSquare size={16} style={{ color: '#007aff' }} /> <strong>Add to Home Screen</strong>
      </div>
    </div>
  );
};

export default IosInstallPrompt;
