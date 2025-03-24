// مسیر: src/components/NewPromoSlider.js
import React from "react";
import "./NewPromoSlider.css"; // استایل‌دهی جداگانه

import product1 from "../../assets/12درصد تخفیف.gif";  // تصویر جدید
import product2 from "../../assets/40دزصد.webp";  // تصویر جدید
import product3 from "../../assets/مو.webp";  // تصویر جدید
import product4 from "../../assets/زمستانه.webp";  // تصویر جدید

// 2️⃣ آرایه جدید برای داده‌های تبلیغاتی
const newPromoData = [
  {
    id: 1,
    image: product1, 
    
    link: "https://example.com/product1",
  },
  {
    id: 2,
    image: product2,
    
    link: "https://example.com/product2",
  },
  {
    id: 3,
    image: product3,
    
    link: "https://example.com/product3",
  },
  {
    id: 4,
    image: product4,
link: "https://example.com/product4",
  },
];

// 3️⃣ کامپوننت جدید اسلایدر
const NewPromoSlider = () => {
  return (
    <div className="new-promo-wrapper">
      <div className="new-promo-slider">
        {newPromoData.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="new-promo-item"
          >
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewPromoSlider;
