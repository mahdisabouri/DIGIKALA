// // import React, { useState } from "react";
// // import { FaMapMarkerAlt } from "react-icons/fa";
// // import "./MenuLocation.css";

// // const MenuLocation = () => {
// //   const [location, setLocation] = useState("سمنان");
// //   const locations = ["تهران", "اصفهان", "مشهد", "تبریز", "شیراز", "سمنان"];

// //   const handleLocationChange = (event) => {
// //     setLocation(event.target.value);
// //   };

// //   return (
// //     <div className="menu-location">
// //       <div className="location-selector">
// //         <FaMapMarkerAlt className="location-icon" />
// //         <select value={location} onChange={handleLocationChange}>
// //           {locations.map((loc, index) => (
// //               <option key={index} value={loc}>
// //               {loc}
// //             </option>
// //           ))}
// //         </select>
// //           <span>ارسال به </span>
// //       </div>
// //       <div className="menu-items">
// //         <span>دسته‌بندی کالاها</span>
// //         <span>|</span>
// //         <span>شگفت‌انگیزها</span>
// //         <span>|</span>
// //         <span>سوپرمارکت</span>
// //         <span>|</span>
// //         <span>پرفروش‌ترین‌ها</span>
// //         <span>|</span>
// //         <span>کالای دیجیتال</span>
// //         <span>|</span>
// //         <span>سوالی دارید؟</span>
// //         <span>|</span>
// //         <span>در دیجی‌کالا بفروشید!</span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MenuLocation;

// import React, { useState } from "react";
// import { FaMapMarkerAlt, FaBars } from "react-icons/fa";
// import "./MenuLocation.css";

// const MenuLocation = () => {
//   const [location, setLocation] = useState("سمنان");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const locations = ["تهران", "اصفهان", "مشهد", "تبریز", "شیراز", "سمنان"];

//   const handleLocationChange = (event) => {
//     setLocation(event.target.value);
//   };

//   return (
//     <div className="menu-location">
//       <div className="location-selector">
//         <FaMapMarkerAlt className="location-icon" />
//         <select value={location} onChange={handleLocationChange}>
//           {locations.map((loc, index) => (
//             <option key={index} value={loc}>
//               {loc}
//             </option>
//           ))}
//         </select>
//         <span>ارسال به </span>
//       </div>
//       <div className="menu-items">
//         <span>! در دیجی‌کالا بفروشید</span>
//         <span>|</span>
//         <span>سوالی دارید؟</span>

//         <span>|</span>
//         <span>پرفروش‌ترین‌ها</span>
//         <span>|</span>
//         <span>طلای دیجیتال</span>
//         <span>|</span>
//         <span>سوپرمارکت</span>

//         <span>|</span>

//         <span>شگفت‌انگیزها</span>

//         <div className="menu-category">
//           <span> | </span>
//           <span>دسته‌بندی کالاها</span>
//           <span> </span>
//           <FaBars
//             className="menu-icon"
//             onClick={() => setMenuOpen(!menuOpen)}
//           />
//         </div>
//         {menuOpen && (
//           <div className="dropdown-menu">
//             <span>موبایل</span>
//             <span>لپ‌تاپ</span>
//             <span>لوازم خانگی</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MenuLocation;

// import React, { useState } from "react";

// import { FaMapMarkerAlt, FaBars, FaTag, FaShoppingCart, FaFire, FaCoins } from "react-icons/fa";
// import "./MenuLocation.css";

// const MenuLocation = () => {
//   const [location, setLocation] = useState("سمنان");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const locations = ["تهران", "اصفهان", "مشهد", "تبریز", "شیراز", "سمنان"];

//   const handleLocationChange = (event) => {
//     setLocation(event.target.value);
//   };

//   return (
//     <div className="menu-location">
//       <div className="location-selector">
//         <FaMapMarkerAlt className="location-icon" />
//         <select value={location} onChange={handleLocationChange}>
//           {locations.map((loc, index) => (
//             <option key={index} value={loc}>
//               {loc}
//             </option>
//           ))}
//         </select>
//         <span>ارسال به </span>
//       </div>
//       <div className="menu-items">
//         <span>! در دیجی‌کالا بفروشید</span>
//         <span>|</span>
//         <span>سوالی دارید؟</span>
//         <span>|</span>
//         <span>
//           پرفروش‌ترین‌ها <FaFire className="menu-icon" />
//         </span>
//         <span>|</span>
//         <span>
//           طلای دیجیتال <FaCoins className="menu-icon" />
//         </span>
//         <span>|</span>
//         <span>
//           سوپرمارکت <FaShoppingCart className="menu-icon" />
//         </span>
//         <span>|</span>
//         <span>
//           شگفت‌انگیزها <FaTag className="menu-icon" />
//         </span>
//         <div className="menu-category">
//           <span> | </span>
//           <span>دسته‌بندی کالاها</span>
//           <FaBars className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
//         </div>
//         {menuOpen && (
//           <div className="dropdown-menu">
//             <span>موبایل</span>
//             <span>لپ‌تاپ</span>
//             <span>لوازم خانگی</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MenuLocation;

// import React, { useState } from "react";
// import { FaMapMarkerAlt, FaBars, FaTag, FaShoppingCart, FaFire, FaCoins } from "react-icons/fa";
// import "./MenuLocation.css";

// const MenuLocation = () => {
//   const [location, setLocation] = useState("سمنان");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const locations = ["تهران", "اصفهان", "مشهد", "تبریز", "شیراز", "سمنان"];

//   const menuItems = ["موبایل", "لپ‌تاپ", "لوازم خانگی", "کتاب", "پوشاک", "ورزشی"];

//   const handleLocationChange = (event) => {
//     setLocation(event.target.value);
//   };

//   return (
//     <div className="menu-location">
//       <div className="location-selector">
//         <FaMapMarkerAlt className="location-icon" />
//         <select value={location} onChange={handleLocationChange}>
//           {locations.map((loc, index) => (
//             <option key={index} value={loc}>
//               {loc}
//             </option>
//           ))}
//         </select>
//         <span>ارسال به </span>
//       </div>
//       <div className="menu-items">
//         <span>! در دیجی‌کالا بفروشید</span>
//         <span>|</span>
//         <span>سوالی دارید؟</span>
//         <span>|</span>
//         <span>
//           پرفروش‌ترین‌ها <FaFire className="menu-icon" />
//         </span>
//         <span>|</span>
//         <span>
//           طلای دیجیتال <FaCoins className="menu-icon" />
//         </span>
//         <span>|</span>
//         <span>
//           سوپرمارکت <FaShoppingCart className="menu-icon" />
//         </span>
//         <span>|</span>
//         <span>
//           شگفت‌انگیزها <FaTag className="menu-icon" />
//         </span>
//         <span>|</span>
//         <div className="menu-category">
//           <span>دسته‌بندی کالاها</span>
//           <FaBars className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
//         </div>
//         {menuOpen && (
//           <div className="inline-menu">
//             {menuItems.map((item, index) => (
//               <span key={index}>{item}</span>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MenuLocation;

import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaBars,
  FaTag,
  FaShoppingCart,
  FaFire,
  FaCoins,
} from "react-icons/fa";
import "./MenuLocation.css";

const MenuLocation = () => {
  const [location, setLocation] = useState("سمنان");
  const [menuOpen, setMenuOpen] = useState(false);
  const locations = ["تهران", "اصفهان", "مشهد", "تبریز", "شیراز", "سمنان"];

  const menuItems = [
    "موبایل",
    "لپ‌تاپ",
    "لوازم خانگی",
    "کتاب",
    "پوشاک",
    "ورزشی",
  ];

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="menu-location">
      <div className="location-selector">
        <FaMapMarkerAlt className="location-icon" />
        <select value={location} onChange={handleLocationChange}>
          {locations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        <span>ارسال به </span>
      </div>
      <div className="menu-items">
        <a
          href="https://www.digikala.com/landings/seller-introduction/"
          target="_blank"
        >
          <span>! در دیجی‌کالا بفروشید</span>
        </a>
        <span>|</span>
        <a href="https://www.digikala.com/faq/" target="_blank">
          <span>سوالی دارید؟</span>
        </a>
        <span>|</span>
        <a href="https://www.digikala.com/best-selling/" target="_blank">
          <span>
            پرفروش‌ترین‌ها <FaFire className="menu-icon" />
          </span>
        </a>
        <span>|</span>
        <a href="https://www.digikala.com/gold/order/" target="_blank">
          <span>
            طلای دیجیتال <FaCoins className="menu-icon" />
          </span>
        </a>
        <span>|</span>
        <a href="https://www.digikala.com/fresh/" target="_blank">
          <span>
            سوپرمارکت <FaShoppingCart className="menu-icon" />
          </span>
        </a>
        <span>|</span>
        <a href="https://www.digikala.com/incredible-offers/" target="_blank">
          <span>
            شگفت‌انگیزها <FaTag className="menu-icon" />
          </span>
        </a>
        <span>|</span>
        <div className="menu-category">
          <span>دسته‌بندی کالاها</span>
          <FaBars
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
        {menuOpen && (
          <div className="category-details">
            {menuItems.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuLocation;
