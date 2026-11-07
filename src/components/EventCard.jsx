import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventCard = ({ event, style }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="event-card animate-fadeInUp" style={style}>
      <div className="event-card-image-wrapper">
        <span className="event-card-category">{event.category}</span>
        <img
          src={event.image}
          alt={event.title}
          className="event-card-image"
          loading="lazy"
        />
      </div>
      <div className="event-card-body">
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-desc">{event.shortDescription}</p>
        <div className="event-card-meta">
          <div className="event-card-meta-item">
            <Calendar />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="event-card-meta-item">
            <Clock />
            <span>{event.time}</span>
          </div>
          <div className="event-card-meta-item">
            <MapPin />
            <span>{event.venue}</span>
          </div>
        </div>
        <div className="event-card-footer">
          <span className="event-card-fee">{event.registrationFee}</span>
          <Link to={`/event/${event.slug}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
