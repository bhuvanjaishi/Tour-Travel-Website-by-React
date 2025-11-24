import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  const services = [
    'Adventure Tours',
    'Luxury Vacations',
    'Cultural Experiences',
    'Family Packages',
    'Honeymoon Specials',
    'Group Tours'
  ];

  const destinations = [
    'Bali, Indonesia',
    'Santorini, Greece',
    'Swiss Alps',
    'Maldives',
    'Tokyo, Japan',
    'Paris, France'
  ];

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', text: '123 Travel Street, Kathmandu, Nepal' },
    { icon: 'fas fa-phone', text: '+977 1-1234567, +977 1-7654321' },
    { icon: 'fas fa-envelope', text: 'info@travelexplorer.com' },
    { icon: 'fas fa-clock', text: '24/7 Customer Support' }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#', color: '#1877F2' },
    { icon: 'fab fa-twitter', url: '#', color: '#1DA1F2' },
    { icon: 'fab fa-instagram', url: '#', color: '#E4405F' },
    { icon: 'fab fa-linkedin-in', url: '#', color: '#0A66C2' },
    { icon: 'fab fa-youtube', url: '#', color: '#FF0000' },
    { icon: 'fab fa-pinterest', url: '#', color: '#BD081C' }
  ];

  const paymentMethods = [
    'fab fa-cc-visa',
    'fab fa-cc-mastercard',
    'fab fa-cc-amex',
    'fab fa-cc-paypal',
    'fab fa-cc-apple-pay',
    'fab fa-cc-stripe'
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-section company-info">
              <div className="footer-logo">
                <i className="fas fa-plane"></i>
                <span>TravelExplorer</span>
              </div>
              <p className="company-description">
                Your trusted partner for unforgettable travel experiences since 2009. 
                We specialize in creating personalized journeys that create lasting memories.
              </p>
              <div className="contact-info">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <i className={item.icon}></i>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    aria-label={social.icon.split('-')[1]}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#">{service}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Destinations */}
            <div className="footer-section">
              <h3 className="footer-title">Popular Destinations</h3>
              <ul className="footer-links">
                {destinations.map((destination, index) => (
                  <li key={index}>
                    <a href="#">{destination}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-section newsletter">
              <h3 className="footer-title">Newsletter</h3>
              <p className="newsletter-description">
                Subscribe to get special offers, free giveaways, and travel updates.
              </p>
              
              {isSubscribed ? (
                <div className="subscription-success">
                  <i className="fas fa-check-circle"></i>
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="subscribe-btn">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              )}

              <div className="trust-badges">
                <div className="trust-badge">
                  <i className="fas fa-shield-alt"></i>
                  <span>Secure Booking</span>
                </div>
                <div className="trust-badge">
                  <i className="fas fa-award"></i>
                  <span>Best Price Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Middle - Additional Info */}
      <div className="footer-middle">
        <div className="container">
          <div className="footer-middle-content">
            <div className="support-info">
              <div className="support-item">
                <i className="fas fa-headset"></i>
                <div className="support-text">
                  <strong>24/7 Support</strong>
                  <span>We're always here to help</span>
                </div>
              </div>
              <div className="support-item">
                <i className="fas fa-plane-departure"></i>
                <div className="support-text">
                  <strong>500+ Tours</strong>
                  <span>Curated experiences worldwide</span>
                </div>
              </div>
              <div className="support-item">
                <i className="fas fa-user-check"></i>
                <div className="support-text">
                  <strong>50K+ Travelers</strong>
                  <span>Happy customers worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 TravelExplorer. All rights reserved.</p>
            </div>
            
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Disclaimer</a>
            </div>

            <div className="payment-methods">
              <span>We Accept:</span>
              <div className="payment-icons">
                {paymentMethods.map((method, index) => (
                  <i key={index} className={method}></i>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </footer>
  );
};

export default Footer;