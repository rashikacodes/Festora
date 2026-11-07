import { useLocation, Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, Calendar, MapPin, User, Hash, ArrowRight, ListFilter } from 'lucide-react';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const registration = location.state?.registration;

  if (!registration) {
    return (
      <div className="event-detail-page">
        <div className="container">
          <div className="empty-state" style={{ paddingTop: '80px' }}>
            <h3>No Registration Found</h3>
            <p>Please register for an event first.</p>
            <Link to="/explore" className="btn btn-primary">Browse Events</Link>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return 'TBA';
    return new Date(dateStr).toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="event-detail-page">
      <div className="container">
        <div className="confirmation-card animate-scaleIn">
          <div className="confirmation-icon">
            <CheckCircle2 size={44} />
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '8px' }}>
            Registration Successful!
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Your registration has been confirmed. Please save your Registration ID for event entry.
          </p>

          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Registration ID
            </span>
            <div className="registration-id" style={{ marginTop: '4px' }}>
              {registration.id}
            </div>
          </div>

          <div className="confirmation-details">
            <div className="confirmation-detail-row">
              <span className="confirmation-detail-label">Participant Name</span>
              <span className="confirmation-detail-value">{registration.name}</span>
            </div>
            <div className="confirmation-detail-row">
              <span className="confirmation-detail-label">Email</span>
              <span className="confirmation-detail-value">{registration.email}</span>
            </div>
            <div className="confirmation-detail-row">
              <span className="confirmation-detail-label">Mobile</span>
              <span className="confirmation-detail-value">{registration.phone}</span>
            </div>
            <div className="confirmation-detail-row">
              <span className="confirmation-detail-label">Selected Event</span>
              <span className="confirmation-detail-value" style={{ color: 'var(--accent-purple)' }}>
                {registration.eventTitle}
              </span>
            </div>
            <div className="confirmation-detail-row">
              <span className="confirmation-detail-label">Event Date</span>
              <span className="confirmation-detail-value">{formatDate(registration.eventDate)}</span>
            </div>
            <div className="confirmation-detail-row">
              <span className="confirmation-detail-label">Venue</span>
              <span className="confirmation-detail-value">{registration.eventVenue}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/explore" className="btn btn-primary">
              Explore More Events <ArrowRight size={18} />
            </Link>
            <Link to="/my-registrations" className="btn btn-secondary">
              <ListFilter size={18} /> View My Registrations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
