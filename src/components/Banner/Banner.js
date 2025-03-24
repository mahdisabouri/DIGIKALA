// مسیر فایل: src/components/Banner/Banner.js

import React from "react";
import "./Banner.css";
import bannerGif from "../../assets/sa.gif"; // مسیر فایل GIF

const Banner = () => {
  return (
    <div className="banner">
      <a href="https://tapsi.ir/" target="_blank">
        
      <img src={bannerGif} alt="Banner" />
      </a>
    </div>
  );
};

export default Banner;
