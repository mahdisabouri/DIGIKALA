import React from 'react';
import './ImagePair.css';

// وارد کردن تصاویر با نام‌های جدید
import offer70 from '../../assets/70درصدoffer.gif';
import offer20 from '../../assets/20درصدoffer.webp';

const ImagePair = () => {
  return (
    <div className="image-pair-container">
      <div className="image-wrapper">
        <img src={offer70} alt="تخفیف ۷۰ درصد" className="image" />
      </div>
      <div className="image-wrapper">
        <img src={offer20} alt="تخفیف ۲۰ درصد" className="image" />
      </div>
    </div>
  );
};

export default ImagePair;
