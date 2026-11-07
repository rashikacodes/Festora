import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="event-detail-page">
      <div className="container">
        <div className="page-header" style={{ paddingTop: '20px' }}>
          <h1>Contact <span className="gradient-text">Us</span></h1>
          <p>Have questions about Festora or want to organize an event? Reach out to us!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <Mail size={32} />
            <h3>Email</h3>
            <p>support@festora.kiit.ac.in</p>
          </div>
          <div className="contact-card">
            <Phone size={32} />
            <h3>Phone</h3>
            <p>+91 (0674) 2725113</p>
          </div>
          <div className="contact-card">
            <MapPin size={32} />
            <h3>Campus Location</h3>
            <p>Student Activity Centre, KIIT Campus 3, Bhubaneswar</p>
          </div>
        </div>

        <div className="form-card" style={{ marginTop: '48px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '20px', textAlign: 'center' }}>
            Send Us a Message
          </h2>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px', color: '#48BB78' }}>
              <h3>Thank you for reaching out!</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="form-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows="4"
                  className="form-input"
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ resize: 'vertical' }}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '12px' }}>
                <Send size={18} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
