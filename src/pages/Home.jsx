import React from 'react';
import { ArrowRight, ChevronRight, HardHat, Building2, TrendingUp, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: '100vh',
        minHeight: '600px',
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '80px',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2
        }} />
        
        {/* Gradient Overlay for Readability */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to right, rgba(15, 17, 21, 0.9) 0%, rgba(15, 17, 21, 0.4) 60%, rgba(15, 17, 21, 0.1) 100%)',
          zIndex: -1
        }} />

        <div className="container">
          <div style={{ maxWidth: '700px', animation: 'fadeUp 0.8s ease-out' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(198, 168, 124, 0.15)', padding: '0.5rem 1rem', borderRadius: '50px', color: 'var(--brand-gold)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem', border: '1px solid rgba(198, 168, 124, 0.3)' }}>
              <Gem size={16} /> Premium Mining Services
            </div>
            
            <h1 className="heading-hero">
              Elevating African Mining & Resources.
            </h1>
            
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px' }}>
              Credible Resources Africa is a powerhouse holding a significant portfolio of strategic minerals. We bridge the gap between heavy-duty ground operations and high-rise corporate strategy.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/services" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Explore Services <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
              </Link>
              <Link to="/prospecting-licence" className="btn btn-glass" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Apply for Licence
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats / Trust Indicators */}
      <section style={{ padding: '4rem 0', background: 'var(--dark-bg-card)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--brand-gold)', marginBottom: '0.5rem' }}>15+</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Years Experience</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--brand-gold)', marginBottom: '0.5rem' }}>50M+</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Tons Excavated</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--brand-gold)', marginBottom: '0.5rem' }}>Strategic</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Minerals (Li, Cu, Co)</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--brand-gold)', marginBottom: '0.5rem' }}>100%</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Fiduciary Oversight</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Core Competencies</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>From grassroots exploration to executive boardroom strategy, we manage the entire mining lifecycle.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Feature 1 */}
            <div className="glass-panel" style={{ padding: '2.5rem', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ background: 'rgba(198, 168, 124, 0.1)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-gold)', marginBottom: '1.5rem' }}>
                <HardHat size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Ground Operations</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Heavy-duty excavation, site management, and rigorous safety protocols executed by seasoned professionals.
              </p>
              <Link to="/services" style={{ color: 'var(--brand-gold)', display: 'inline-flex', alignItems: 'center', fontWeight: 600 }}>
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel" style={{ padding: '2.5rem', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ background: 'rgba(198, 168, 124, 0.1)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-gold)', marginBottom: '1.5rem' }}>
                <Building2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Corporate Consulting</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                High-rise strategy. We navigate complex regulatory environments and structure lucrative partnerships.
              </p>
              <Link to="/services" style={{ color: 'var(--brand-gold)', display: 'inline-flex', alignItems: 'center', fontWeight: 600 }}>
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel" style={{ padding: '2.5rem', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ background: 'rgba(198, 168, 124, 0.1)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-gold)', marginBottom: '1.5rem' }}>
                <TrendingUp size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Asset Management</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Fiduciary oversight of strategic mineral portfolios, ensuring maximum yield and legal compliance.
              </p>
              <Link to="/services" style={{ color: 'var(--brand-gold)', display: 'inline-flex', alignItems: 'center', fontWeight: 600 }}>
                Learn More <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Home;
