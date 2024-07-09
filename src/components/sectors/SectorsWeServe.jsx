import React from 'react';
import FinancialServicesImage from '../images/financial-services.png';
import iGaming from '../images/iGaming.png';
import NGOs from '../images/NGOs.png';
import Corporates from '../images/Corporates.png';
import './SectorsWeServe.css';
import { RightAngleIcon } from '../icons';

const sectors = [
  {
    title: 'Financial Services',
    imgSrc: FinancialServicesImage,
    alt: 'Financial Services',
  },
  {
    title: 'iGaming',
    imgSrc: iGaming,
    alt: 'iGaming',
  },
  {
    title: 'NGOs',
    imgSrc: NGOs,
    alt: 'NGOs',
  },
  {
    title: 'Corporates',
    imgSrc: Corporates,
    alt: 'Corporates',
  },
];

const SectorsWeServe = () => {
    return (
        <section className="section sectors-section">
            <div className='section-center'>
                <h2>Sectors we serve</h2>
                <p className='sub-title'>
                    We simplify the complexities of cross-border payments in some of the world’s most demanding sectors. Learn more about who we serve and how we add value below.
                </p>
                <div className="sectors-grid">
                    {sectors.map((sector) => (
                        <div className="sector-card" key={sector.title}>
                          <img src={sector.imgSrc} alt={sector.alt} />
                          <div className="sector-info">
                            <p>{sector.title}</p>
                            <button className="sector-learn-more">
                              Learn More
                              <span>
                                <RightAngleIcon />
                              </span>
                            </button>
                          </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectorsWeServe;
