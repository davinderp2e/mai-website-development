import React from 'react';
import Image from 'next/image';
import CeoImage from 'public/images/ceo-image.png';
import './ceo-section.scss';

const CeoSection = () => {
  return (
    <div className="ceo-section">
      <div className="container">
        <div className="sections">
          <div className="left-section">
            <div className="ceo-speaks">CEO Speaks ------------------</div>
            <div className="heading">Creating the multiverse of the future, together.</div>
            <div className="description">
              With an HQ in India, and nurtured by a visionary futurist entrepreneur, MAI has been created with the vision of democratizing immersive technology across the digital world.
            </div>
            <div className="view-team">View Team</div>
          </div>
          <div className="right-section">
            <Image src={CeoImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default CeoSection;
