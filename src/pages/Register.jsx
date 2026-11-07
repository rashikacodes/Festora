import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import events from '../data/events';
import { validateForm } from '../utils/validation';
import { saveRegistration, isDuplicateRegistration, generateRegistrationId } from '../utils/storage';

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preSelectedEventId = searchParams.get('event');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventId: preSelectedEventId || '',
  });

  const [errors, setErrors] = useState({});
  const [duplicateError, setDuplicateError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preSelectedEventId) {
      setFormData((prev) => ({ ...prev, eventId: preSelectedEventId }));
    }
  }, [preSelectedEventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear inline error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (duplicateError) {
      setDuplicateError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDuplicateError('');

    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Check duplicate registration
    const selectedEvent = events.find((ev) => String(ev.id) === String(formData.eventId));
    if (isDuplicateRegistration(formData.email.trim(), formData.eventId)) {
      setDuplicateError('You have already registered for this event with this email address.');
      return;
    }

    setIsSubmitting(true);

    const registrationRecord = {
      id: generateRegistrationId(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      eventId: formData.eventId,
      eventTitle: selectedEvent ? selectedEvent.title : 'Campus Event',
      eventDate: selectedEvent ? selectedEvent.date : '',
      eventVenue: selectedEvent ? selectedEvent.venue : '',
      registeredAt: new Date().toISOString(),
    };

    saveRegistration(registrationRecord);

    setTimeout(() => {
      navigate('/confirmation', { state: { registration: registrationRecord } });
    }, 400);
  };

  return (
    <div className="event-detail-page">
      <div className="container">
        <div className="page-header" style={{ paddingTop: '20px' }}>
          <h1>Event <span className="gradient-text">Registration</span></h1>
          <p>Secure your spot at Festora campus events in just a few clicks</p>
        </div>

        <div className="form-card animate-fadeInUp">
          {duplicateError && (
            <div style={{
              background: 'rgba(255, 87, 87, 0.1)',
              border: '1px solid rgba(255, 87, 87, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '12px 16px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#FF5757'
            }}>
              <AlertCircle size={20} />
              <span>{duplicateError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder="e.g. Rashika Shah"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <div className="form-error">
                  <AlertCircle size={14} />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="e.g. rashika@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="form-error">
                  <AlertCircle size={14} />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">Mobile Number (Indian) *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={`form-input ${errors.phone ? 'error' : ''}`}
                placeholder="e.g. 9876543210 or +91 9876543210"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <div className="form-error">
                  <AlertCircle size={14} />
                  <span>{errors.phone}</span>
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="eventId">Select Event *</label>
              <select
                id="eventId"
                name="eventId"
                className={`form-select ${errors.eventId ? 'error' : ''}`}
                value={formData.eventId}
                onChange={handleChange}
              >
                <option value="">-- Choose an event --</option>
                {events.map((ev) => (
                  <option key={ev.id} value={ev.id}>
                    {ev.title} ({ev.category} - {ev.registrationFee})
                  </option>
                ))}
              </select>
              {errors.eventId && (
                <div className="form-error">
                  <AlertCircle size={14} />
                  <span>{errors.eventId}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: '12px' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing Registration...' : 'Complete Registration'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
