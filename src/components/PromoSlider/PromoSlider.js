// 1️⃣ ساخت کامپوننت اسلایدر تبلیغات
// مسیر: src/components/PromoSlider.js
import React from "react";
import "./PromoSlider.css"; // 2️⃣ استایل‌دهی جداگانه

import tekani from "../../assets/خونه تکونی.webp";
import aidi_plus from "../../assets/عیدی پلاس.webp";
import mahsul from "../../assets/محصول.webp";
import shans from "../../assets/شانس.gif";


// 3️⃣ آرایه‌ای از تبلیغات برای نمایش داینامیک
const promoData = [
  {
    id: 1,
    image: tekani, // تصویر تستی
    link: "https://www.digikala.com/landing/HC-PC/?&promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE-%D9%BE%D8%A7%DA%A9%D8%B4%D9%88&promo_position=home_top&promo_creative=194632&bCode=194632",
    
  },
  {
    id: 2,
    image: shans,
    link: "https://example.com/dinner",
    
  },
  {
    id: 3,
  
    image: aidi_plus,
    link: "https://www.digikala.com/landing/NowroozPlus/?&promo_name=%D9%86%D9%88%D8%B1%D9%88%D8%B2+%D8%A8%D8%A7+%D9%BE%D9%84%D8%A7%D8%B3&promo_position=home_top&promo_creative=194882&bCode=194882",
  },
  {
    id: 4,
    image: mahsul,
    link: "https://www.digikala.com/landing/Pars-Hayan/?&promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE-%D9%BE%D8%A7%D8%B1%D8%B3+%D8%AD%DB%8C%D8%A7%D9%86&promo_position=home_top&promo_creative=194642&bCode=194642",
    
  },
];

// 4️⃣ کامپوننت اصلی که تبلیغات رو نمایش می‌ده
const PromoSlider = () => {
  return (
    <div className="promo-wrapper">
    <div className="promo-slider">
      {promoData.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="promo-item"
          style={{ backgroundColor: item.bgColor }}
        >
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
        </a>
      ))}
    </div>
    </div>
  );
};

export default PromoSlider;


