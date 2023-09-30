import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoWhite from 'public/images/logo-white.png';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top-section">
          <div className="flex-wrapper">
            <Image src={LogoWhite} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur. Lobortis etiam diam fermentum at mauris</p>
          </div>
          <div className="follow">
            <label>Follow us on:</label>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="tabs-section">
          <Link href="#">Company</Link>
          <Link href="#">Products</Link>
          <Link href="#">Research</Link>
          <Link href="#">Resources</Link>
          <Link href="#">Team</Link>
          <Link href="#">Career</Link>
          <Link href="#">Contact</Link>
        </div>
        <div className="divider" />
        <div className="bottom-section">
          <div className="left-section">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Services</Link>
            <Link href="#">Disclaimer</Link>
          </div>
          <div className="right-section">
            <p>Copyright © MAI Labs. All Rights Reserved.</p>
          </div>
        </div>
      </div>

    </footer>
  )
};

export default Footer;
