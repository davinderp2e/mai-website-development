import React from 'react';
import Tabs from './tabs';
import './operations-section.scss';

const OperationsSection = () => {
  return (
    <div className="operations-section">
      <div className="operations-bg">
        <div className="container">
          <h1 className="heading">Operate from the cutting edge of innovation.</h1>
          <Tabs />
        </div>
      </div>
    </div>
  )
};

export default OperationsSection;
