import React from "react";
import "./OfferImages.css";

// وارد کردن تصاویر با نام‌های جدید
// import yekmilion from "../../assets/yekmilion.gif";
import qahveh from "../../assets/qahveh.webp";

const OfferImages = () => {
  return (
    <div className="offer-container">
      {/* <div className="offer-box">
        <img src={yekmilion} alt="yekmilion" className="offer-image" />
      </div> */}
      <div className="offer-box">
        <a href="https://www.digikala.com/fresh/brand/fabios/?&promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE-%D9%81%D8%A7%D8%A8%DB%8C%D9%88%D8%B3&promo_position=supermarket_slider_new&promo_creative=195621&bCode=195723">
          <img src={qahveh} alt=" qahveh " className="offer-image" />
        </a>
      </div>
    </div>
  );
};

export default OfferImages;
