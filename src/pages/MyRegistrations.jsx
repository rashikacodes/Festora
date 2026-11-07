import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Ticket, Calendar, MapPin, User, ArrowRight, Trash2 } from 'lucide-react';
import { getRegistrations } from '../utils/storage';

const MyRegistrations = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    setRegistrations(getRegistrations());
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return 'TBA';
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="event-detail-page">
      <div className="container">
        <div className="page-header" style={{ paddingTop: '20px' }}>
          <h1>My <span className="gradient-text">Registrations</span></h1>
          <p>View and manage all events you have signed up for</p>
        </div>

        {registrations.length > 0 ? (
          <div className="registrations-list">
            {registrations.map((reg) => (
              <div key={reg.id} className="registration-card animate-fadeInUp">
                <div className="registration-info">
                  <h3>{reg.eventTitle}</h3>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '6px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <User size={14} /> {reg.name}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <Calendar size={14} /> {formatDate(reg.eventDate)}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <MapPin size={14} /> {reg.eventVenue}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="registration-id-badge">
                    {reg.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">
              <Ticket size={36} />
            </div>
            <h3>No registrations yet</h3>
            <p>You haven't registered for any events yet. Explore events and join the excitement!</p>
            <Link to="/explore" className="btn btn-primary">
              Discover Events <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRegistrations;
