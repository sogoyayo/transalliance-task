import React from 'react';
import ContactImage from '../images/ContactImage.png';
import './ContactSection.css';
import { RightAngleIcon } from '../icons';

const ContactSection = () => {
    return (
        <section className="contact-section section">
            <div className='section-center speak-to-sales-section'>
                <div className="sales-image">
                    <img src={ContactImage} alt="Contact" />
                </div>
                
                <div className="sales-form">
                    <h2>Speak to Sales</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <div className="form-group checkbox">
                            <input type="checkbox" id="consent" name="consent" />
                            <label htmlFor="consent">
                                I agree to receiving payment news and trends from Inpay, including updates to our products and services. I am aware that I can withdraw this consent at any time by contacting Inpay or unsubscribing via email. I agree to Inpay processing my personal data in accordance with its Privacy Policy.
                            </label>
                        </div>
                        <button type="submit" className='contact-button'>
                            Submit
                            <span>
                                <RightAngleIcon />
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
