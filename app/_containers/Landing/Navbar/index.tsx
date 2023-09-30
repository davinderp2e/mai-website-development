import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../public/images/Logo.svg';
import './navbar.scss';

const navbarLinks = [
  {
    id: 1,
    label: 'Company',
    url: '#',
  },
  {
    id: 2,
    label: 'Products',
    url: '#',
  },
  {
    id: 3,
    label: 'Research',
    url: '#',
  },
  {
    id: 4,
    label: 'Resources',
    url: '#',
  },
  {
    id: 5,
    label: 'Team',
    url: '#',
  },
  {
    id: 6,
    label: 'Contact',
    url: '#',
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="section-wrapper">
          <div className="left-section">
            <div className="company-logo">
              <Image src={Logo} alt="Logo" />
            </div>
          </div>
          <div className="right-section">
            <div className="navbar-links">
              {
                navbarLinks.map((link) => (
                  <Link href={link.url} key={link.id} className="link">
                    {link.label}
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
