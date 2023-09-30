import React from 'react';
import './landing.scss';
import Navbar from './Navbar';
import BannerSection from './BannerSection';
import AboutSection from './AboutSection';
import StatisticsSection from './StatisticsSection';
import ProductsSection from './ProductsSection';
import OfferSection from './OfferSection';
import OperationsSection from './OperationsSection';
import ArticlesSection from './ArticlesSection';
import CeoSection from './CeoSection';
import ContactUsSection from './ContactUsSection';
import Footer from './Footer';

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <BannerSection />
      <div className="statistics-wrapper">
        <AboutSection />
        <StatisticsSection />
      </div>
      <ProductsSection />
      <OfferSection />
      <OperationsSection />
      <ArticlesSection />
      <CeoSection />
      <ContactUsSection />
      <Footer />
    </div>
  )
};

export default Landing;
