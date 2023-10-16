import React from 'react';
import PrimaryNav from "../PrimaryNav";

import './index.scss';

const Hero = props => {
  return (
    <div className="header-box">
      <div className="primary-nav">
        <div className="container">
          <PrimaryNav/>
        </div>
      </div>
      <div className="hero-box-data">
        <div
          className="hero-box-item"
          style={{
            backgroundImage: `url(${props.heroData})`
          }}
        >
          <img
            className="visibility-hidden"
            src={props.heroData}
          />
        </div>
      </div>
    </div>
  )
};

export default Hero;