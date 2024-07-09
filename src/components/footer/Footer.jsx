import React from 'react';
import { FacebookIcon, InstagramIcon, RightAngleIcon, TwitterIcon } from '../icons';
import { ReactComponent as TransallianceLogo } from '../icons/TransallianceLogo.svg';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <TransallianceLogo />

          <div className="footer-contact">
            <button className='footer-button'>
              Contact Us
              <span>
                <RightAngleIcon />
              </span>
            </button>
          </div>
        </div>
        
        <div className="footer-sections">
          <div className="footer-section">
            <h4>Offices</h4>
            <p>Denmark:<br />Toldbodgade 55B<br />1253, Copenhagen</p>
            <p>United Kingdom: <br />1 Poultry <br />EC2R 8EJ, London</p>
            <p>info@inpay.com</p>
            <p>Phone: +45 88 610 600</p>
          </div>
          <div className="footer-section">
            <h4>Solutions</h4>
            <p>Money Out</p>
            <p>Money In</p>
          </div>
          <div className="footer-section">
            <h4>Sectors</h4>
            <p>Financial Services</p>
            <p>iGaming</p>
            <p>Corporates</p>
            <p>NGOs</p>
          </div>
          <div className="footer-section">
            <h4>Other</h4>
            <p>About Us</p>
            <p>News & Insights</p>
            <p>Compliance</p>
            <p>Careers</p>
            <p>Contact us</p>
          </div>
        </div>
        
      </div>
      <div className="footer-social-media">
        <div>
          <h4>Social Media</h4>
          <div className="social-icons">
            <a href="https://twitter.com"><FacebookIcon /></a>
            <a href="https://facebook.com"><TwitterIcon /></a>
            <a href="https://instagram.com"><InstagramIcon /></a>
          </div>
        </div>
      </div>
    </footer>
    <div className='lintel'></div>
    </>
  );
};

export default Footer;
