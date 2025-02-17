import 'react';
import './Footer.css'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Maria Souto Robles. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
