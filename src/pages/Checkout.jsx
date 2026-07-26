import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { CreditCard, CheckCircle, Smartphone, Globe, ExternalLink } from 'lucide-react';

const Checkout = () => {
  const { user, pendingPurchase, addOrder, setPendingPurchase } = useAppContext();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('credit_card');

  useEffect(() => {
    if (!user) {
      navigate('/?auth=true');
    } else if (!pendingPurchase && !success) {
      navigate('/equipment-sales');
    }
  }, [user, pendingPurchase, success, navigate]);

  const handlePayment = (e) => {
    if (e) e.preventDefault();
    setIsProcessing(true);
    
    // Mock Payment Gateway processing delay
    setTimeout(() => {
      addOrder({
        ...pendingPurchase,
        paymentMethod: paymentMethod // Store the payment method used
      });
      setPendingPurchase(null);
      setIsProcessing(false);
      setSuccess(true);
      
      // Redirect to profile dashboard after seeing success message
      setTimeout(() => {
        navigate('/profile');
      }, 3000);
    }, 2000);
  };

  if (!pendingPurchase && !success) return null;

  const paymentOptions = [
    { id: 'credit_card', name: 'Credit Card', icon: <CreditCard size={24} /> },
    { id: 'stripe', name: 'Stripe', icon: <Globe size={24} /> },
    { id: 'paypal', name: 'PayPal', icon: <Globe size={24} /> },
    { id: 'paystack', name: 'Paystack', icon: <Globe size={24} /> },
    { id: 'payfast', name: 'Payfast', icon: <Globe size={24} /> },
    { id: 'mukuru', name: 'Mukuru', icon: <Smartphone size={24} /> },
  ];

  return (
    <div style={{ padding: '6rem 2rem 2rem', maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
      
      {success ? (
        <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem', width: '100%' }}>
          <CheckCircle size={64} color="#16BE45" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>Payment Successful!</h2>
          <p style={{ color: '#aaa' }}>Your order has been placed using {paymentOptions.find(p => p.id === paymentMethod)?.name}. Redirecting to your dashboard...</p>
        </div>
      ) : (
        <div className="glass-panel" style={{ width: '100%', padding: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--brand-gold)', marginBottom: '2rem' }}>Secure Checkout</h2>
          
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', marginBottom: '2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <img src={pendingPurchase.image} alt={pendingPurchase.name} style={{ width: '120px', height: '90px', objectFit: 'cover', borderRadius: '4px' }} />
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#fff' }}>{pendingPurchase.name}</h3>
              <p style={{ color: '#aaa', margin: '0.3rem 0 0 0' }}>{pendingPurchase.category}</p>
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--brand-gold)' }}>
              ${pendingPurchase.price.toLocaleString()}
            </div>
          </div>

          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
            Select Payment Method
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
            gap: '1rem', 
            marginBottom: '2.5rem' 
          }}>
            {paymentOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setPaymentMethod(option.id)}
                style={{
                  background: paymentMethod === option.id ? 'rgba(198, 168, 124, 0.15)' : 'rgba(0,0,0,0.2)',
                  border: `2px solid ${paymentMethod === option.id ? 'var(--brand-gold)' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: '8px',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: paymentMethod === option.id ? 'var(--brand-gold)' : '#aaa',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {option.icon}
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{option.name}</span>
              </button>
            ))}
          </div>

          {paymentMethod === 'credit_card' ? (
            <form onSubmit={handlePayment} style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ margin: '0 0 1.5rem 0', color: '#fff' }}>Credit Card Details</h4>
              
              <div className="form-group">
                <label className="form-label">Name on Card</label>
                <input type="text" className="form-input" placeholder={user?.name} required />
              </div>
              
              <div className="form-group">
                <label className="form-label">Card Number</label>
                <input type="text" className="form-input" placeholder="XXXX XXXX XXXX XXXX" required />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Expiry (MM/YY)</label>
                  <input type="text" className="form-input" placeholder="MM/YY" required />
                </div>
                <div className="form-group">
                  <label className="form-label">CVC</label>
                  <input type="text" className="form-input" placeholder="123" required />
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1.5rem', padding: '1rem', fontSize: '1.1rem' }} disabled={isProcessing}>
                {isProcessing ? 'Processing...' : `Pay $${pendingPurchase.price.toLocaleString()}`}
              </button>
            </form>
          ) : (
            <div style={{ 
              background: 'rgba(255,255,255,0.02)', 
              padding: '3rem 2rem', 
              borderRadius: '12px', 
              border: '1px solid rgba(255,255,255,0.05)',
              textAlign: 'center'
            }}>
              <ExternalLink size={48} color="var(--brand-gold)" style={{ opacity: 0.5, marginBottom: '1rem' }} />
              <h4 style={{ margin: '0 0 1rem 0', color: '#fff', fontSize: '1.4rem' }}>
                Redirecting to {paymentOptions.find(p => p.id === paymentMethod)?.name}
              </h4>
              <p style={{ color: '#aaa', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
                You will be securely redirected to {paymentOptions.find(p => p.id === paymentMethod)?.name} to complete your purchase of <strong>${pendingPurchase.price.toLocaleString()}</strong>.
              </p>
              
              <button 
                type="button" 
                onClick={() => handlePayment()} 
                className="btn-primary" 
                style={{ padding: '1rem 3rem', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }} 
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Proceed to ${paymentOptions.find(p => p.id === paymentMethod)?.name}`}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkout;
