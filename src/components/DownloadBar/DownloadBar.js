// import React from "react";
// import "./DownloadBar.css";

// const DownloadBar = () => {
//   return (
//     <div className="download-bar">
//       <div className="buttons-container">
//         <button className="option-button">...</button>
//         <button className="option-button">عکس</button>
//         <button className="option-button">دریافت از سیب اپ</button>
//         <button className="option-button">عکس</button>
//         <button className="option-button">دریافت از مایکت</button>
//         <button className="option-button">عکس</button>
//         <button className="option-button">دریافت از بازار</button>
//       </div>
//       <div className="app-download">
//         <span className="text">دانلود اپلیکیشن دیجی‌کالا</span>
//         <button className="download-button">▾</button>
//       </div>
//     </div>
//   );
// };

// export default DownloadBar;

import React from "react";
import "./DownloadBar.css";
import more from "../../components/DownloadBar/Images/More.svg";
import Appleapp from "../../components/DownloadBar/Images/sib-app.svg";
import Bzzae from "../../components/DownloadBar/Images/coffe-bazzar.svg";
import Myket from "../../components/DownloadBar/Images/myket.svg";
import footerlogo2 from "../../components/DownloadBar/Images/footerlogo2.webp";

const DownloadBar = () => {
  return (
    <div className="download-bar-container">
      <div className="download-bar">
        <div className="buttons-container">
          <button className="option-buttons">
            <img src={more} alt="more" />
          </button>

          <a
            href="https://sibapp.com/applications/digikala"
            className="image-link"
          >
            <img src={Appleapp} alt="سیب اپ" />
          </a>
          <a href="https://myket.ir/app/com.digikala" className="image-link">
            <img src={Myket} alt="مایکت" />
          </a>
          <a
            href="https://cafebazaar.ir/app/com.digikala"
            className="image-link"
          >
            <img src={Bzzae} alt="بازار" />
          </a>
        </div>
        <div className="app-download">
          <span className="text">دانلود اپلیکیشن دیجی‌کالا</span>
          <div className="download-button">
            <img src={footerlogo2} alt="footerlogo2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBar;
