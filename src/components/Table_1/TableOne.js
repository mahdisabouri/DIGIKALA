// import React from "react";
// import "./Table_1.css"; // فایل استایل برای Table_1
// import fire_power from "../Table_1/images/fire_power.webp";
// import start from "../Table_1/images/star.webp";
// import TNT from "../Table_1/images/TNT.webp";
// import ST from "../Table_1/images/ST.webp";
// import vazlin from "../Table_1/images/vazlin.webp";
// import vitamin30 from "../Table_1/images/vitamin30.webp";
// import sevda from "../Table_1/images/sevda.webp";
// import spray from "../Table_1/images/spray.webp";
// import vax from "../Table_1/images/vax.webp";
// import goshvareh from "../Table_1/images/goshvareh.jpg";
// import dastband from "../Table_1/images/dastband.webp";

// const Table_1 = () => {
//   const categories = [
//     {
//       title: "کرم و مرطوب‌کننده",
//       products: [
//         { imageUrl: ST, name: "کرم مرطوب کننده درخت چای اس تی ایوز" },
//         { imageUrl: vazlin, name: "وازلین لفو" },
//         { imageUrl: vitamin30, name: "ویتامین C" },
//         { imageUrl: sevda, name: "ژل آبرسان سودا،" },
//       ],
//     },
//     {
//       title: "موبر",
//       products: [
//         { imageUrl: spray, name: "اسپری موبر بدن اسکلاره " },
//         { imageUrl: vax, name: "وکس موبر کوئین" },
//       ],
//     },
//     {
//       title: "انرژی‌زا و نوشیدنی",
//       products: [
//         { imageUrl: fire_power, name: "Fire Power" },
//         { imageUrl: start, name: "Star" },
//         { imageUrl: TNT, name: "TNT" },
//       ],
//     },
//     {
//       title: "پیرسینگ زنانه و مردانه",
//       products: [
//         { imageUrl: goshvareh, name: "پیرسینگ گوش ناکسیگو" },
//         { imageUrl: dastband, name: "دستبند زنانه" },
//       ],
//     },
//   ];

//   return (
//     <div className="table-1">
//       <h1>محصولات</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>دسته‌بندی</th>
//             <th>نام محصول</th>
//             <th>تصویر</th>
//             <th>عملیات</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map((category, categoryIndex) =>
//             category.products.map((product, productIndex) => (
//               <tr key={`${categoryIndex}-${productIndex}`}>
//                 {productIndex === 0 && (
//                   <td rowSpan={category.products.length}>{category.title}</td>
//                 )}
//                 <td>{product.name}</td>
//                 <td>
//                   {product.imageUrl ? (
//                     <img
//                       src={product.imageUrl}
//                       alt={product.name}
//                       className="product-image"
//                     />
//                   ) : (
//                     <div className="placeholder">عکس</div>
//                   )}
//                 </td>
//                 <td>
//                   <button>افزودن به سبد</button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table_1;

// import React from "react";
// import "./Table_1.css";
// import fire_power from "../Table_1/images/fire_power.webp";
// import start from "../Table_1/images/star.webp";
// import TNT from "../Table_1/images/TNT.webp";
// import ST from "../Table_1/images/ST.webp";
// import vazlin from "../Table_1/images/vazlin.webp";
// import vitamin30 from "../Table_1/images/vitamin30.webp";
// import sevda from "../Table_1/images/sevda.webp";
// import spray from "../Table_1/images/spray.webp";
// import vax from "../Table_1/images/vax.webp";
// import goshvareh from "../Table_1/images/goshvareh.jpg";
// import dastband from "../Table_1/images/dastband.webp";

// const Table_1 = () => {
//   const categories = [
//     {
//       title: "کرم و مرطوب‌کننده",
//       products: [
//         { imageUrl: ST, name: "کرم مرطوب کننده درخت چای اس تی ایوز" },
//         { imageUrl: vazlin, name: "وازلین لفو" },
//         { imageUrl: vitamin30, name: "ویتامین C" },
//         { imageUrl: sevda, name: "ژل آبرسان سودا" },
//       ],
//     },
//     {
//       title: "موبر",
//       products: [
//         { imageUrl: spray, name: "اسپری موبر بدن اسکلاره" },
//         { imageUrl: vax, name: "وکس موبر کوئین" },
//       ],
//     },
//     {
//       title: "انرژی‌زا و نوشیدنی",
//       products: [
//         { imageUrl: fire_power, name: "Fire Power" },
//         { imageUrl: start, name: "Star" },
//         { imageUrl: TNT, name: "TNT" },
//       ],
//     },
//     {
//       title: "پیرسینگ زنانه و مردانه",
//       products: [
//         { imageUrl: goshvareh, name: "پیرسینگ گوش ناکسیگو" },
//         { imageUrl: dastband, name: "دستبند زنانه" },
//       ],
//     },
//   ];

//   return (
//     <div className="table-1">
//       <h1>محصولات</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>دسته‌بندی</th>
//             <th>نام محصول</th>
//             <th>تصویر</th>
//             <th>عملیات</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map((category, categoryIndex) =>
//             category.products.map((product, productIndex) => (
//               <tr key={`${categoryIndex}-${productIndex}`}>
//                 {productIndex === 0 && (
//                   <td rowSpan={category.products.length} className="category">
//                     {category.title}
//                   </td>
//                 )}
//                 <td className="product-name">{product.name}</td>
//                 <td>
//                   {product.imageUrl ? (
//                     <img
//                       src={product.imageUrl}
//                       alt={product.name}
//                       className="product-image"
//                     />
//                   ) : (
//                     <div className="placeholder">عکس</div>
//                   )}
//                 </td>
//                 <td>
//                   <button>افزودن به سبد</button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table_1;

import React from "react";
import "./TableOne.css";
import categoryLinks from "../../assets/categoryLinks";
import fire_power from "../../components/Table_1/images/fire_power.webp";
import star from "../../components/Table_1/images/star.webp";
import TNT from "../../components/Table_1/images/TNT.webp";
import ST from "../../components/Table_1/images//ST.webp";
import vazlin from "../../components/Table_1/images/vazlin.webp";
import vitamin30 from "../../components/Table_1/images//vitamin30.webp";
import sevda from "../../components/Table_1/images/sevda.webp";
import spray from "../../components/Table_1/images/spray.webp";
import vax from "../../components/Table_1/images/vax.webp";
import goshvareh from "../../components/Table_1/images/goshvareh.jpg";
import dastband from "../../components/Table_1/images/dastband.webp";

const TableOne = () => {
  const categories = [
    {
      title: "کرم و مرطوب‌کننده",
      products: [
        { imageUrl: ST, name: "کرم مرطوب کننده درخت چای اس تی ایوز" },
        { imageUrl: vazlin, name: "وازلین لفو" },
        { imageUrl: vitamin30, name: "ویتامین C" },
        { imageUrl: sevda, name: "ژل آبرسان سودا" },
      ],
    },
    {
      title: "موبر",
      products: [
        { imageUrl: spray, name: "اسپری موبر بدن اسکلاره" },
        { imageUrl: vax, name: "وکس موبر کوئین" },
      ],
    },
    {
      title: "انرژی‌زا و نوشیدنی",
      products: [
        { imageUrl: fire_power, name: "Fire Power" },
        { imageUrl: star, name: "Star" },
        { imageUrl: TNT, name: "TNT" },
      ],
    },
    {
      title: "پیرسینگ زنانه و مردانه",
      products: [
        { imageUrl: goshvareh, name: "پیرسینگ گوش ناکسیگو" },
        { imageUrl: dastband, name: "دستبند زنانه" },
      ],
    },
  ];

  return (
    <div className="table-1">
      <h1>محصولات</h1>
      <table>
        <thead>
          <tr>
            <th>دسته‌بندی</th>
            <th>نام محصول</th>
            <th>تصویر</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, categoryIndex) =>
            category.products.map((product, productIndex) => {
              // تعیین لینک محصول
              const productLink =
                categoryLinks[category.title]?.[product.name] || "#";
              return (
                <tr key={`${categoryIndex}-${productIndex}`}>
                  {productIndex === 0 && (
                    <td rowSpan={category.products.length} className="category">
                      <a
                        href={categoryLinks[category.title] || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="category-link"
                      >
                        {category.title}
                      </a>
                    </td>
                  )}
                  <td className="product-name">
                    <a
                      href={productLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {product.name}
                    </a>
                  </td>

                  <td>
                    {product.imageUrl ? (
                      <a
                        href={categoryLinks[category.title]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="product-images"
                        />
                      </a>
                    ) : (
                      <div className="placeholder">عکس</div>
                    )}
                  </td>
                  <td>
                    <button>افزودن به سبد</button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableOne;
