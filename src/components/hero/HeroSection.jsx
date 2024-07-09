import React from 'react'
import { ReactComponent as HeroImage1 } from '../icons/HeroImage1.svg'; 
import { ReactComponent as HeroImage2 } from '../icons/HeroImage2.svg'; 
import { ReactComponent as RedCross } from '../icons/RedCross.svg'; 
import { ReactComponent as TrippleEight } from '../icons/888.svg'; 
import { ReactComponent as CIMB } from '../icons/CIMB.svg'; 
import { ReactComponent as Nuvei } from '../icons/Nuvei.svg'; 
import { ReactComponent as MoneyGram } from '../icons/MoneyGram.svg'; 
import { ReactComponent as RakBank } from '../icons/RakBank.svg'; 
import './Hero.css';
import Navbar from '../navbar/Navbar';
import { PipeSvg, RightAngleIcon } from '../icons';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <span className='line-svg'>
                <PipeSvg />
            </span>
            <Navbar />
            <div className="section-center hero-content">
                <div>
                    <span>Simplified cross-border payment</span>
                    <h1>We are the <br/> payments people</h1>
                    <p>Transalliance Group's cross-border payments solutions connect organisations and communities globally to the network they need to thrive. Together, we make money move.</p>
                    <button className="discover-more-button">
                        Discover More
                        <span>
                            <RightAngleIcon />
                        </span>
                    </button>

                    
                </div>
                <article className='img-container'>
                    <HeroImage1 />
                    </article>
            </div>
            <div  className="hero-image2">
                <HeroImage2 />
            </div>
            <div className="glass-card">
                <p>Send and Receive Money from all over with ease.</p>
                <div className="card-content">
                    <RedCross className='partners' />
                    <TrippleEight className='partners' />
                    <CIMB className='partners' />
                    <Nuvei className='partners' />
                    <MoneyGram className='partners' />
                    <RakBank className='partners' />
                </div>
            </div>
            <div className='hero-left-bg-shade'></div>
            <div className='hero-right-bg-shade'></div>
        </div>
    );
};
    
    export default HeroSection;