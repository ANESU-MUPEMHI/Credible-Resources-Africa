import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Pickaxe, Menu, X, UserCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Navbar = ({ onOpenAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', color: '#fff' }}>
          <div style={{ background: 'var(--brand-gold)', padding: '0.5rem', borderRadius: '8px' }}>
            <Pickaxe size={24} color="#0f1115" />
          </div>
          <span style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '1px' }}>
            CREDIBLE
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/services" className={`nav-link ${isActive('/services')}`}>Services</Link>
          <Link to="/equipment-sales" className={`nav-link ${isActive('/equipment-sales')}`}>Store</Link>
          <Link to="/prospecting-licence" className={`nav-link ${isActive('/prospecting-licence')}`}>Forms</Link>
          
          {user ? (
            <Link to="/profile" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#fff', marginLeft: '1rem', background: 'rgba(255,255,255,0.1)', padding: '0.3rem 1rem 0.3rem 0.3rem', borderRadius: '30px' }}>
              <img src={user.avatar} alt="Profile" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
              <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{user.name.split(' ')[0]}</span>
            </Link>
          ) : (
            <button 
              className="btn-primary" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem' }}
              onClick={onOpenAuth}
            >
              <UserCircle size={20} />
              Client Portal
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent', border: 'none', color: '#fff' }}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(15, 17, 21, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <Link to="/" onClick={closeMenu} className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/services" onClick={closeMenu} className={`nav-link ${isActive('/services')}`}>Services</Link>
          <Link to="/equipment-sales" onClick={closeMenu} className={`nav-link ${isActive('/equipment-sales')}`}>Store</Link>
          <Link to="/prospecting-licence" onClick={closeMenu} className={`nav-link ${isActive('/prospecting-licence')}`}>Forms</Link>
          
          {user ? (
             <Link to="/profile" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: '#fff', marginTop: '1rem' }}>
               <img src={user.avatar} alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
               <span>My Dashboard</span>
             </Link>
          ) : (
            <button 
              className="btn-primary" 
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}
              onClick={() => { closeMenu(); onOpenAuth(); }}
            >
              <UserCircle size={20} />
              Client Portal
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
