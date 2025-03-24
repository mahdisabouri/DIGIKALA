// import React from "react";
// import "./Article.css";

// import Logo from "../../components/Articlee/images/full-horizontal.svg";     
// import tahvil from "../../components/Articlee/images/tahvile_delivery.svg"
// import pardakht from "../../components/Articlee/images/cash-on-delivery.svg"
// import haftrooz from "../../components/Articlee/images/days-return.svg"
// import zemanat from "../../components/Articlee/images/cash-on-delivery.svg"

// const Article = () => {
//   return (
//     <div className="article-container">
//       {/* نوار بالایی (لوگو) */}
//       <div className="top-bar">
//         <div className="logo-container">
//           <img src={Logo} alt="لوگو" className="logo-img" />
//         </div>
//       </div>

//       {/* اطلاعات پشتیبانی (شماره تلفن‌ها و توضیحات) */}
//       <div className="support-info">
//         <span className="support-text">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
//         <span className="separator">|</span>
//         <span className="support-text">۰۲۱-۹۱۰۰۰۱۰۰</span>
//         <span className="separator">|</span>
//         <span className="support-text">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
//       </div>

//       {/* بخش آیکن‌ها یا آیتم‌های زیر */}
//       <div className="icon-section">
//         <div className="icon-item">
//           <img src={tahvil} alt="icon1" className="icon-img" />
//           <span>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</span>
//         </div>
//         <div className="icon-item">
//           <img src={pardakht} alt="icon2" className="icon-img" />
//           <span>امکان پرداخت در محل</span>
//         </div>
//         <div className="icon-item">
//           <img src={haftrooz} alt="icon3" className="icon-img" />
//           <span>هفت روز ضمانت بازگشت کالا</span>
//         </div>
//         <div className="icon-item">
//           <img src={zemanat} alt="icon4" className="icon-img" />
//           <span>ضمانت اصل بودن کالا</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Article;


// import React from "react";
// import "./Article.css";

// import Logo from "../../components/Articlee/images/full-horizontal.svg";     
// import tahvil from "../../components/Articlee/images/tahvile_delivery.svg";
// import pardakht from "../../components/Articlee/images/cash-on-delivery.svg";
// import haftrooz from "../../components/Articlee/images/days-return.svg";
// import zemanat from "../../components/Articlee/images/cash-on-delivery.svg";

// const Article = () => {
//   return (
//     <div className="article-container">
//       {/* نوار بالایی شامل خط افقی و لوگو */}
//       <div className="top-bar">
//         <hr className="divider" />
//         <div className="logo-container">
//           <img src={Logo} alt="لوگو" className="logo-img" />
//         </div>
//       </div>

//       {/* اطلاعات پشتیبانی */}
//       <div className="support-info">
//         <span className="support-text">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
//         <span className="separator">|</span>
//         <span className="support-text">۰۲۱-۹۱۰۰۰۱۰۰</span>
//         <span className="separator">|</span>
//         <span className="support-text">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
//       </div>

//       {/* بخش آیکن‌ها */}
//       <div className="icon-section">
//         <div className="icon-item">
//           <img src={tahvil} alt="تسریع تحویل" className="icon-img" />
//           <span>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</span>
//         </div>
//         <div className="icon-item">
//           <img src={pardakht} alt="پرداخت در محل" className="icon-img" />
//           <span>امکان پرداخت در محل</span>
//         </div>
//         <div className="icon-item">
//           <img src={haftrooz} alt="ضمانت بازگشت کالا" className="icon-img" />
//           <span>هفت روز ضمانت بازگشت کالا</span>
//         </div>
//         <div className="icon-item">
//           <img src={zemanat} alt="ضمانت اصل بودن کالا" className="icon-img" />
//           <span>ضمانت اصل بودن کالا</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Article;



import React from "react";
import "./Article.css";

import Logo from "../../components/Articlee/images/full-horizontal.svg";     
import tahvil from "../../components/Articlee/images/tahvile_delivery.svg";
import pardakht from "../../components/Articlee/images/cash-on-delivery.svg";
import haftrooz from "../../components/Articlee/images/days-return.svg";
import zemanat from "../../components/Articlee/images/cash-on-delivery.svg";

const Article = () => {
  return (
    <div className="article-container">
      {/* خط افقی جداکننده بالای هدر */}
      <hr className="divider" />

      {/* هدر شامل لوگو و شماره‌های پشتیبانی */}
      <div className="header-container">
        <div className="logo-container">
          <img src={Logo} alt="لوگو" className="logo-img" />
        </div>
        <div className="support-info">
          <span className="support-text">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
          <span className="separator">|</span>
          <span className="support-text">۰۲۱-۹۱۰۰۰۱۰۰</span>
          <span className="separator">|</span>
          <span className="support-text">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
        </div>
      </div>

      {/* بخش آیکن‌ها */}
      <div className="icon-section">
        <div className="icon-item">
          <img src={tahvil} alt="تسریع تحویل" className="icon-img" />
          <span>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</span>
        </div>
        <div className="icon-item">
          <img src={pardakht} alt="پرداخت در محل" className="icon-img" />
          <span>امکان پرداخت در محل</span>
        </div>
        <div className="icon-item">
          <img src={haftrooz} alt="ضمانت بازگشت کالا" className="icon-img" />
          <span>هفت روز ضمانت بازگشت کالا</span>
        </div>
        <div className="icon-item">
          <img src={zemanat} alt="ضمانت اصل بودن کالا" className="icon-img" />
          <span>ضمانت اصل بودن کالا</span>
        </div>
      </div>
    </div>
  );
};

export default Article;
