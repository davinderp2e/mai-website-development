'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Payment from 'public/images/payment.png';
import Marketplace from 'public/images/marketplace.png';
import Sovereign from 'public/images/soverign.png';
import { Arrow } from 'app/_assets/svg';
import './offer-section.scss';

const offers = [
  {
    id: 1,
    image: Marketplace,
    title: 'Marketplace',
    description: 'Create your own marketplace or list your Virtual Assets in seconds with MAIMarket’s APIs and Whitelabel solutions.',
  },
  {
    id: 2,
    image: Sovereign,
    title: 'Self Sovereign Identity',
    description: 'The MAI eID platform is an all-in-one seamless management and data-sharing solution for enterprises and users.',
  },
  {
    id: 3,
    image: Payment,
    title: 'Payments',
    description: 'With MAIPay’s All-in-One Payment platform, accept payments, manage in-app purchases and enable users to transact in real money.',
  },
];

const OfferSection = () => {
  return (
    <div className="offer-section">
      <div className="container">
        <h2 className="title">We offer, what few can offer</h2>
        <div className="offer-wrapper">
          {offers.map((offer) => (
            <div className="offer" key={offer.id}>
              <div className="offer-image">
                <Image src={offer.image} alt={offer.title} />
              </div>
              <div className="offer-content">
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>
                <Link href="#">
                  Learn More <Image src={Arrow} alt="" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="blur-circle" />
    </div>
  );
};

export default OfferSection;
