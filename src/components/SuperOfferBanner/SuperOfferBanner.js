import React from "react";
import "./SuperOfferBanner.css";
import placeholderProduct1 from "../../assets/1.webp";
import ton from "../../components/SuperOfferBanner/images/ton.webp";
import hel from "../../components/SuperOfferBanner/images/hel.webp";
import honey from "../../components/SuperOfferBanner/images/honey.webp";
import ash from "../../components/SuperOfferBanner/images/ash.webp";
import placeholderCart from "../../assets/fresh.webp";
import placeholderImage from "../../assets/fresh-incredible-offer.svg";
import boxIcon from "../../assets/icons8-back-50.png";

function SuperOfferBanner() {
  return (
    <a
      href="https://www.digikala.com/fresh/incredible-offers/"
      target="_blank"
      rel="noopener noreferrer"
      className="banner-link"
    >
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
              <img src={ton} alt="محصول 2" />
              <div className="discount-tag">۲۰٪</div>
            </div>
            <div className="product">
              <img src={hel} alt="محصول 3" />
              <div className="discount-tag">۳۰٪</div>
            </div>
            <div className="product">
              <img src={ash} alt="محصول 4" />
              <div className="discount-tag">۴۰٪</div>
            </div>
            <div className="product">
              <img src={honey} alt="محصول 5" />
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
