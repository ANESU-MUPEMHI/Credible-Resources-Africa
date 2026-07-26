import React from 'react';
import { Pickaxe, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--dark-bg-card)', padding: '4rem 0 2rem 0', borderTop: '1px solid var(--border-color)', marginTop: 'auto' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.25rem', color: '#fff', marginBottom: '1rem' }}>
              <div style={{ background: 'var(--brand-gold)', padding: '0.5rem', borderRadius: '8px', color: '#0f1115' }}>
                <Pickaxe size={24} />
              </div>
              Credible Resources
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              A mining and consulting powerhouse holding a significant portfolio of key minerals, delivering premium services across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s ease' }} className="hover:text-gold">Home</Link></li>
              <li><Link to="/services" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s ease' }} className="hover:text-gold">Services</Link></li>
              <li><Link to="/prospecting-licence" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s ease' }} className="hover:text-gold">Licence Application</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Contact Us</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <Phone size={16} color="var(--brand-gold)" /> +27 61 183 4554
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <Mail size={16} color="var(--brand-gold)" /> info@crediblemining.com
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <MapPin size={16} color="var(--brand-gold)" style={{ flexShrink: 0, marginTop: '0.2rem' }} /> 
                11 Morton Jaffray, Eastlea, Harare, Zimbabwe
              </li>
            </ul>
          </div>

        </div>

        <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Credible Resources Africa. All Rights Reserved.
        </div>
      </div>

      <style>{`
        .hover\\:text-gold:hover {
          color: var(--brand-gold) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
