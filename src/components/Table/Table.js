import React from "react";
import "./Table.css";

// وارد کردن عکس‌ها
import Icon from "../../assets/icons8-more-50.png";
import placeholder2 from "../../assets/تخفیف بومی محلی.png";
import placeholder3 from "../../assets/حراج.png";
import placeholder4 from "../../assets/دیجیکالا سرویس.png";
import placeholder5 from "../../assets/اشتراک پلاس.png";
import placeholder6 from "../../assets/تخفیف برندها.jpg";
import placeholder7 from "../../assets/4قسط.png";
import placeholder8 from "../../assets/پس بده.jpg";
import placeholder9 from "../../assets/خرید طلای دیجیتال.png";
import placeholder10 from "../../assets/حراج موبایل.png";

// آرایه‌ای از آیتم‌ها با استفاده از تصاویر وارد شده
const menuItems = [
  {
    id: 1,
    icon: Icon,
    title: "بیشتر",
    alt: "بیشتر",
    link: "https://www.digikala.com/#deep-link-others",
  },
  {
    id: 2,
    icon: placeholder2,
    title: "تخفیف بومی",
    alt: "تخفیف بومی",
    link: "https://www.digikala.com/landing/esfand1403-Boomi/",
  },
  {
    id: 3,
    icon: placeholder3,
    title: "حراج فروشگاه حضوری",
    alt: "حراج فروشگاه حضوری",
    link: "https://www.digikala.com/landing/DKStore/",
  },
  {
    id: 4,
    icon: placeholder4,
    title: "دی جی کالا سرویس",
    alt: "دی جی کالا سرویس",
    link: "https://www.digikala-service.com/?utm_source=Digikala&utm_medium=services+badge&utm_id=5",
  },
  {
    id: 5,
    icon: placeholder5,
    title: "اشتراک پلاس",
    alt: "اشتراک پلاس",
    link: "https://www.digikala.com/plus/landing/",
  },
  {
    id: 6,
    icon: placeholder6,
    title: "تخفیف برندها",
    alt: "تخفیف برندها",
    link: "https://www.digistyle.com/landings/outlet/",
  },
  {
    id: 7,
    icon: placeholder7,
    title: "۴قسط",
    alt: "۴قسط",
    link: "https://express.mydigipay.com/login/callback?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9...",
  },
  {
    id: 8,
    icon: placeholder8,
    title: "پس نده",
    alt: "پس نده",
    link: "https://www.digikala.com/landing/fashion-return-1403/",
  },
  {
    id: 9,
    icon: placeholder9,
    title: "خرید طلای دیجیتال",
    alt: "خرید طلای دیجیتال",
    link: "https://www.digikala.com/gold/welcome/",
  },
  {
    id: 10,
    icon: placeholder10,
    title: "حراج موبایل کارکرده با گارانتی",
    alt: "حراج موبایل کارکرده با گارانتی",
    link: "https://used.digikala.com/shop?utm_source=DKHP&utm_medium=CIRCLEBADGE&utm_campaign=SHOP-CIRCLEBADGE&utm_id=DK-CIRCLEBADGE-SHOP-110225",
  },
];


const Table = () => {
  return (
    <div className="table-container">
      {menuItems.map((item) => (
        <a 
          key={item.id} 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="table-item"
        >
          <div className="table-icon">
            <img src={item.icon} alt={item.alt} />
          </div>
          <p>{item.title}</p>
        </a>
      ))}
    </div>
  );
};
export default Table;
