'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import MyIPR from 'public/images/myipr.png';
import Smart from 'public/images/smart.png';
import Mayaaverse from 'public/images/mayaaverse.png';
import Kalptantra from 'public/images/kalptantra.png';

const tabs = [
  {
    id: 1,
    image: MyIPR,
    title: 'MyIPR',
    heading: 'A platform that safeguards your ideas.',
    description: 'Empowering creators worldwide with secure DLT-based certification, MyIPR revolutionizes digital identity, idea protection, usage management, royalties, and infringement resolution.',
  },
  {
    id: 2,
    image: Smart,
    title: 'S.M.A.R.T',
    heading: 'A virtual market of real - world assets.',
    description: 'SMART revolutionizes the physical asset market through digital land ownership by tokenizing real estate, commercial airplanes and yachts, and providing users with fractional ownership, increased liquidity and transparent governance.',
  },
  {
    id: 3,
    image: Mayaaverse,
    title: 'Mayaa-Verse',
    heading: 'Immersive reality that enriches your reality.',
    description: 'A dynamic 100 sq km platform, hosting 17,000 interoperable worlds in a meta virtual world, MAICity digital metropolis will be a hotspot of VR immersive entertainment, global finance, and cultural melding pot.',
  },
  {
    id: 4,
    image: Kalptantra,
    title: 'Kalptantra',
    heading: 'demystifying DLT for everyone.',
    description: 'Kalp Studio harnesses blockchain-based metaverse technology\'s transformative power by creating a cohesive ecosystem, ensuring all users can participate actively in the Distributed Ledger Technology-based ecosystem.',
  }
];

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const onTabChange = (tab: number) => () => {
    setSelectedTab(tab);
  };

  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <div key={tab.id} className="tab" onClick={onTabChange(tab.id)}>
            <h3 className={`tab-title ${tab.id === selectedTab ? 'selected' : ''}`}>{tab.title}</h3>
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {tabs.map((tab) => (
          <div className={`tab-content ${tab.id === selectedTab ? 'active' : ''}`} key={tab.id}>
            <div className="content-wrapper">
              <h3 className="tab-content-heading">{tab.heading}</h3>
              <p className="tab-content-description">{tab.description}</p>
              <div className="learn-more">Learn More</div>
            </div>
            <div className="image-wrapper">
              <Image src={tab.image} alt={tab.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
