'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Banner1 from 'public/images/banner1.svg';
import Banner2 from 'public/images/banner2.svg';
import Aws from 'public/images/aws.svg';
import Azure from 'public/images/azure.svg';
import Cloud from 'public/images/cloud.svg';
import ChveronLeft from 'public/images/chevron-left.svg';
import ChveronRight from 'public/images/chevron-right.svg';
import './banner-section.scss';

const BannerSection = () => {
  const [bannerText, setBannerText] = useState('digital universe');
  const [bannerImage, setBannerImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerText(bannerText === 'digital universe' ? 'immersive technology' : 'digital universe');
      setBannerImage(bannerImage === 0 ? 1 : 0);
    }, 7000);

    return () => clearInterval(interval);
  });

  const onBannerChange = (id) => () => {
    if (id === 0) {
      setBannerText('digital universe');
      setBannerImage(0);
    } else {
      setBannerText('immersive technology');
      setBannerImage(1);
    }
  };

  return (
    <div className="banner-section">
      <div className="container">
        <div className="navigation-arrow left" onClick={onBannerChange(0)}>
          <Image src={ChveronLeft} alt="" />
        </div>
        <div className="navigation-arrow right" onClick={onBannerChange(1)}>
          <Image src={ChveronRight} alt="" />
        </div>
        <div className="sections">
          <div className="left-section">
            <h3>The new <span className="banner-text">{bannerText}</span> is here.</h3>
            <p>Discover a world of innovative immersive technology, where the future is within your reach.</p>
            <div className="companies">
              <Image src={Aws} alt="aws" />
              <Image src={Cloud} alt="cloud" />
              <Image src={Azure} alt="azure" />
            </div>
            <div className="carousel-indicators">
              <ul>
                <li className={bannerImage === 0 ? 'active' : ''} onClick={onBannerChange(0)} />
                <li className={bannerImage === 1 ? 'active' : ''} onClick={onBannerChange(1)} />
              </ul>
            </div>
          </div>
          <div className={`right-section ${bannerImage ? 'banner-2' : 'banner-1'}`}>
            {bannerImage === 0 && <Image src={Banner1} alt="banner1" />}
            {bannerImage === 1 && <Image src={Banner2} alt="banner2" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
