import React from 'react'
import { ReactComponent as CompanyLogo } from '../icons/CompanyLogo.svg';
import './Navbar.css';
import { ArrowHeadIcon } from '../icons';

const Navbar = () => {
    return (
        <nav className="section-center navbar">
            <div className="logo"><CompanyLogo /></div>
            <div className='navigation-container'>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#solutions">Solutions</a></li>
                    <li><a href="#news">News & Insights</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
                <button className="get-started-button">
                    Get Started
                    <span>
                        <ArrowHeadIcon />
                    </span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar