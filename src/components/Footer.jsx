import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="gradient-text">FESTORA</h3>
            <p>
              Discover. Celebrate. Connect. Your ultimate platform for discovering
              and registering for the most exciting campus events.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/explore">Explore Events</Link>
            <Link to="/register">Register</Link>
            <Link to="/my-registrations">My Registrations</Link>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="mailto:info@festora.com">info@festora.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2027 Festora. All rights reserved.</p>
          <p>Made with ❤️ for KIIT University</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
