import React from 'react';
import { ReactComponent as Fade } from '../icons/Fade.svg';
import { ReactComponent as Phone } from '../icons/Phone.svg';
// import { ReactComponent as Portal } from '../icons/portal.svg';
// import { ReactComponent as BusinessMan } from '../icons/young-businessman.svg';
import CorporateWoman from '../images/corporate-woman.png';
import YoungBusinessMan from '../images/young-businessman.png';
import { ArrowHeadIcon, PipeSvg, RightAngleIcon } from '../icons';
import './About.css';

const AboutSection = () => {
  return (
    <section className="about-us">
      <span className='pipe-svg'><PipeSvg /></span>
      <div className='bg-shadow'></div>
    <div className="about-header">
      <h3 className='heading'>ABOUT US</h3>
      <div className='about-paragraph'>
        <h1>Payment pathways, built <br/> for you</h1>
        <p>
          Transalliance Group. Money Out and Money In solutions give our customers the ability to complete cross-border, multi-currency transactions securely and at speed. And with a single provider for both payouts and pay-ins, say goodbye to the operational headaches of multi-supplier management.
        </p>
      </div>
      <div className="money-out">
        <button className='money-out-btn'>
            Money Out
            <span>
                <RightAngleIcon />
            </span>
        </button>
      </div>
    </div>
    <div className="content">
      <div className='test test1'>
        <div class="box fade">
          <Fade />
          <p>SEPA Instant, SEPA & SWIFT</p>
        </div>
      </div>
      <div className='test test2'>
        <div className="box portal">
          {/* <Portal /> */}
          <img src={CorporateWoman} alt="SEPA Instant, SEPA & SWIFT" />
          <p>Customer portal for live transaction monitoring</p>
        </div>
      </div>
      <div className='test test3'>
        <span>
          <ArrowHeadIcon />
        </span>
        <div className="box business-man">
        {/* YoungBusinessMan */}
          <img src={YoungBusinessMan} alt="SEPA Instant, SEPA & SWIFT" />
          {/* <BusinessMan /> */}
          <p>Danish FSA regulated</p>
        </div>
      </div>
      <div className='test test4'>
        <div class="box phone">
          <Phone />
          <p>90+ currencies served</p>
        </div>
      </div>
      {/* <div class="box sepa">
        <img src="sepa-image.jpg" alt="SEPA Instant, SEPA & SWIFT" />
        <p>SEPA Instant, SEPA & SWIFT</p>
      </div> */}
    </div>
    <div className="learn-more-btn-container">
      <button className='learn-more-btn'>
          Learn More
          <span>
              <RightAngleIcon />
          </span>
      </button>
    </div>
  </section>


  );
};

export default AboutSection;
