import React from 'react';
import './statistics-section.scss';

const data = [
  {
    id: 1,
    count: '180+',
    text: 'Engineers Across 4 locations in India.',
  },
  {
    id: 2,
    count: '20',
    text: 'DLT experts crafting next gen experiences.'
  },
  {
    id: 3,
    count: '8',
    text: 'Nationalities working accross the world.'
  },
  {
    id: 4,
    count: '4',
    text: 'PhD holder in Artificial Intelligence'
  },
  {
    id: 5,
    count: '120',
    text: 'Visual artists building HD immersive metaverse.'
  },
  {
    id: 6,
    count: '27',
    text: 'The average age of MAI team member.'
  },
];

const StatisticsSection = () => {
  return (
    <div className="statistics-section">
      <div className="container">
        <div className="absolute-wrapper">
          <div className="banner">
            <div className="overlay" />
            <div className="items">
              {
                data.map((item, index) => (
                  <div className="item" key={item.id}>
                    <div className="count">{item.count}</div>
                    <div className="text">{item.text}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
