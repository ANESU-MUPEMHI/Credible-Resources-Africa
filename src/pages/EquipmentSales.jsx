import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { ShoppingCart, Check } from 'lucide-react';

const equipmentList = [
  {
    id: 'EQ-101',
    name: 'CAT 320 Hydraulic Excavator',
    price: 150000,
    category: 'Earthmoving',
    description: 'High-performance hydraulic excavator suitable for heavy-duty mining and trenching.',
    image: 'https://images.unsplash.com/photo-1579549553597-268e36495b4e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'EQ-102',
    name: 'Komatsu D155A Crawler Dozer',
    price: 210000,
    category: 'Earthmoving',
    description: 'Powerful dozer designed for ripping hard rock and bulk material handling.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'EQ-103',
    name: 'Sandvik D45KS Rotary Drill Rig',
    price: 340000,
    category: 'Drilling',
    description: 'Diesel-powered crawler-mounted drill rig perfect for blast hole drilling.',
    image: 'https://images.unsplash.com/photo-1587840171670-8b850147752e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'EQ-104',
    name: 'Metso Nordberg C120 Jaw Crusher',
    price: 185000,
    category: 'Crushing',
    description: 'Reliable jaw crusher for primary reduction of hard and abrasive ores.',
    image: 'https://images.unsplash.com/photo-1580983554181-43f1c1fdf4d5?q=80&w=800&auto=format&fit=crop'
  }
];

const EquipmentSales = () => {
  const navigate = useNavigate();
  const { user, setPendingPurchase } = useAppContext();

  const handlePurchase = (item) => {
    setPendingPurchase(item);
    if (!user) {
      // Need to open AuthWizard in App.jsx via navigation or global state
      // For simplicity, we can navigate to a mock route or signal App.jsx
      // Let's use a query param to trigger auth wizard in App.jsx
      navigate('?auth=true');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div style={{ padding: '6rem 2rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ color: 'var(--brand-gold)', fontSize: '3rem', marginBottom: '1rem' }}>Equipment Sales</h1>
        <p style={{ color: '#aaa', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Browse our catalog of premium, heavy-duty mining equipment available for purchase.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {equipmentList.map(item => (
          <div key={item.id} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
            <div style={{ 
              height: '200px', 
              backgroundImage: `url(${item.image})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }} />
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>{item.name}</h3>
                <span style={{ 
                  background: 'rgba(198, 168, 124, 0.2)', 
                  color: 'var(--brand-gold)', 
                  padding: '0.2rem 0.5rem', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem' 
                }}>
                  {item.category}
                </span>
              </div>
              <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>{item.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--brand-gold)' }}>
                  ${item.price.toLocaleString()}
                </div>
                <button 
                  className="btn-primary" 
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem' }}
                  onClick={() => handlePurchase(item)}
                >
                  <ShoppingCart size={18} />
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentSales;
