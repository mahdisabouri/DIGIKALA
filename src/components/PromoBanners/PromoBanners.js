import React from 'react';
import './PromoBanners.css';
import brandLinks from './brandLinks';

const LogosBanner = () => {
  return (
    <div className="logos-banner">
      <div className="header">
        <span className="header-text">محبوب‌ترین برندها</span>
        <span className="star-icon" />
      </div>
      <div className="logos-container">
        {brandLinks.map((brand, index) => (
          <a 
            key={index} 
            href={brand.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="logo-link"
            style={{
              borderRight: index !== brandLinks.length - 1 ? "1px solid silver" : "none",
              borderLeft: index !== 0 ? "1px solid silver" : "none",
              padding: "10px 15px",
              margin: "-5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img src={brand.logo} alt={brand.name} className="brand-logo" />
          </a>
        ))}
      </div>
    </div>
  );
};

const PromoBanners = () => {
  return (
    <div className="promo-banners-container">
      <LogosBanner />
    </div>
  );
};

export default PromoBanners;
