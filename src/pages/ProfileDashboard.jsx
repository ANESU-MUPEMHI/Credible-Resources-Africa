import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { UserCircle, MapPin, Phone, Mail, LogOut, Trash2, Package, Shield, Globe, Map, CreditCard, ChevronRight } from 'lucide-react';

const ProfileDashboard = () => {
  const { user, orders, logout, deleteAccount } = useAppContext();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '80vh' }}>
        <h2 style={{ color: 'var(--brand-gold)', fontSize: '2rem' }}>Authentication Required</h2>
        <p style={{ color: '#aaa', marginTop: '1rem' }}>Please log in to access your secure client portal.</p>
        <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => navigate('/?auth=true')}>
          Go to Login
        </button>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDelete = () => {
    if(window.confirm('WARNING: Are you absolutely sure you want to delete your account? All order history and access will be permanently lost.')) {
      deleteAccount();
      navigate('/');
    }
  };

  return (
    <div style={{ padding: '6rem 2rem 4rem', maxWidth: '1400px', margin: '0 auto', minHeight: '100vh' }}>
      
      {/* Header Section */}
      <div style={{ marginBottom: '3rem', borderBottom: '1px solid rgba(198, 168, 124, 0.2)', paddingBottom: '2rem' }}>
        <h1 style={{ color: '#fff', fontSize: '2.5rem', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Shield color="var(--brand-gold)" size={36} /> Client Command Center
        </h1>
        <p style={{ color: '#aaa', fontSize: '1.1rem', margin: 0 }}>Manage your secure profile, track equipment orders, and oversee your operations.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 350px) 1fr', gap: '2.5rem', alignItems: 'start' }}>
        
        {/* Profile Sidebar */}
        <div className="glass-panel" style={{ padding: '2.5rem', position: 'sticky', top: '100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
              width: '140px', height: '140px', borderRadius: '50%', 
              background: 'linear-gradient(135deg, var(--brand-gold) 0%, transparent 100%)', 
              opacity: 0.3, filter: 'blur(10px)', zIndex: 0 
            }} />
            <img 
              src={user.avatar} 
              alt="Profile" 
              style={{ width: '130px', height: '130px', borderRadius: '50%', border: '4px solid rgba(198, 168, 124, 0.5)', position: 'relative', zIndex: 1, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
            />
            <h2 style={{ margin: '1.5rem 0 0 0', fontSize: '1.8rem', color: '#fff', fontWeight: 700 }}>{user.name}</h2>
            <span style={{ 
              display: 'inline-block', background: 'rgba(198, 168, 124, 0.1)', color: 'var(--brand-gold)', 
              padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, marginTop: '0.5rem', letterSpacing: '1px' 
            }}>
              VERIFIED CLIENT
            </span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'rgba(198,168,124,0.1)', padding: '0.6rem', borderRadius: '8px' }}>
                <Mail size={20} color="var(--brand-gold)" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Address</span>
                <span style={{ color: '#e0e0e0', fontWeight: 500 }}>{user.email}</span>
              </div>
            </div>

            {user.telephone && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(198,168,124,0.1)', padding: '0.6rem', borderRadius: '8px' }}>
                  <Phone size={20} color="var(--brand-gold)" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Telephone</span>
                  <span style={{ color: '#e0e0e0', fontWeight: 500 }}>{user.telephone}</span>
                </div>
              </div>
            )}

            {user.country && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(198,168,124,0.1)', padding: '0.6rem', borderRadius: '8px' }}>
                  <Globe size={20} color="var(--brand-gold)" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Country</span>
                  <span style={{ color: '#e0e0e0', fontWeight: 500 }}>{user.country}</span>
                </div>
              </div>
            )}

            {user.province && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(198,168,124,0.1)', padding: '0.6rem', borderRadius: '8px' }}>
                  <Map size={20} color="var(--brand-gold)" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Region / Province</span>
                  <span style={{ color: '#e0e0e0', fontWeight: 500 }}>{user.province}</span>
                </div>
              </div>
            )}

            {user.address && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ background: 'rgba(198,168,124,0.1)', padding: '0.6rem', borderRadius: '8px' }}>
                  <MapPin size={20} color="var(--brand-gold)" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Physical Address</span>
                  <span style={{ color: '#e0e0e0', fontWeight: 500, lineHeight: '1.4' }}>{user.address}</span>
                </div>
              </div>
            )}
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <button onClick={handleLogout} className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>
              <LogOut size={18} /> Secure Logout
            </button>
            <button onClick={handleDelete} className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(234, 134, 143, 0.1)', color: '#ea868f', border: '1px solid rgba(234, 134, 143, 0.2)' }}>
              <Trash2 size={18} /> Delete Account
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Active Orders Widget */}
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.6rem', color: 'var(--brand-gold)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Package size={28} /> Procurement Tracking
              </h2>
            </div>
            
            {orders.length === 0 ? (
              <div style={{ padding: '4rem 2rem', textAlign: 'center', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', border: '1px dashed rgba(255,255,255,0.1)' }}>
                <Package size={48} color="rgba(255,255,255,0.1)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#aaa', margin: '0 0 0.5rem 0' }}>No Active Orders</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>When you purchase equipment, you can track its delivery status here.</p>
                <button className="btn-primary" onClick={() => navigate('/equipment-sales')} style={{ marginTop: '1.5rem', padding: '0.5rem 1.5rem' }}>
                  Browse Equipment
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {orders.map(order => (
                  <div key={order.id} style={{ 
                    background: 'rgba(0,0,0,0.4)', 
                    border: '1px solid rgba(198, 168, 124, 0.1)',
                    padding: '1.5rem', 
                    borderRadius: '12px', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Status Indicator Bar */}
                    <div style={{ 
                      position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px',
                      background: order.status === 'Processing' ? '#f0ad4e' : '#16be45'
                    }} />

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
                      <img src={order.image} alt={order.name} style={{ width: '120px', height: '90px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }} />
                      
                      <div style={{ flexGrow: 1 }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem', color: '#fff' }}>{order.name}</h4>
                        <div style={{ display: 'flex', gap: '1.5rem', color: '#aaa', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><span style={{ color: '#666' }}>Order ID:</span> {order.id}</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><span style={{ color: '#666' }}>Date:</span> {new Date(order.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div style={{ textAlign: 'right', minWidth: '120px' }}>
                        <div style={{ color: '#888', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>Total Amount</div>
                        <div style={{ fontWeight: 'bold', color: 'var(--brand-gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                          ${order.price.toLocaleString()}
                        </div>
                        <span style={{ 
                          background: order.status === 'Processing' ? 'rgba(240, 173, 78, 0.1)' : 'rgba(22, 190, 69, 0.1)',
                          color: order.status === 'Processing' ? '#f0ad4e' : '#16be45',
                          border: `1px solid ${order.status === 'Processing' ? 'rgba(240, 173, 78, 0.3)' : 'rgba(22, 190, 69, 0.3)'}`,
                          padding: '0.4rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem'
                        }}>
                          {order.status === 'Processing' ? <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f0ad4e', display: 'inline-block' }}/> : <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16be45', display: 'inline-block' }}/>}
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Quick Actions / Info Card */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'rgba(198,168,124,0.1)', padding: '1rem', borderRadius: '12px', width: 'fit-content' }}>
                <CreditCard size={28} color="var(--brand-gold)" />
              </div>
              <h3 style={{ margin: '0.5rem 0 0 0', color: '#fff' }}>Payment Methods</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem', margin: 0, flexGrow: 1 }}>Manage your secure payment gateways and saved credit cards for future procurement.</p>
              <button style={{ background: 'none', border: 'none', color: 'var(--brand-gold)', display: 'flex', alignItems: 'center', gap: '0.3rem', padding: 0, cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem', width: 'fit-content' }}>
                Manage Billing <ChevronRight size={16} />
              </button>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'rgba(198,168,124,0.1)', padding: '1rem', borderRadius: '12px', width: 'fit-content' }}>
                <Shield size={28} color="var(--brand-gold)" />
              </div>
              <h3 style={{ margin: '0.5rem 0 0 0', color: '#fff' }}>Licensing & Forms</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem', margin: 0, flexGrow: 1 }}>Access your submitted prospecting licences and syndication agreements.</p>
              <button onClick={() => navigate('/prospecting-licence')} style={{ background: 'none', border: 'none', color: 'var(--brand-gold)', display: 'flex', alignItems: 'center', gap: '0.3rem', padding: 0, cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem', width: 'fit-content' }}>
                View Documents <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        /* Add some specific responsive tweaks just for this page */
        @media (max-width: 900px) {
          .glass-panel { padding: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
};

export default ProfileDashboard;
