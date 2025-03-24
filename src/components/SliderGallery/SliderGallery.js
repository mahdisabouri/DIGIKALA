// // SliderGallery.js
// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import styles from "./SliderGallery.module.css"; // فایل استایل ماژولار
// import image1 from "../../components/SliderGallery/imagesssssss/5d1dd95b9a98ab343a85b09c4dd0aff553cef013_1741598611.webp";
// import image2 from "../../components/SliderGallery/imagesssssss/75e4dc2851ff84eb0f92dbf526d860e50998bae7_1741018587.webp";
// import image3 from "../../components/SliderGallery/imagesssssss/7ae7211fd56c0e9436550260f92748ef8200d8ec_1742030472.webp";
// import image4 from "../../components/SliderGallery/imagesssssss/80aa00f1fb5df5e93cc6d3252b5724d512e0ae8a_1741427980.webp";
// import image5 from "../../components/SliderGallery/imagesssssss/8474ab06517c5a4930f32a8b7cbbf74781f83afb_1742435700.webp";

// // دیتای نمونه برای اسلایدها (می‌تونی با تصاویر واقعی جایگزین کنی)
// const galleryData = [
//   { id: 1, image:{image1} , alt: "Slide 1" },
//   { id: 2, image: {image2}, alt: "Slide 2" },
//   { id: 3, image: {image3}, alt: "Slide 3" },
//   { id: 4, image: {image4}, alt: "Slide 4" },
//   { id: 5, image: {image5}, alt: "Slide 5" },
// ];

// const SliderGallery = () => {
//   // تنظیمات اسلایدر
//   const settings = {
//     dots: true, // نمایش نقطه‌ها برای ناوبری
//     infinite: true, // اسلاید بی‌نهایت (لوپ)
//     speed: 500, // سرعت انیمیشن (میلی‌ثانیه)
//     slidesToShow: 3, // تعداد اسلایدهای قابل نمایش در یک زمان
//     slidesToScroll: 1, // تعداد اسلایدهایی که با هر کلیک جابه‌جا می‌شن
//     autoplay: true, // پخش خودکار
//     autoplaySpeed: 3000, // فاصله زمانی پخش خودکار (میلی‌ثانیه)
//     responsive: [
//       {
//         breakpoint: 1024, // برای تبلت و کوچکتر
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600, // برای موبایل
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className={styles.sliderContainer}>
//       <Slider {...settings}>
//         {galleryData.map((slide) => (
//           <div key={slide.id} className={styles.slideItem}>
//             <img src={slide.image} alt={slide.alt} className={styles.slideImage} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SliderGallery;

// // SliderGallery.js
// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import styles from "./SliderGallery.module.css"; // فایل استایل ماژولار
// import image1 from "../../components/SliderGallery/imagesssssss/5d1dd95b9a98ab343a85b09c4dd0aff553cef013_1741598611.webp";
// import image2 from "../../components/SliderGallery/imagesssssss/75e4dc2851ff84eb0f92dbf526d860e50998bae7_1741018587.webp";
// import image3 from "../../components/SliderGallery/imagesssssss/7ae7211fd56c0e9436550260f92748ef8200d8ec_1742030472.webp";
// import image4 from "../../components/SliderGallery/imagesssssss/80aa00f1fb5df5e93cc6d3252b5724d512e0ae8a_1741427980.webp";
// import image5 from "../../components/SliderGallery/imagesssssss/8474ab06517c5a4930f32a8b7cbbf74781f83afb_1742435700.webp";

// // دیتای نمونه برای اسلایدها
// const galleryData = [
//   { id: 1, image: image1, alt: "Slide 1" }, // مستقیم از image1 استفاده کن
//   { id: 2, image: image2, alt: "Slide 2" },
//   { id: 3, image: image3, alt: "Slide 3" },
//   { id: 4, image: image4, alt: "Slide 4" },
//   { id: 5, image: image5, alt: "Slide 5" },
// ];

// const SliderGallery = () => {
//   // تنظیمات اسلایدر
//   const settings = {
//     dots: true, // نمایش نقطه‌ها برای ناوبری
//     infinite: true, // اسلاید بی‌نهایت (لوپ)
//     speed: 500, // سرعت انیمیشن (میلی‌ثانیه)
//     slidesToShow: 3, // تعداد اسلایدهای قابل نمایش در یک زمان
//     slidesToScroll: 1, // تعداد اسلایدهایی که با هر کلیک جابه‌جا می‌شن
//     autoplay: true, // پخش خودکار
//     autoplaySpeed: 3000, // فاصله زمانی پخش خودکار (میلی‌ثانیه)
//     responsive: [
//       {
//         breakpoint: 1024, // برای تبلت و کوچکتر
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600, // برای موبایل
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className={styles.sliderContainer}>
//       <Slider {...settings}>
//         {galleryData.map((slide) => (
//           <div key={slide.id} className={styles.slideItem}>
//             <img src={slide.image} alt={slide.alt} className={styles.slideImage} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// // export default SliderGallery;
// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import styles from "./SliderGallery.module.css"; // فایل استایل ماژولار
// import image1 from "../../components/SliderGallery/imagesssssss/5d1dd95b9a98ab343a85b09c4dd0aff553cef013_1741598611.webp";
// import image2 from "../../components/SliderGallery/imagesssssss/75e4dc2851ff84eb0f92dbf526d860e50998bae7_1741018587.webp";
// import image3 from "../../components/SliderGallery/imagesssssss/7ae7211fd56c0e9436550260f92748ef8200d8ec_1742030472.webp";
// import image4 from "../../components/SliderGallery/imagesssssss/80aa00f1fb5df5e93cc6d3252b5724d512e0ae8a_1741427980.webp";
// import image5 from "../../components/SliderGallery/imagesssssss/8474ab06517c5a4930f32a8b7cbbf74781f83afb_1742435700.webp";

// // دیتای نمونه برای اسلایدها
// const galleryData = [
//   {
//     id: 1,
//     image: image1,
//     alt: "Slide 1",
//     link: "https://www.digikala.com/landings/new-app/",
//   },
//   {
//     id: 2,
//     image: image2,
//     alt: "Slide 2",
//     link: "https://www.digikala.com/landing/beautyendofyearoff/?&promo_name=%D8%A2%D8%B1%D8%A7%DB%8C%D8%B4%DB%8C+%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA%DB%8C+%D9%86%D8%B5%D9%81+%D9%82%DB%8C%D9%85%D8%AA&promo_position=home_slider_new_v2&promo_creative=192974&bCode=192974",
//   },
//   {
//     id: 3,
//     image: image3,
//     alt: "Slide 3",
//     link: "https://www.digikala.com/landing/fmcgramadan/?&promo_name=%D8%B1%D9%85%D8%B6%D8%A7%D9%86+%D8%B3%D9%88%D9%BE%D8%B1%D9%85%D8%A7%D8%B1%DA%A9%D8%AA%DB%8C&promo_position=home_slider_new_v2&promo_creative=194788&bCode=194788",
//   },
//   {
//     id: 4,
//     image: image4,
//     alt: "Slide 4",
//     link: "https://www.digikala.com/landing/nowruz1404/?&promo_name=%D9%86%D9%88%D8%B1%D9%88%D8%B2+%D9%BE%D8%B1%D8%AA%D8%AE%D9%81%DB%8C%D9%81&promo_position=home_slider_new_v2&promo_creative=195353&bCode=195353",
//   },
//   {
//     id: 5,
//     image: image5,
//     alt: "Slide 5",
//     link: "https://www.digikala.com/landing/nowruz1404-home/?&promo_name=%DA%AF%D8%B4%D8%AA%E2%80%8C%D9%88%DA%AF%D8%B0%D8%A7%D8%B1+%D9%86%D9%88%D8%B1%D9%88%D8%B2%DB%8C+-+%D8%B9%DB%8C%D8%AF+1404+-+%D9%87%D9%88%D9%85&promo_position=home_slider_new_v2&promo_creative=196199&bCode=196199",
//   },
// ];

// const SliderGallery = () => {
//   // تنظیمات اسلایدر
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1, // نمایش یک اسلاید در هر بار
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className={styles.sliderContainer}>
//       <Slider {...settings}>
//         {galleryData.map((slide) => (
//           <div key={slide.id} className={styles.slideItem}>
//             <a href={slide.link} target="_blank" rel="noopener noreferrer">
//               <img
//                 src={slide.image}
//                 alt={slide.alt}
//                 className={styles.slideImage}
//               />
//             </a>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SliderGallery;


import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./SliderGallery.module.css"; // استایل ماژولار
import image1 from "../../components/SliderGallery/imagesssssss/5d1dd95b9a98ab343a85b09c4dd0aff553cef013_1741598611.webp";
import image2 from "../../components/SliderGallery/imagesssssss/75e4dc2851ff84eb0f92dbf526d860e50998bae7_1741018587.webp";
import image3 from "../../components/SliderGallery/imagesssssss/7ae7211fd56c0e9436550260f92748ef8200d8ec_1742030472.webp";
import image4 from "../../components/SliderGallery/imagesssssss/80aa00f1fb5df5e93cc6d3252b5724d512e0ae8a_1741427980.webp";
import image5 from "../../components/SliderGallery/imagesssssss/8474ab06517c5a4930f32a8b7cbbf74781f83afb_1742435700.webp";

// دیتای نمونه برای اسلایدها
const galleryData = [
  { id: 1, image: image1, alt: "Slide 1" },
  { id: 2, image: image2, alt: "Slide 2" },
  { id: 3, image: image3, alt: "Slide 3" },
  { id: 4, image: image4, alt: "Slide 4" },
  { id: 5, image: image5, alt: "Slide 5" },
];

const SliderGallery = () => {
  const sliderRef = useRef(null); // تعریف ref برای کنترل اسلایدر

  // تنظیمات اسلایدر
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // هر بار فقط یک اسلاید نمایش داده شود
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true, // ارتفاع اسلایدها را تنظیم کند
  };

  return (
    <div className={styles.sliderContainer}>
      {/* دکمه قبلی */}
      <button
        className={styles.prevButton}
        onClick={() => sliderRef.current.slickPrev()}
      >
        ◀
      </button>

      {/* اسلایدر */}
      <Slider ref={sliderRef} {...settings}>
        {galleryData.map((slide) => (
          <div key={slide.id} className={styles.slideItem}>
            <img
              src={slide.image}
              alt={slide.alt}
              className={styles.slideImage}
            />
          </div>
        ))}
      </Slider>

      {/* دکمه بعدی */}
      <button
        className={styles.nextButton}
        onClick={() => sliderRef.current.slickNext()}
      >
        ▶
      </button>
    </div>
  );
};

export default SliderGallery;
