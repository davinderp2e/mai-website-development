import React from 'react';
import Tabs from './tabs';
import './products-section.scss';

const ProductsSection = () => {
  return (
    <div className="products-section">
      <div className="info-section">
        <div className="view">
          <h2 className="title">Creating a better future for all mankind.</h2>
          <p className="description">
            MAI aims at building bridges between the thinkable and the doable, making tech more accessible than ever before.
          </p>
        </div>
        <div className="container">
          <Tabs />
        </div>
      </div>
    </div>
  )
};

export default ProductsSection;
