import React from "react";
import "./HotProducts.css";

// ایمپورت تصاویر
import img1 from "../../components/HotProducts/images/ab8b72704f7f33888dd1f3ec7007a87add200859_1685517414.webp";
import spiker from "../../components/HotProducts/images/spiker.webp";
import zarfshooii from "../../components/HotProducts/images/zarfshooii.webp";
import ofogh from "../../components/HotProducts/images/ofogh.webp";
import multi_daly from "../../components/HotProducts/images/multi_daly.webp";
import beard from "../../components/HotProducts/images/beard.webp";
import Achahar from "../../components/HotProducts/images/Achahar.webp";
import bokhur from "../../components/HotProducts/images/bokhur.webp";
import ardoo from "../../components/HotProducts/images/ardoo.webp";
import glasses_holder from "../../components/HotProducts/images/glasses_holder.webp";
import sorkhkon from "../../components/HotProducts/images/sorkhkon.webp";
import light from "../../components/HotProducts/images/light.webp";

const hotProducts = [
  { id: 1, title: "هندزفری ایکس او مدل EP29 TYPE-C", image: img1, link: "https://www.digikala.com/product/dkp-11509932/" },
  { id: 2, title: "اسپیکر بلوتوثی قابل حمل تسکو مدل TS 23030", image: spiker, link: "https://www.digikala.com/product/dkp-9426963/" },
  { id: 3, title: "ماشین لباسشویی نیمه اتوماتیک ریتون مدل RWM-1402 T", image: zarfshooii, link: "https://www.digikala.com/product/dkp-17956705/" },
  { id: 4, title: "کاغذ رنگی A4 افق مدل رنگ و وارنگ بسته 15 عددی", image: ofogh, link: "https://www.digikala.com/product/dkp-6010873/" },
  { id: 5, title: "قرص مولتی دیلی دیلی گلوک بسته 30 عددی", image: multi_daly, link: "https://www.digikala.com/product/dkp-10631178/" },
  { id: 6, title: "سرویس روتختی مدل چهره های مینیمال 5009 یک نفره 5 تکه", image: beard, link: "https://www.digikala.com/product/dkp-12851358/" },
  { id: 7, title: "آچار فرانسه رونیکس مدل RH-2403 سایز 10 اینچ", image: Achahar },
  { id: 8, title: "بخور سرد کویین مدل QH-760 بسته", image: bokhur, link: "https://www.digikala.com/product/dkp-1893464/" },
  { id: 9, title: "اردو خوری مدل خوشید", image: ardoo, link: "https://www.digikala.com/product/dkp-14512514/" },
  { id: 10, title: "نگهدارنده عینک خودرو کد CJ_147", image: glasses_holder, link: "https://www.digikala.com/product/dkp-2138555/" },
  { id: 11, title: "سرخ کن بدون روغن سوناشی SAF-900", image: sorkhkon, link: "https://www.digikala.com/product/dkp-11116732/" },
  { id: 12, title: "چراغ پیشانی اسمال سان مدل ZY-BT006", image: light, link: "https://www.digikala.com/product/dkp-2203004/" },
];

const HotProducts = () => {
  return (
    <div className="hot-products-container">
      <h2 className="hot-title">🔥 داغ ترین چند ساعت گذشته</h2>
      <div className="hot-products-grid">
        {hotProducts.map((product, index) => (
          <div key={product.id} className="hot-product-card">
            <span className="product-rank">{index + 1}</span>
            <a href={product.link} target="_blank" rel="noopener noreferrer" >
              <img src={product.image} alt={product.title} className="hot-product-image" />
            </a>
            <p className="hot-product-title">
              <a href={product.link} target="_blank" rel="noopener noreferrer"
              style={{textDecoration : "none" , color : "black"}}
              >
                {product.title}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotProducts;
