import { Link } from 'react-router-dom';
import { Sparkles, Code, Music, Trophy, BookOpen, Award, ArrowRight } from 'lucide-react';
import EventCard from '../components/EventCard';
import events from '../data/events';

const Home = () => {
  const featuredEvents = events.slice(0, 3);

  const categories = [
    { name: 'Technical', icon: Code, count: events.filter(e => e.category === 'Technical').length },
    { name: 'Cultural', icon: Music, count: events.filter(e => e.category === 'Cultural').length },
    { name: 'Sports', icon: Trophy, count: events.filter(e => e.category === 'Sports').length },
    { name: 'Workshops', icon: BookOpen, count: events.filter(e => e.category === 'Workshops').length },
    { name: 'Competitions', icon: Award, count: events.filter(e => e.category === 'Competitions').length },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            Your Gateway to Amazing Events
          </div>
          <h1>
            Discover <span className="gradient-text">Amazing Events</span> at Your Campus
          </h1>
          <p>
            Festora brings you the best campus events — from hackathons and tech fests to cultural nights and sports leagues. Find, explore, and register with ease.
          </p>
          <div className="hero-buttons">
            <Link to="/explore" className="btn btn-primary btn-lg">
              Explore Events <ArrowRight size={20} />
            </Link>
            <Link to="/register" className="btn btn-secondary btn-lg">
              Register Now
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="stat-number">15+</div>
              <div className="stat-label">Events</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Participants</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">5</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free Entry</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Events</h2>
          <p className="section-subtitle">
            Check out the hottest events happening on campus. Don't miss out!
          </p>
          <div className="events-grid">
            {featuredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} style={{ animationDelay: `${index * 0.1}s` }} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/explore" className="btn btn-secondary">
              View All Events <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title">Browse by Category</h2>
          <p className="section-subtitle">
            Find events that match your interests
          </p>
          <div className="categories-grid">
            {categories.map((cat, index) => (
              <Link to={`/explore?category=${encodeURIComponent(cat.name)}`} key={cat.name} className="category-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="category-icon">
                  <cat.icon size={28} />
                </div>
                <h3>{cat.name}</h3>
                <p>{cat.count} Events</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '15+', label: 'Events Listed' },
              { number: '500+', label: 'Registrations' },
              { number: '10+', label: 'Venues' },
              { number: '5', label: 'Categories' },
            ].map((stat, i) => (
              <div key={i} className="stat-card animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="promo-section">
            <h2>Ready to Join the <span className="gradient-text">Next Big Event</span>?</h2>
            <p>Browse through our curated collection of campus events and secure your spot today.</p>
            <Link to="/explore" className="btn btn-primary btn-lg">
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
