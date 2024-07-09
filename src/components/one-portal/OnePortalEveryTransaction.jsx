import React from 'react';
import { ReactComponent as PortalTransaction } from '../icons/PortalTransaction.svg';
import './OnePortalEveryTransaction.css';

const OnePortalEveryTransaction = () => {
  return (
    <section className="portal-section">
      <div className="portal-image">
        <PortalTransaction className='portal-image-svg' />
      </div>
      <div className='portal-info-container'>
        <div className="portal-info">
          <h2>One portal, <br /> every transaction</h2>
          <p>Our customer portal provides an intuitive interface to access all of our services via a simple, single login.</p>
          <ul>
            <li>Real-time, 24/7, 365 transaction tracking</li>
            <li>Customizable & downloadable reports</li>
            <li>Rich data analysis</li>
            <li>Multiple integration methods, built to suit your needs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OnePortalEveryTransaction;
