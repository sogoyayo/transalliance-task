import React from 'react';
import './HumanPoweredNetwork.css';
import { ReactComponent as HumanNetwork } from '../icons/HumanNetwork.svg'; 
import { RightAngleIcon } from '../icons';

const HumanPoweredNetwork = () => {
  return (
    <section className="human-powered-network-section">
      <div className='network-info-container'>
        <div className="network-info">
          <h2>The human-powered <br/> payments network</h2>
          <p>
            Driven by a team of over 200 global payments experts with absolute dedication to solving our customers’ most complex cross-border payments challenges.
          </p>
          <div className="network-btn-container">
            <button className='money-out-btn'>
                Learn more
                <span>
                    <RightAngleIcon />
                </span>
            </button>
        </div>
        </div>
      </div>
      <div className="network-image">
        <HumanNetwork className='network-image-svg' />
      </div>
    </section>
  );
};

export default HumanPoweredNetwork;
