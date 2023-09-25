import React from 'react';
import '../Footer.css'; // Import your Footer CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam consectetur nulla ac nulla iaculis, vitae lacinia metus aliquam.
          </p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <address>
            <p>123 Main Street</p>
            <p>City, State 12345</p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
