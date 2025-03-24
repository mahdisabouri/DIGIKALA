// // FooterLinks.js
// import React from "react";
// import styles from "./FooterLinks.module.css";
// import diginext from "../../components/FooterLinks/Imagessss/diginext.svg";
// // داده‌های لینک‌ها (می‌توانید بعداً با تصاویر جایگزین کنید)
// const footerLinksData = [
//   { name: {diginext}, url: "#" },
//   { name: "digikalamehr", url: "#" },
//   { name: "digikala jet", url: "#" },
//   { name: "digiclub", url: "#" },
//   { name: "plus", url: "#" },
//   { name: "DIGISTYLE", url: "#" },
//   { name: "digipay", url: "#" },
//   { name: "digikalaMAG", url: "#" },
//   { name: "خرید اعتباری", url: "#" },
//   { name: "digikala BUSINESS", url: "#" },
//   { name: "SMARTECH", url: "#" },
//   { name: "digify", url: "#" },
//   { name: "GNJE", url: "#" },
//   { name: "digiexpress", url: "#" },
// ];

// const FooterLinks = () => {
//   return (
//     <div className={styles.footerLinksSection}>
//       <div className={styles.linksWrapper}>
//         {footerLinksData.map((link, index) => (
//           <a
//             key={index}
//             href={link.url}
//             className={styles.linkItem}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <span className={styles.linkText}>{link.name}</span>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FooterLinks;

// FooterLinks.js
import React from "react";
import styles from "./FooterLinks.module.css";

// وارد کردن تمام تصاویر
import diginext from "../../components/FooterLinks/Imagessss/diginext.svg";
import digikalamehr from "../../components/FooterLinks/Imagessss/digiMehr.svg";
import digikalaJet from "../../components/FooterLinks/Imagessss/jet.svg";
import digiclub from "../../components/FooterLinks/Imagessss/digiclub.svg";
import plus from "../../components/FooterLinks/Imagessss/digiplus.svg";
import digistyle from "../../components/FooterLinks/Imagessss/digistyle.svg";
import digipay from "../../components/FooterLinks/Imagessss/digipay.svg";
import digikalaMAG from "../../components/FooterLinks/Imagessss/digimag.svg";
import digikalaservice from "../../components/FooterLinks/Imagessss/digikala-service.svg"; // برای سروی"ی"
import digikalaBusiness from "../../components/FooterLinks/Imagessss/digikala-business.svg";
import smartech from "../../components/FooterLinks/Imagessss/smartech.svg";
import digify from "../../components/FooterLinks/Imagessss/digify.svg";
import gnje from "../../components/FooterLinks/Imagessss/ganjeh.svg";
import digiexpress from "../../components/FooterLinks/Imagessss/digiexpress.svg";

// داده‌های لینک‌ها با تصاویر
const footerLinksData = [
  { image: diginext, url: "https://diginext.ir/" },
  { image: digikalamehr, url: "https://mehr.digikala.com/" },
  { image: digikalaJet, url: "https://www.digikalajet.com/" },
  { image: digiclub, url: "https://www.digikala.com/digiclub/" },
  { image: plus, url: "https://www.digikala.com/plus/landing/" },
  { image: digistyle, url: "https://www.digistyle.com/" },
  { image: digipay, url: "https://www.mydigipay.com/" },
  { image: digikalaMAG, url: "https://www.digikala.com/mag/" },
  { image: digikalaservice, url: "https://www.digikala-service.com/" },
  { image: digikalaBusiness, url: "https://www.digikalabusiness.com/" },
  { image: smartech, url: "https://smartech.ir/" },
  { image: digify, url: "https://digify.shop/" },
  { image: gnje, url: "https://ganje.net/?utm_source=Digikala_web&utm_medium=Footer" },
  { image: digiexpress, url: "https://digiexpress.ir/" },
];

const FooterLinks = () => {
  return (
    <div className={styles.footerLinksSection}>
      <div className={styles.linksWrapper}>
        {footerLinksData.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className={styles.linkItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={link.image}
              alt={`Footer link ${index}`}
              className={styles.linkImage}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
