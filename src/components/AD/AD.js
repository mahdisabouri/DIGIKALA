// import React from "react";
// import "./AD.css";
// import car from "../../components/AD/images/icons8-car-64.png"; // ایمپورت عکس
// import supporter from "../../components/AD/images/icons8-customer-support-50.png";
// import instagram from "../../components/AD/images/icons8-instagram-logo-64.png"; // فرض بر اینه که این لوگوها رو دارید
// import twitter from "../../components/AD/images/icons8-twitter-logo-64.png";
// import linkedin from "../../components/AD/images/icons8-linkedin-logo-64.png";

// const AD = () => {
//   return (
//     <div className="ad-wrapper">
//       {/* بخش هدر */}
//       <header className="ad-header">
//         <div className="contact-info">
//           {/* تماس با ما حذف شده */}
//         </div>
//       </header>

//       {/* بخش آیکون‌ها */}
//       <section className="ad-icons">
//         <div className="icon-item">
//           <img src={instagram} alt="اینستاگرام" className="icon-img" />
//           <p>اینستاگرام</p>
//         </div>
//         <div className="icon-item">
//           <img src={twitter} alt="توییتر" className="icon-img" />
//           <p>توییتر</p>
//         </div>
//         <div className="icon-item">
//           <img src={linkedin} alt="لینکدین" className="icon-img" />
//           <p>لینکدین</p>
//         </div>
//         <div className="icon-item">
//           <img src={supporter} alt="پشتیبانی 24 ساعته" className="icon-img" />
//           <p>پشتیبانی 24 ساعته</p>
//         </div>
//         <div className="icon-item">
//           <img src={car} alt="ارسال به تمام ایران" className="icon-img" />
//           <p>ارسال به تمام ایران</p>
//         </div>
//       </section>

//       {/* بخش فوتر */}
//       <footer className="ad-footer">
//         <div className="ad-footer-columns">
//           {/* ستون 1: شبکه‌های اجتماعی */}
//           <div className="ad-footer-column">
//             <p>با ما همراه باشید</p>
//           </div>

//           {/* ستون 2: لینک‌های مفید */}
//           <div className="ad-footer-column">
//             <h3>لینک‌های مفید</h3>
//             <ul>
//               <li><a href="#">درباره ما</a></li>
//               <li><a href="#">تماس با ما</a></li>
//               <li><a href="#">سوالات متداول</a></li>
//               <li><a href="#">قوانین و مقررات</a></li>
//               <li><a href="#">وبلاگ</a></li>
//             </ul>
//           </div>

//           {/* ستون 3: محصولات */}
//           <div className="ad-footer-column">
//             <h3>محصولات</h3>
//             <ul>
//               <li><a href="#">محصولات جدید</a></li>
//               <li><a href="#">محبوب‌ترین‌ها</a></li>
//               <li><a href="#">تخفیف‌ها</a></li>
//               <li><a href="#">پیشنهاد شگفت‌انگیز</a></li>
//               <li><a href="#">پشتیبانی</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* بخش جستجو */}
//         <div className="ad-search-section">
//           <div className="search-input">
//             <img src="search.png" alt="search" className="search-icon" />
//             <input type="text" placeholder="جستجو..." />
//           </div>
//           <p className="copyright">همه حقوق محفوظ است</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AD;

import React from "react";
import "./AD.css";
import car from "../../components/AD/images/icons8-car-64.png"; // ایمپورت عکس
import supporter from "../../components/AD/images/icons8-customer-support-50.png";
import instagram from "../../components/AD/images/icons8-instagram-logo-64.png";
import twitter from "../../components/AD/images/icons8-twitter-logo-64.png";
import linkedin from "../../components/AD/images/icons8-linkedin-logo-64.png";
import search from "../../components/AD/images/icons8-google-web-search-256.png";

const AD = () => {
  return (
    <div className="ad-wrapper">
      {/* بخش هدر */}
      <header className="ad-header">
        <div className="contact-info">{/* تماس با ما حذف شده */}</div>
      </header>

      {/* بخش آیکون‌ها */}
      <section className="ad-icons">
        <div className="icon-item">
          <a
            href="https://www.instagram.com/digikalacom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="اینستاگرام" className="icon-img" />
          </a>
          <p>اینستاگرام</p>
        </div>
        <div className="icon-item">
          <a
            href="https://x.com/digikalacom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="توییتر" className="icon-img" />
          </a>
          <p>توییتر</p>
        </div>
        <div className="icon-item">
          <a
            href="https://www.linkedin.com/company/digikala/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="لینکدین" className="icon-img" />
          </a>
          <p>لینکدین</p>
        </div>
        <div className="icon-item">
          <a
            href="https://www.digikala.com/page/contact-us/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={supporter} alt="پشتیبانی 24 ساعته" className="icon-img" />
          </a>
          <p>پشتیبانی 24 ساعته</p>
        </div>
        <div className="icon-item">
          <img src={car} alt="ارسال به تمام ایران" className="icon-img" />
          <p>ارسال به تمام ایران</p>
        </div>
      </section>

      {/* بخش فوتر */}
      <footer className="ad-footer">
        <div className="ad-footer-columns">
          {/* ستون 1: بخش جستجو به جای "با ما همراه باشید" */}
          <div className="ad-footer-column">
            <div className="search-input">
              <img src={search} alt="search" className="search-icons" />
              <input type="text" placeholder="جستجو..." />
            </div>
          </div>

          {/* ستون 2: لینک‌های مفید */}
          <div className="ad-footer-column">
            <h3>لینک‌های مفید</h3>
            <ul>
              <li>
                <a href="https://about.digikala.com/">درباره ما</a>
              </li>
              <li>
                <a href="https://www.digikala.com/page/contact-us/">
                  تماس با ما
                </a>
              </li>
              <li>
                <a href="https://www.digikala.com/faq/">
                  پاسخ به پرسش‌های متداول{" "}
                </a>
              </li>
              <li>
                <a href="https://digikalapublic.whistleblowernetwork.net/frontpage">
                  گزارش تخلف در دیجی‌کالا
                </a>
              </li>
              <li>
                <a href="https://careers.digikala.com/#">فرصت‌های شغلی</a>
              </li>
            </ul>
          </div>

          {/* ستون 3: محصولات */}
          <div className="ad-footer-column">
            <h3>راهنمای خرید از دیجی‌کالا</h3>
            <ul>
              <li>
                <a href="https://www.digikala.com/faq/question/649/">
                  {" "}
                  نحوه ثبت سفارش
                </a>
              </li>
              <li>
                <a href="https://www.digikala.com/faq/question/79/">
                  رویه ارسال سفارش
                </a>
              </li>
              <li>
                <a href="https://www.digikala.com/faq/question/81/">
                  شیوه‌های پرداخت
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* بخش کپی‌رایت به تنهایی در پایین */}
        <div className="ad-search-section">
          <p className="copyright">همه حقوق محفوظ است</p>
        </div>
      </footer>
    </div>
  );
};

export default AD;
