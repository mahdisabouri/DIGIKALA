import React from "react";
import "./SuperOfferBanner.css";
import placeholderProduct1 from "../../assets/1.webp";
import placeholderProduct2 from "../../assets/1.webp";
import placeholderProduct3 from "../../assets/1.webp";
import placeholderProduct4 from "../../assets/1.webp";
import placeholderProduct5 from "../../assets/1.webp";
import placeholderCart from "../../assets/fresh.webp";
import placeholderImage from "../../assets/fresh-incredible-offer.svg";
import boxIcon from "../../assets/icons8-back-50.png";

function SuperOfferBanner() {
  return (
    <a href="https://www.digikala.com/fresh/incredible-offers/" target="_blank" rel="noopener noreferrer" className="banner-link">
      <div className="banner">
        <div className="banner-content">
          <div className="product-count">
            <img src={boxIcon} alt="بسته بندی" className="product-count-icon" />
            بیش از 100 کالا
          </div>

          <div className="product-imagess">
            <div className="product">
              <img src={placeholderProduct1} alt="محصول 1" />
              <div className="discount-tag">۱۰٪</div>
            </div>
            <div className="product">
              <img src={placeholderProduct2} alt="محصول 2" />
              <div className="discount-tag">۲۰٪</div>
            </div>
            <div className="product">
              <img src={placeholderProduct3} alt="محصول 3" />
              <div className="discount-tag">۳۰٪</div>
            </div>
            <div className="product">
              <img src={placeholderProduct4} alt="محصول 4" />
              <div className="discount-tag">۴۰٪</div>
            </div>
            <div className="product">
              <img src={placeholderProduct5} alt="محصول 5" />
              <div className="discount-tag">۵۰٪</div>
            </div>
          </div>

          <div className="discount-image">
            <img src={placeholderImage} alt="تصویر تخفیف" />
          </div>

          <div className="shopping-cart">
            <img src={placeholderCart} alt="سبد خرید" />
          </div>
        </div>
      </div>
    </a>
  );
}

export default SuperOfferBanner;