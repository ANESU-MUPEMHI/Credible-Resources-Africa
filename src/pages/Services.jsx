import React from 'react';
import { Pickaxe, Shield, FileSearch, Search, Truck, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Search size={32} />,
      title: "Exploration & Prospecting",
      description: "Comprehensive geological surveys and physical prospecting for strategic minerals including copper, lithium, and cobalt. We handle the dirty work to uncover true asset potential.",
      price: "From $1,200 / survey"
    },
    {
      icon: <FileSearch size={32} />,
      title: "Licence Digitization & Processing",
      description: "Navigate the bureaucracy with ease. We manage the application, pegging certificates, and digital registration of your mining claims to ensure iron-clad legal standing.",
      price: "View Form Online"
    },
    {
      icon: <Shield size={32} />,
      title: "Fiduciary Asset Oversight",
      description: "For diaspora and international investors: We provide independent, boots-on-the-ground intelligence and site audits so you never have to guess what's happening at your mine.",
      price: "Custom Retainer"
    },
    {
      icon: <Pickaxe size={32} />,
      title: "Contract Mining Operations",
      description: "Full-scale excavation and extraction services. We bring the heavy machinery and the expertise to pull resources efficiently and safely.",
      price: "Tonnage Based"
    },
    {
      icon: <Truck size={32} />,
      title: "Logistics & Supply Chain",
      description: "Moving ore from deep pits to global markets. We optimize the transport, export documentation, and supply chain logistics for raw and processed minerals.",
      price: "Route Dependent"
    },
    {
      icon: <Leaf size={32} />,
      title: "Environmental Compliance",
      description: "Ensure your operations meet EMA standards. We conduct environmental impact assessments and implement sustainable mining practices.",
      price: "From $800 / audit"
    }
  ];

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
      
      {/* Header */}
      <section style={{ textAlign: 'center', padding: '4rem 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--brand-gold)' }}>Our Premium Services</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            From hands-on excavation in the dust to navigating legal frameworks in high-rise boardrooms, we offer end-to-end mining consulting and operational services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {services.map((service, index) => (
              <div key={index} className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: 'var(--brand-gold)', marginBottom: '1.5rem' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flexGrow: 1, lineHeight: 1.6 }}>
                  {service.description}
                </p>
                <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{service.price}</span>
                  {service.title.includes("Licence") ? (
                    <Link to="/prospecting-licence" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Apply Now</Link>
                  ) : (
                    <button className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Inquire</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
