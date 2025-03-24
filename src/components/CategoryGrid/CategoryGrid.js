// // import React from "react";
// // import "./CategoryGrid.css";

// // const categories = [
// //   { title: "طلا و نقره", image: "placeholder1.png" },
// //   { title: "مد و پوشاک", image: "placeholder2.png" },
// //   { title: "ابزار آلات و تجهیزات", image: "placeholder3.png" },
// //   { title: "لوازم خانگی برقی", image: "placeholder4.png" },
// //   { title: "خودرو و موتور سیکلت", image: "placeholder5.png" },
// //   { title: "آرایشی بهداشتی", image: "placeholder6.png" },
// //   { title: "خانه و آشپزخانه", image: "placeholder7.png" },
// //   { title: "کالای دیجیتال", image: "placeholder8.png" },
// //   { title: "موبایل", image: "placeholder9.png" },
// //   { title: "کالای کارکرده", image: "placeholder10.png" },
// //   { title: "محصولات بومی و محلی", image: "placeholder11.png" },
// //   { title: "اسباب بازی، کودک و نوزاد", image: "placeholder12.png" },
// //   { title: "کالای خوراکی و اساسی", image: "placeholder13.png" },
// //   { title: "کارت هدیه و گیفت کارت", image: "placeholder14.png" },
// //   { title: "ورزش و سفر", image: "placeholder15.png" },
// //   { title: "کتاب، لوازم تحریر و هنر", image: "placeholder16.png" },
// //   { title: "تجهیزات پزشکی و سلامت", image: "placeholder17.png" },
// // ];

// // function CategoryGrid() {
// //   return (
// //     <div className="category-container">
// //       <h2 className="category-title">خرید بر اساس دسته‌بندی</h2>
// //       <div className="category-grid">
// //         {categories.map((category, index) => (
// //           <div key={index} className="category-item">
// //             <img src={category.image} alt={category.title} className="category-image" />
// //             <p className="category-text">{category.title}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default CategoryGrid;



// import React from "react";
// import "./CategoryGrid.css";
// import tala from "../../assets/طلا.jpg";
// import pushak from "../../assets/لباس.jpg";
// import abzar from "../../assets/ابزار.jpg";
// import lavazem from "../../assets/یخچال.jpg";
// import motor from "../../assets/موتور.jpg";
// import behdasht from "../../assets/ماشین ریش.jpg";
// import ashpaz from "../../assets/آشپزخانه.jpg";
// import digital from "../../assets/کالای دیجیتال.jpg";
// import mobile from "../../assets/موبایل.jpg";
// import kala from "../../assets/کارکرده.jpg";
// import boomi from "../../assets/محصولات بومی.jpg";
// import asbab from "../../assets/اسباب بازی.jpg";
// import khoraki from "../../assets/خوراکی.jpg";
// import giftcard from "../../assets/کارت هدیه.jpg";
// import sport from "../../assets/ورزش.jpg";
// import book from "../../assets/کتاب.jpg";
// import doctor from "../../assets/پزشکی.jpg";


// const categories = [
//   { title: "طلا و نقره", image: tala },
//   { title: "مد و پوشاک", image: pushak },
//   { title: "ابزار آلات و تجهیزات", image: abzar },
//   { title: "لوازم خانگی برقی", image: lavazem },
//   { title: "خودرو و موتور سیکلت", image: motor },
//   { title: "آرایشی بهداشتی", image: behdasht },
//   { title: "خانه و آشپزخانه", image: ashpaz },
//   { title: "کالای دیجیتال", image: digital },
//   { title: "موبایل", image: mobile },
//   { title: "کالای کارکرده", image: kala },
//   { title: "محصولات بومی و محلی", image: boomi },
//   { title: "اسباب بازی، کودک و نوزاد", image: asbab },
//   { title: "کالای خوراکی و اساسی", image:khoraki },
//   { title: "کارت هدیه و گیفت کارت", image: giftcard },
//   { title: "ورزش و سفر", image: sport},
//   { title: "کتاب، لوازم تحریر و هنر", image: book },
//   { title: "تجهیزات پزشکی و سلامت", image: doctor },
// ];

// function CategoryGrid() {
//   // تقسیم‌بندی آیتم‌ها به دو ردیف
//   const firstRow = categories.slice(0, 9);
//   const secondRow = categories.slice(9);

//   return (
//     <div className="category-container">
//       <h2 className="category-title">خرید بر اساس دسته‌بندی</h2>
//       <div className="category-row">
//         {firstRow.map((category, index) => (
//           <div key={index} className="category-item">
//             <img
//               src={category.image}
//               alt={category.title}
//               className="category-image"
//             />
//             <p className="category-text">{category.title}</p>
//           </div>
//         ))}
//       </div>
//       <div className="category-row">
//         {secondRow.map((category, index) => (
//           <div key={index} className="category-item">
//             <img
//               src={category.image}
//               alt={category.title}
//               className="category-image"
//             />
//             <p className="category-text">{category.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoryGrid;


// src/components/CategoryGrid.js
import React from "react";
import "./CategoryGrid.css";
import links from "../../assets/links";
import tala from "../../assets/طلا.jpg";
import pushak from "../../assets/لباس.jpg";
import abzar from "../../assets/ابزار.jpg";
import lavazem from "../../assets/یخچال.jpg";
import motor from "../../assets/موتور.jpg";
import behdasht from "../../assets/ماشین ریش.jpg";
import ashpaz from "../../assets/آشپزخانه.jpg";
import digital from "../../assets/کالای دیجیتال.jpg";
import mobile from "../../assets/موبایل.jpg";
import kala from "../../assets/کارکرده.jpg";
import boomi from "../../assets/محصولات بومی.jpg";
import asbab from "../../assets/اسباب بازی.jpg";
import khoraki from "../../assets/خوراکی.jpg";
import giftcard from "../../assets/کارت هدیه.jpg";
import sport from "../../assets/ورزش.jpg";
import book from "../../assets/کتاب.jpg";
import doctor from "../../assets/پزشکی.jpg";

const categories = [
  { title: "طلا و نقره", image: tala, link: links.gold },
  { title: "مد و پوشاک", image: pushak, link: links.apparel },
  { title: "ابزار آلات و تجهیزات", image: abzar, link: links.tools },
  { title: "لوازم خانگی برقی", image: lavazem, link: links.homeAppliance },
  { title: "خودرو و موتور سیکلت", image: motor, link: links.vehicles },
  { title: "آرایشی بهداشتی", image: behdasht, link: links.personalCare },
  { title: "خانه و آشپزخانه", image: ashpaz, link: links.homeAndKitchen },
  { title: "کالای دیجیتال", image: digital, link: links.digitalGoods },
  { title: "موبایل", image: mobile, link: links.mobile },
  { title: "کالای کارکرده", image: kala, link: links.usedGoods },
  { title: "محصولات بومی و محلی", image: boomi, link: links.ruralProducts },
  { title: "اسباب بازی، کودک و نوزاد", image: asbab, link: links.toysAndBaby },
  { title: "کالای خوراکی و اساسی", image: khoraki, link: links.food },
  { title: "کارت هدیه و گیفت کارت", image: giftcard, link: links.giftCard },
  { title: "ورزش و سفر", image: sport, link: links.sport },
  { title: "کتاب، لوازم تحریر و هنر", image: book, link: links.booksAndMedia },
  { title: "تجهیزات پزشکی و سلامت", image: doctor, link: links.medicalEquipment }
];

function CategoryGrid() {
  const firstRow = categories.slice(0, 9);
  const secondRow = categories.slice(9);

  return (
    <div className="category-container">
      <h2 className="category-title">خرید بر اساس دسته‌بندی</h2>
      <div className="category-row">
        {firstRow.map((category, index) => (
          <div key={index} className="category-item">
            <a href={category.link} className="category-link">
              <img
                src={category.image}
                alt={category.title}
                className="category-image"
              />
              <p className="category-text">{category.title}</p>
            </a>
          </div>
        ))}
      </div>
      <div className="category-row">
        {secondRow.map((category, index) => (
          <div key={index} className="category-item">
            <a href={category.link} className="category-link">
              <img
                src={category.image}
                alt={category.title}
                className="category-image"
              />
              <p className="category-text">{category.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;
