/**
 * کامپوننت: HorizontalScroll
 *
 * نقشه راه پیاده‌سازی کامپوننت اسکرول افقی:

 * نقشه راه پیاده‌سازی کامپوننت اسکرول افقی:
 * 1. ایجاد ساختار HTML کامپوننت با استفاده از یک لیست از آیتم‌ها.
 * 2. افزودن دکمه‌های چپ و راست برای حرکت در لیست.
 * 3. تنظیم استایل‌های CSS جهت نمایش صحیح آیتم‌ها در یک اسکرول افقی.
 * 4. افزودن قابلیت اسکرول نرم و روان با استفاده از جاوااسکریپت یا CSS.
 * 5. امکان جایگزینی تصاویر موقت با تصاویر واقعی بعد از دریافت آن‌ها.
 * 6. اطمینان از نمایش صحیح در دستگاه‌های مختلف و ریسپانسیو بودن طراحی.
 */

import React from "react";
import "./HorizontalScroll.css";
import Hedphone from "../../components/HorizontalScroll/imagessssssss/hedphon.jpg";
import Medad from "../../components/HorizontalScroll/imagessssssss/medad.jpg";
import Boresh from "../../components/HorizontalScroll/imagessssssss/boresh.jpg";
import Book from "../../components/HorizontalScroll/imagessssssss/Book.jpg";
import Body from "../../components/HorizontalScroll/imagessssssss/Body.jpg";
import Love from "../../components/HorizontalScroll/imagessssssss/Love.jpg";
import Glasses from "../../components/HorizontalScroll/imagessssssss/Glasses.jpg";
import Tea from "../../components/HorizontalScroll/imagessssssss/Tea.jpg";
import Mouse from "../../components/HorizontalScroll/imagessssssss/Mouse.jpg";
import switches from "../../components/HorizontalScroll/imagessssssss/switch.jpg";
import Loveme from "../../components/HorizontalScroll/imagessssssss/love_me.jpg";

const items = [
  { id: 1, title:"مجموعه ..'خطاب به عشق'", img: Book  , link :"#"},
  { id: 2, title: "برای برش حتما از دری...", img: Boresh  , link :"#"},
  { id: 3, title: "روان نویس 18 رنگ سی ...", img: Medad  , link :"#"},
  { id: 4, title: "بهترین هدفون اقتصادی بازار", img: Hedphone , link :"#" },
  { id: 5, title: "دوست داشتنی", img: Love  , link :"#"},
  { id: 6, title: "شامپو بدن فابریگاس ب...", img: Body , link :"#" },
  { id: 7, title: "عینک کوهنوردی مدل طو...", img: Glasses  , link :"#"},
  { id: 8, title: "چای باید قند پهلو باشه", img: Tea , link :"#" },
  { id: 9, title: "ماوس فانتزی !", img: Mouse , link :"#" },
  { id: 10, title : "سوییچ ۵ پورت گیگابیت نتربیت", img: switches , link :"#" },
  { id: 11, title: "عاشقش میشی🤩", img: Loveme , link :"#" },
];

const HorizontalScroll = () => {
  return (
    <div className="scroll-container">
      <button className="scroll-btn left">&#8249;</button>
      <div className="scroll-content">
        {items.map((item) => (
          <div key={item.id} className="scroll-item">
            <a href={item.link} target="_blank" rel="noopener noreferrer">

            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            </a>
          </div>
        ))}
      </div>
      <button className="scroll-btn right">&#8250;</button>
    </div>
  );
};

export default HorizontalScroll;
