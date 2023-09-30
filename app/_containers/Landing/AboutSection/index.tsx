'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Arrow } from 'app/_assets/svg';
import Cards from './cards';
import './about-section.scss';

const AboutSection = () => {
  const [selectedImage, setSelectedImage] = useState<number>(1);

  const onClick = (id: number) => () => {
    setSelectedImage(id);
  };

  const onArrowClick = (direction: string) => () => {
    if (direction === 'left' && selectedImage > 1) {
      setSelectedImage(selectedImage - 1);
    } else if (direction === 'right' && selectedImage < 3) {
      setSelectedImage(selectedImage + 1);
    } else {
      return;
    }
  };

  return (
    <div className="about-section">
      <div className="container">
        <div className="sections">
          <div className="left-section">
            <h3>At MAI, you’re free to empower yourself.</h3>
            <p>MAI is the decentralized hub of all things Web 3.0 and Metaverse. Come, discover MAI for yourself.</p>
            <div className="learn-navigation">
              <div className="learn-more">Learn More</div>
              <div className="navigation">
                <Image
                  onClick={onArrowClick('left')}
                  className={`left-arrow ${selectedImage === 1 ? 'disabled' : ''}`}
                  src={Arrow}
                  alt=""
                />
                <Image
                  onClick={onArrowClick('right')}
                  className={`right-arrow ${selectedImage === 3 ? 'disabled' : ''}`}
                  src={Arrow}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="right-section">
            <Cards selectedImage={selectedImage} onCardClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default AboutSection;
