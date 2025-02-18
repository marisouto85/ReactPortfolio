import 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Maria Souto Robles. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/maria-a-s-744679b0" target="_blank" rel="noopener noreferrer" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/marisouto85" target="_blank" rel="noopener noreferrer" className="social-icon"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
