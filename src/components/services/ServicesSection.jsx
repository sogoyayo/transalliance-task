import React from 'react';
import './ServicesSection.css';
import { ReactComponent as PartnerIcon } from '../icons/PartnerIcon.svg'; 
import { ReactComponent as NetworkIcon } from '../icons/NetworkIcon.svg'; 
import { ReactComponent as ComplianceIcon } from '../icons/ComplianceIcon.svg'; 
import { ReactComponent as ExpertiseIcon } from '../icons/ExpertiseIcon.svg'; 
import { ReactComponent as TransallianceImage } from '../icons/TransallianceImage.svg'; 




const services = [
  {
    icon: <PartnerIcon />,
    title: 'We are your trusted partner',
    description: 'We are a dedicated and diligent team of payments specialists that’s committed to helping you unlock opportunity, create value and make payments happen, together.',
  },
  {
    icon: <NetworkIcon />,
    title: 'We provide the network you need',
    description: 'We open access to a resilient global network spanning 90+ countries that’s built to simplify complex challenges and move money at speed.',
  },
  {
    icon: <ComplianceIcon />,
    title: 'We bring certainty through compliance',
    description: 'We were born with compliance at our heart. Licensed by the globally trusted Danish FSA, when we move money you can be confident that it gets to the right place with absolute accuracy.',
  },
  {
    icon: <ExpertiseIcon />,
    title: 'We execute with expertise',
    description: 'We complete an industry-leading 99% of payments for customers in the fast-changing financial services, iGaming, corporate and NGO sectors, drawing on 16 years of proven expertise.',
  },
];


const ServicesSection = () => {
  return (
    <div className="transalliance-container">
      <div className='section-center transalliance-section'>
        <div className="service-section">
          <h2>Our Service</h2>
          {services.map((service, index) => (
            <div key={index} className="service-item">
              {/* <div className={`icon ${service.icon}`} /> */}
              <div className='icon'>
                {service.icon}
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="difference-section">
          <h1>The Transalliance Group difference</h1>
          <p>
            Our global payments network is powered by passionate people, transparent customer relationships, and leading-edge technology.
          </p>
          <div>
            <TransallianceImage />
          </div>
          {/* <div className="team-section">
            <div className="team-image">
              <img src="path/to/image.jpg" alt="Our Team" />
              <div className="team-info">
                <h4>Our Team</h4>
                <p>Over 200 Experts</p>
              </div>
            </div>
            <p>Meet our best financial experts <span>&#8594;</span></p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
