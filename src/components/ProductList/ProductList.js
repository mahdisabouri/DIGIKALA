// // import React from 'react';
// // import './ProductList.css';

// // // تصویر پیش‌فرض را ایمپورت کنید و بعداً با تصاویر خود جایگزین کنید
// // import placeholderImage from '../../assets/20درصدoffer.webp';

// // const ProductList = () => {
// //   const products = [
// //     { id: 'CJ-147', price: '50,000', description: 'تخفیف 15%', icon: '🔥', image: placeholderImage },
// //     { id: 'RH-2403', price: '10,000', description: 'هدیه', icon: '🎁', image: placeholderImage },
// //     { id: 'Y', price: '15,000', description: 'گارانتی', icon: '🔧', image: placeholderImage },
// //   ];

// //   return (
// //     <div className="product-list">
// //       <h1 className="title">🌟✨ پیشنهادات ویژه امروز ✨🌟</h1>
// //       <div className="product-grid">
// //         {products.map((product, index) => (
// //           <div key={index} className="product-card">
// //             <img src={product.image} alt={`عکس محصول ${product.id}`} className="product-image" />
// //             <div className="product-info">
// //               <p className="product-id">💻 {product.id}</p>
// //               <p className="product-price">💰 {product.price}</p>
// //               <p className="product-description">{product.icon} {product.description}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductList;




// import React from 'react';
// import './ProductList.css';

// // تصویر پیش‌فرض را ایمپورت کنید و بعداً با تصاویر خود جایگزین کنید
// import train from "../ProductList/image/03-accessories-for-traveling-via-train.webp"

// import pesteh from "../ProductList/image/Pistachio1.webp"
// import money from "../ProductList/image/list-of-world-currencies-2.webp"
// import flower from "../ProductList/image/01-What-to-do-in-the-garden-in-March.webp"

// const ProductList = () => {
//   const products = [
//     { id: 'CJ-147', price: '50,000', description: 'تخفیف 15%', icon: '🔥', image: pesteh, extraText: 'راهنمای جامع خرید بهترین پسته' },

//     { id: 'RH-2403', price: '10,000', description: 'هدیه', icon: '🎁', image:money , extraText: 'راهنمای واحد پول کشورهای مختلف برای مسافران ایرانی' },

//     { id: 'Y', price: '15,000', description: 'گارانتی', icon: '🔧', image: train, extraText: 'فهرست کامل وسایل مورد نیاز سفر با قطار' },


//     { id: 'NEW', price: '20,000', description: 'پیشنهاد ویژه', icon: '🌱', image: flower, extraText: 'آغاز بهار بهترین زمان برای کاشت چه گیاهانی است؟' }
//   ];

//   return (
//     <div className="product-list">
//       <h1 className="title">🌟✨ پیشنهادات ویژه امروز ✨🌟</h1>
//       <div className="product-grid">
//         {products.map((product, index) => (
//           <div key={index} className="product-card">
//             <img src={product.image} alt={`عکس محصول ${product.id}`} className="product-image" />
//             <div className="product-info">
//               <p className="product-id">💻 {product.id}</p>
//               <p className="product-price">💰 {product.price}</p>
//               <p className="product-description">{product.icon} {product.description}</p>
//               <p className="product-extra-text">📌 {product.extraText}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


// import React from 'react';
// import './ProductList.css';

// // تصویر پیش‌فرض را ایمپورت کنید و بعداً با تصاویر خود جایگزین کنید
// import train from "../ProductList/image/03-accessories-for-traveling-via-train.webp";
// import pesteh from "../ProductList/image/Pistachio1.webp";
// import money from "../ProductList/image/list-of-world-currencies-2.webp";
// import flower from "../ProductList/image/01-What-to-do-in-the-garden-in-March.webp";

// const ProductList = () => {
//   const products = [
//     { id: 'CJ-147', image: pesteh, extraText: 'راهنمای جامع خرید بهترین پسته' },
//     { id: 'RH-2403', image: money, extraText: 'راهنمای واحد پول کشورهای مختلف برای مسافران ایرانی' },
//     { id: 'Y', image: train, extraText: 'فهرست کامل وسایل مورد نیاز سفر با قطار' },
//     { id: 'NEW', image: flower, extraText: 'آغاز بهار بهترین زمان برای کاشت چه گیاهانی است؟' }
//   ];

//   return (
//     <div className="product-list">
//       <h1 className="title">🌟✨ پیشنهادات ویژه امروز ✨🌟</h1>
//       <div className="product-grid">
//         {products.map((product, index) => (
//           <div key={index} className="product-card">
//             <img src={product.image} alt={`عکس محصول ${product.id}`} className="product-image" />
//             <div className="product-info">
//               <p className="product-extra-text">📌 {product.extraText}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;





import React from 'react';
import './ProductList.css';

// تصویرهای مربوط به هر کارت
import train from "../ProductList/image/03-accessories-for-traveling-via-train.webp";
import pesteh from "../ProductList/image/Pistachio1.webp";
import money from "../ProductList/image/list-of-world-currencies-2.webp";
import flower from "../ProductList/image/01-What-to-do-in-the-garden-in-March.webp";

const ProductList = () => {
  const products = [
    { 
      id: 'CJ-147', 
      price: '50,000', 
      description: 'تخفیف 15%', 
      icon: '🔥', 
      image: pesteh, 
      extraText: 'راهنمای جامع خرید بهترین پسته', 
      link: 'https://www.digikala.com/mag/pistachio-buying-guide/' 
    },
    { 
      id: 'RH-2403', 
      price: '10,000', 
      description: 'هدیه', 
      icon: '🎁', 
      image: money, 
      extraText: 'راهنمای واحد پول کشورهای مختلف برای مسافران ایرانی', 
      link: 'https://www.digikala.com/mag/list-of-world-currencies/' 
    },
    { 
      id: 'Y', 
      price: '15,000', 
      description: 'گارانتی', 
      icon: '🔧', 
      image: train, 
      extraText: 'فهرست کامل وسایل مورد نیاز سفر با قطار', 
      link: 'https://www.digikala.com/mag/accessories-for-traveling-via-train/' 
    },
    { 
      id: 'NEW', 
      price: '20,000', 
      description: 'پیشنهاد ویژه', 
      icon: '🌱', 
      image: flower, 
      extraText: 'آغاز بهار بهترین زمان برای کاشت چه گیاهانی است؟', 
      link: 'https://www.digikala.com/mag/flower-for-garden-in-spring/' 
    }
  ];

  return (
    <div className="product-list">
      <h1 className="title">🌟✨ پیشنهادات ویژه امروز ✨🌟</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <img src={product.image} alt={`عکس محصول ${product.id}`} className="product-image" />
            </a>
            <div className="product-info">
  
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="product-extra-text"
                style={{textDecoration : "none"}}
              >
                📌 {product.extraText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
