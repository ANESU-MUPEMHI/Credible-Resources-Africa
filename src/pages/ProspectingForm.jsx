import React, { useState } from 'react';
import { FileText, CheckCircle, ChevronRight, UploadCloud } from 'lucide-react';

const ProspectingForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    licenceType: 'Ordinary',
    companyName: '',
    partners: [{ name: '', idNo: '', nationality: '', residence: '' }],
    postalAddress: '',
    phone: '',
    email: '',
    agentName: '',
    agentAddress: ''
  });

  const handlePartnerChange = (index, field, value) => {
    const newPartners = [...formData.partners];
    newPartners[index][field] = value;
    setFormData({ ...formData, partners: newPartners });
  };

  const addPartner = () => {
    if (formData.partners.length < 6) {
      setFormData({ ...formData, partners: [...formData.partners, { name: '', idNo: '', nationality: '', residence: '' }] });
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would normally send data to a backend
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div style={{ paddingTop: '120px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <div className="glass-panel" style={{ padding: '4rem 2rem' }}>
            <div style={{ display: 'inline-flex', background: 'rgba(22, 190, 69, 0.1)', padding: '1.5rem', borderRadius: '50%', color: '#16BE45', marginBottom: '1.5rem' }}>
              <CheckCircle size={48} />
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Application Submitted!</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Your Prospecting Licence Application for <strong>{formData.companyName}</strong> has been received securely. Our compliance team will review the documentation and contact you shortly.
            </p>
            <button onClick={() => window.location.reload()} className="btn btn-primary">Submit Another Application</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--brand-gold)', marginBottom: '0.5rem' }}>Prospecting Licence Application</h1>
          <p style={{ color: 'var(--text-muted)' }}>Digital submission for Companies, Syndicates, or Partnerships.</p>
        </div>

        {/* Progress Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', background: 'var(--border-color)', zIndex: -1 }} />
          {[1, 2, 3].map(num => (
            <div key={num} style={{ 
              width: '40px', height: '40px', borderRadius: '50%', 
              background: step >= num ? 'var(--brand-gold)' : 'var(--dark-bg-card)',
              color: step >= num ? '#000' : 'var(--text-muted)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 'bold', border: `2px solid ${step >= num ? 'var(--brand-gold)' : 'var(--border-color)'}`
            }}>
              {num}
            </div>
          ))}
        </div>

        <div className="glass-panel" style={{ padding: '2.5rem' }}>
          <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
            
            {/* STEP 1: Company Info */}
            {step === 1 && (
              <div style={{ animation: 'fadeUp 0.3s ease-out' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={24} color="var(--brand-gold)"/> 1. General Information
                </h3>
                
                <div className="form-group">
                  <label className="form-label">Licence Type</label>
                  <select className="form-input" value={formData.licenceType} onChange={e => setFormData({...formData, licenceType: e.target.value})}>
                    <option value="Ordinary">Ordinary Prospecting Licence (ZWL$ 6,375.00)</option>
                    <option value="Special">Special Prospecting Licence (ZWL$ 47,855.00)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Full Name of Company / Trade Name of Syndicate</label>
                  <input type="text" className="form-input" required value={formData.companyName} onChange={e => setFormData({...formData, companyName: e.target.value})} placeholder="e.g. Credible Resources Africa (Pvt) Ltd" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-input" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Telephone Number</label>
                    <input type="tel" className="form-input" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Registered Postal Address</label>
                  <textarea className="form-input" rows="3" required value={formData.postalAddress} onChange={e => setFormData({...formData, postalAddress: e.target.value})}></textarea>
                </div>
              </div>
            )}

            {/* STEP 2: Directors / Partners */}
            {step === 2 && (
              <div style={{ animation: 'fadeUp 0.3s ease-out' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={24} color="var(--brand-gold)"/> 2. Directors & Partners
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Note: Not more than 6 persons may be registered as joint holders. Must be at least 18 years of age.</p>

                {formData.partners.map((partner, index) => (
                  <div key={index} style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--brand-gold)' }}>Partner / Director {index + 1}</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-input" required value={partner.name} onChange={e => handlePartnerChange(index, 'name', e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">I.D Number</label>
                        <input type="text" className="form-input" required value={partner.idNo} onChange={e => handlePartnerChange(index, 'idNo', e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Nationality</label>
                        <input type="text" className="form-input" required value={partner.nationality} onChange={e => handlePartnerChange(index, 'nationality', e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Country of Residence</label>
                        <input type="text" className="form-input" required value={partner.residence} onChange={e => handlePartnerChange(index, 'residence', e.target.value)} />
                      </div>
                    </div>
                  </div>
                ))}

                {formData.partners.length < 6 && (
                  <button type="button" onClick={addPartner} className="btn btn-glass" style={{ width: '100%', borderStyle: 'dashed' }}>
                    + Add Another Partner
                  </button>
                )}
              </div>
            )}

            {/* STEP 3: Accredited Agent & Documents */}
            {step === 3 && (
              <div style={{ animation: 'fadeUp 0.3s ease-out' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={24} color="var(--brand-gold)"/> 3. Accredited Agent & Uploads
                </h3>
                
                <div className="form-group">
                  <label className="form-label">Accredited Agent Name</label>
                  <input type="text" className="form-input" required value={formData.agentName} onChange={e => setFormData({...formData, agentName: e.target.value})} placeholder="e.g. Leopold Mapfirakupa" />
                </div>
                <div className="form-group">
                  <label className="form-label">Agent Address</label>
                  <textarea className="form-input" rows="2" required value={formData.agentAddress} onChange={e => setFormData({...formData, agentAddress: e.target.value})}></textarea>
                </div>

                <div style={{ marginTop: '2rem', padding: '1.5rem', border: '1px dashed var(--brand-gold)', borderRadius: '8px', textAlign: 'center', background: 'rgba(198, 168, 124, 0.05)' }}>
                  <UploadCloud size={32} color="var(--brand-gold)" style={{ margin: '0 auto 1rem auto' }} />
                  <h4 style={{ marginBottom: '0.5rem' }}>Upload Required Signatures & Resolutions</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>Please upload the signed Certificate of Appointment and Directors Resolution (PDF/JPG).</p>
                  <input type="file" id="file-upload" style={{ display: 'none' }} />
                  <label htmlFor="file-upload" className="btn btn-glass" style={{ cursor: 'pointer' }}>
                    Browse Files
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
              {step > 1 ? (
                <button type="button" onClick={prevStep} className="btn btn-glass">Back</button>
              ) : <div></div>}
              
              <button type="submit" className="btn btn-primary">
                {step === 3 ? 'Submit Application' : (
                  <>Next Step <ChevronRight size={18} style={{ marginLeft: '0.5rem' }}/></>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ProspectingForm;
