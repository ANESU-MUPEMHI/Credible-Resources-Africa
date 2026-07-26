import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ShieldCheck } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const AuthWizard = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('login'); // 'login' or 'register'
  const { login, pendingPurchase } = useAppContext();
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    country: '',
    province: '',
    address: '',
    telephone: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, we would validate and call API here.
    // For now, we mock a successful login/register.
    
    // We only take the name and email, and other fields for profile
    const userProfile = {
      name: formData.name || formData.email.split('@')[0],
      email: formData.email,
      country: formData.country,
      province: formData.province,
      address: formData.address,
      telephone: formData.telephone
    };

    login(userProfile);
    onClose();

    // Check if we were trying to purchase something
    if (pendingPurchase) {
      navigate('/checkout');
    } else {
      navigate('/profile');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: '1rem',
      overflowY: 'auto'
    }}>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
        }}
      />

      {/* Modal */}
      <div className="glass-panel" style={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        padding: '2.5rem',
        animation: 'modalSlideIn 0.3s ease-out',
        margin: 'auto'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', background: 'rgba(198, 168, 124, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--brand-gold)', marginBottom: '1rem' }}>
            <ShieldCheck size={32} />
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            {step === 'login' ? 'Client Portal Access' : 'Create Account'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {step === 'login' 
              ? 'Securely access your mining dashboard and track orders.'
              : 'Register to manage your mining portfolio, purchases, and licensing processes.'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 'register' && (
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" name="name" className="form-input" placeholder="e.g. John Doe" value={formData.name} onChange={handleChange} required />
            </div>
          )}
          
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" name="email" className="form-input" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-input" placeholder="••••••••" value={formData.password} onChange={handleChange} required />
          </div>

          {step === 'register' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Country</label>
                <input type="text" name="country" className="form-input" placeholder="e.g. Zimbabwe" value={formData.country} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">Region (Province)</label>
                <input type="text" name="province" className="form-input" placeholder="e.g. Mashonaland" value={formData.province} onChange={handleChange} required />
              </div>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Address</label>
                <input type="text" name="address" className="form-input" placeholder="123 Mining Ave" value={formData.address} onChange={handleChange} required />
              </div>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Telephone Number</label>
                <input type="tel" name="telephone" className="form-input" placeholder="+263 77 123 4567" value={formData.telephone} onChange={handleChange} required />
              </div>
            </div>
          )}

          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            {step === 'login' ? 'Sign In' : 'Complete Registration'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          {step === 'login' ? (
            <p>
              Don't have an account?{' '}
              <button onClick={() => setStep('register')} style={{ background:'none', border:'none', color:'var(--brand-gold)', fontWeight:600, cursor:'pointer' }}>
                Register here
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button onClick={() => setStep('login')} style={{ background:'none', border:'none', color:'var(--brand-gold)', fontWeight:600, cursor:'pointer' }}>
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalSlideIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default AuthWizard;
