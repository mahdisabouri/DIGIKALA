// import React from "react";
// import "./AmazingOffers.css";
// import offerImage from "../../assets/Amazings.svg"; // آدرس عکس را وارد کنید

// const products = [
//   {
//     id: 1,
//     image: "/placeholder1.png",
//     title: "کرم آبرسان و مرطوب‌کننده",
//     price: "۲۷۰,۰۰۰ تومان",
//     oldPrice: "۴۵۰,۰۰۰ تومان",
//     discount: "۴۰٪",
//   },
//   {
//     id: 2,
//     image: "/placeholder2.png",
//     title: "لامپ ال ای دی ۱۵ وات",
//     price: "۷۹,۰۰۰ تومان",
//     oldPrice: "۱۱۰,۰۰۰ تومان",
//     discount: "۲۸٪",
//   },
//   {
//     id: 3,
//     image: "/placeholder3.png",
//     title: "اسپیکر بلوتوثی قابل حمل",
//     price: "۲,۹۹۹,۰۰۰ تومان",
//     oldPrice: "۳,۹۹۹,۰۰۰ تومان",
//     discount: "۲۵٪",
//   },
//   {
//     id: 4,
//     image: "/placeholder4.png",
//     title: "لپ تاپ لنوو مدل IdeaPad Slim 3",
//     price: "۳۶,۷۹۹,۰۰۰ تومان",
//     oldPrice: "۳۸,۱۹۹,۰۰۰ تومان",
//     discount: "۴٪",
//   },
// ];

// const AmazingOffers = () => {
//   return (
//     <div className="amazing-offers-wrapper">
//       <div className="amazing-offers-container">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="product-image"
//             />
//             <h3 className="product-title">{product.title}</h3>
//             <p className="product-price">{product.price}</p>
//             <p className="product-old-price">{product.oldPrice}</p>
//             <span className="product-discount">{product.discount}</span>
//           </div>
//         ))}
//         <div className="offer-section">
//           <img
//             src={offerImage} // استفاده از عکس ایمپورت شده
//             alt="پیشنهاد شگفت‌ انگیز"
//             className="offer-image"
//           />
//           <button className="offer-button">مشاهده همه</button>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import "./AmazingOffers.css";
import offerImage from "../../assets/Amazings.svg"; // آدرس عکس را وارد کنید
import Amazing_smile from "../../assets/Amazing_smile.svg"; // آدرس عکس تایمر را وارد کنید
import Kerem from "../../assets/کرم آبرسان و مرطوب‌کننده.webp";
import lamp from "../../assets/لامپ ال ای دی ۱۵ وات.webp";
import spiker from "../../assets/اسپیکر بلوتوثی قابل حمل.webp";
import deaPad from "../../assets/deaPad Slim 3.webp";

const products = [
  {
    id: 1,
    image: Kerem,
    alt: "کرم آبرسان و مرطوب‌کننده",
    title: "کرم آبرسان و مرطوب‌کننده",
    price: "۲۷۰,۰۰۰ تومان",
    oldPrice: "۴۵۰,۰۰۰ تومان",
    discount: "۴۰٪",
    link: "https://www.digikala.com/product/dkp-9397105/%DA%A9%D8%B1%D9%85-%D8%A2%D8%A8%D8%B1%D8%B3%D8%A7%D9%86-%D9%84%D8%A7%DB%8C%D8%AA-%D8%A8%DB%8C%D9%88%D8%AA%DB%8C-%D9%85%D8%AF%D9%84-%D8%A2%D8%B1%DA%AF%D8%A7%D9%86-%D8%B4%DB%8C-%D8%A8%D8%A7%D8%AA%D8%B1-200-%D9%85%DB%8C%D9%84%DB%8C-%D9%84%DB%8C%D8%AA%D8%B1-%D8%A8%D9%87-%D9%87%D9%85%D8%B1%D8%A7%D9%87-%DA%A9%D8%B1%D9%85-%D9%85%D8%B1%D8%B7%D9%88%D8%A8-%DA%A9%D9%86%D9%86%D8%AF%D9%87-%D9%84%D8%A7%DB%8C%D8%AA-%D8%A8%DB%8C%D9%88%D8%AA%DB%8C-%D8%AD%D8%AC%D9%85-250-%D9%85%DB%8C%D9%84%DB%8C-%D9%84%DB%8C%D8%AA%D8%B1/",
  },
  {
    id: 2,
    image: lamp,
    alt: "لامپ ال ای دی ۱۵ وات",
    title: "لامپ ال ای دی ۱۵ وات",
    price: "۷۹,۰۰۰ تومان",
    oldPrice: "۱۱۰,۰۰۰ تومان",
    discount: "۲۸٪",
    link: "https://www.digikala.com/product/dkp-17047183/%D9%84%D8%A7%D9%85%D9%BE-%D8%A7%D8%B4%DB%8C-%D9%84%D8%A7%DB%8C%D8%AA%DB%8C%D9%86%DA%AF-%D9%85%D8%AF%D9%84-%D8%AD%D8%A8%D8%A7%D8%A8%DB%8C-%D9%BE%D8%A7%DB%8C%D9%87-e27-%D8%A8%D8%B3%D8%AA%D9%87-%D8%AF%D9%88-%D8%B9%D8%AF%D8%AF%DB%8C/",
  },
  {
    id: 3,
    image: spiker,
    alt: "اسپیکر بلوتوثی قابل حمل",
    title: "اسپیکر بلوتوثی قابل حمل",
    price: "۲,۹۹۹,۰۰۰ تومان",
    oldPrice: "۳,۹۹۹,۰۰۰ تومان",
    discount: "۲۵٪",
    link: "https://www.digikala.com/product/dkp-13363794/%D8%A7%D8%B3%D9%BE%DB%8C%DA%A9%D8%B1-%D8%A8%D9%84%D9%88%D8%AA%D9%88%D8%AB%DB%8C-%D9%82%D8%A7%D8%A8%D9%84-%D8%AD%D9%85%D9%84-%D9%87%D8%A7%DB%8C-%D9%81%DB%8C%D9%88%DA%86%D8%B1-%D9%85%D8%AF%D9%84-gravity/",
  },
  {
    id: 4,
    image: deaPad,
    alt: "deaPad Slim 3",
    title: "لپ تاپ لنوو مدل IdeaPad Slim 3",
    price: "۳۶,۷۹۹,۰۰۰ تومان",
    oldPrice: "۳۸,۱۹۹,۰۰۰ تومان",
    discount: "۴٪",
    link: "https://www.digikala.com/product/dkp-18131655/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-156-%D8%A7%DB%8C%D9%86%DA%86%DB%8C-%D9%84%D9%86%D9%88%D9%88-%D9%85%D8%AF%D9%84-ideapad-slim-3-15irh8-i5-13420h-8gb-lpddr5-512gb-ssd-ips/",
  },
];

const AmazingOffers = () => {
  // زمان اولیه 4 ساعت و 52 دقیقه را به ثانیه تبدیل می‌کنیم
  const [timeLeft, setTimeLeft] = useState(4 * 60 * 60 + 52 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // پاک‌سازی تایمر هنگام ترک کامپوننت
  }, []);

  // تبدیل زمان به ساعت، دقیقه و ثانیه
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // تابع برای هدایت به لینک
  const handleRedirect = (link) => {
    window.open(link, "_blank"); // لینک را در تب جدید باز می‌کند
  };

  return (
    <div className="amazing-offers-wrapper">
      <div className="amazing-offers-container">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleRedirect(product.link)}
          >
            <img
              src={product.image}
              alt={product.alt}
              className="product-image"
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-old-price">{product.oldPrice}</p>
            <span className="product-discount">{product.discount}</span>
          </div>
        ))}
        <div className="offer-section">
          <img
            src={offerImage} // استفاده از عکس ایمپورت شده
            alt="پیشنهاد شگفت‌ انگیز"
            className="offer-image"
          />
          <div className="offer-timer">
            <p className="timer-text">
              {String(hours).padStart(2, "0")}:
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </p>
          </div>
          {/* اضافه کردن عکس زیر تایمر */}
          <img
            src={Amazing_smile} // استفاده از عکس ایمپورت شده
            alt="Amazing_smile"
            className="Amazing_smile"
          />
          {/* دکمه "مشاهده همه" که با کلیک هدایت به لینک می‌کند */}
          <button
            className="offer-button"
            onClick={() =>
              handleRedirect("https://www.digikala.com/incredible-offers/")
            }
          >
            مشاهده همه
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmazingOffers;
