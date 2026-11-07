import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Trophy, ArrowLeft, CheckCircle, IndianRupee } from 'lucide-react';
import Countdown from '../components/Countdown';
import events from '../data/events';

const EventDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="event-detail-page">
        <div className="container">
          <div className="empty-state" style={{ paddingTop: '100px' }}>
            <h3>Event Not Found</h3>
            <p>The event you're looking for doesn't exist.</p>
            <Link to="/explore" className="btn btn-primary">Browse Events</Link>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateStr) => {
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
        <button onClick={() => navigate('/explore')} className="btn btn-secondary" style={{ marginBottom: '24px' }}>
          <ArrowLeft size={18} /> Back to Events
        </button>

        <img src={event.image} alt={event.title} className="event-banner animate-fadeIn" />

        <div className="event-detail-header">
          <div>
            <h1 className="event-detail-title">{event.title}</h1>
            <span className="event-detail-category">{event.category}</span>
          </div>
        </div>

        <div className="event-detail-grid">
          <div className="event-detail-content animate-fadeInUp">
            <h3>About This Event</h3>
            {event.description.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <h3>Event Highlights</h3>
            <div className="event-highlights">
              <ul>
                {event.highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle size={20} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="event-sidebar animate-fadeInUp animate-delay-2">
            <div className="event-info-card">
              <h3 style={{ marginBottom: '8px', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Event Details</h3>
              
              <div className="event-info-item">
                <Calendar />
                <div>
                  <div className="event-info-label">Date</div>
                  <div className="event-info-value">{formatDate(event.date)}</div>
                </div>
              </div>
              <div className="event-info-item">
                <Clock />
                <div>
                  <div className="event-info-label">Time</div>
                  <div className="event-info-value">{event.time}</div>
                </div>
              </div>
              <div className="event-info-item">
                <MapPin />
                <div>
                  <div className="event-info-label">Venue</div>
                  <div className="event-info-value">{event.venue}</div>
                </div>
              </div>
              <div className="event-info-item">
                <Users />
                <div>
                  <div className="event-info-label">Team Size</div>
                  <div className="event-info-value">{event.teamSize}</div>
                </div>
              </div>
              <div className="event-info-item">
                <IndianRupee />
                <div>
                  <div className="event-info-label">Registration Fee</div>
                  <div className="event-info-value">{event.registrationFee}</div>
                </div>
              </div>
              <div className="event-info-item">
                <Trophy />
                <div>
                  <div className="event-info-label">Prizes</div>
                  <div className="event-info-value">{event.prizes}</div>
                </div>
              </div>
            </div>

            <div className="event-info-card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '8px', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Event Starts In</h3>
              <Countdown targetDate={event.date} />
              <Link
                to={`/register?event=${event.id}`}
                className="btn btn-primary btn-lg"
                style={{ width: '100%', marginTop: '16px' }}
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
