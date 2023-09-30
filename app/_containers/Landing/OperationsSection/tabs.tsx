'use client'

import React, { useState } from 'react';
import Image from 'next/image';

const tabs = [
  {
    id: 1,
    title: 'Patent',
    heading: 'Locking in the patent to tomorrow.',
    description: 'We are pioneers in patent creation, specializing in revolutionary technologies that engage all five senses. With our portfolio of six cutting-edge patents, we redefine the boundaries of virtual reality immersive experience.',
  },
  {
    id: 2,
    title: 'Hardware',
    heading: 'The hardware for your dreamware.',
    description: 'Web Hybrid-enabled software has its own hardware requirements and the solutions available now are beyond the reach of ordinary individuals. So, MAI is developing cost-effective solutions everyone can use.',
  },
  {
    id: 3,
    title: 'DLT',
    heading: 'The A to Z of DLT at your fingertips.',
    description: 'Kalptantra is a DLT-powered ecosystem that provides individual clients, enterprises, and organizations with attribute-based and role-based access control over the virtual DLT while protecting them against cyber-attacks.',
  },
  {
    id: 4,
    title: 'Innovation Hub',
    description: 'Pioneering analytics on permissioned DLTs and deep learning for smart contract scrutiny. Exciting results to be unveiled for the scientific community soon!',
  }
];

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const onTabChange = (tab: number) => () => {
    setSelectedTab(tab);
  };

  return (
    <div className="tabs-wrapper">
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
              {tab.heading && <h3 className="tab-content-heading">{tab.heading}</h3>}
              <p className="tab-content-description">{tab.description}</p>
              <div className="learn-more">Learn More</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
};

export default Tabs;
