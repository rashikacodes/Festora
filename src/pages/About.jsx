import { Target, Users, Zap, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="event-detail-page">
      <div className="container">
        <div className="page-header" style={{ paddingTop: '20px' }}>
          <h1>About <span className="gradient-text">Festora</span></h1>
          <p>Discover. Celebrate. Connect.</p>
        </div>

        <div className="about-content animate-fadeInUp">
          <p>
            Welcome to <strong>Festora</strong>, the premier campus event discovery and registration platform designed specifically for university students, faculty, and enthusiasts. Our mission is to bridge the gap between talented individuals and campus experiences.
          </p>
          <p>
            Whether it's an adrenaline-fueled 36-hour hackathon, an electrifying battle of the bands, a high-stakes sports league, or an insightful AI workshop, Festora curates the best events happening all across campus in one seamless, intuitive interface.
          </p>

          <div className="stats-grid" style={{ margin: '48px 0' }}>
            <div className="stat-card">
              <Target size={32} style={{ color: 'var(--accent-purple)', margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>Our Mission</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Empowering students through accessible, engaging campus events.</p>
            </div>
            <div className="stat-card">
              <Users size={32} style={{ color: 'var(--accent-blue)', margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>Community</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Fostering collaboration across tech, arts, culture, and sports.</p>
            </div>
            <div className="stat-card">
              <Zap size={32} style={{ color: 'var(--accent-purple)', margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>Instant Access</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Zero-friction registration with local ticket tracking.</p>
            </div>
            <div className="stat-card">
              <Award size={32} style={{ color: 'var(--accent-blue)', margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>Excellence</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Curating world-class competitions and career-launching workshops.</p>
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
            Why Choose Festora?
          </h2>
          <p>
            Unlike fragmented notice boards or social media groups, Festora gives you a single source of truth. With real-time countdown timers, detailed schedules, prize information, and automated registration management with unique IDs, staying ahead on campus has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
