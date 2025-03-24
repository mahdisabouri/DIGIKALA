// FooterSection.js
import React, { useState } from "react";
import styles from "./FooterSection.module.css";
import enamadLogo from "../../components/FooterSection/IMAGES/84.png";
import samandehiLogo from "../../components/FooterSection/IMAGES/sapra.webp";
import etehadieh from "../../components/FooterSection/IMAGES/rezi.webp";

// کامپوننت لوگوی Enamad با لینک
const EnamadBadge = () => (
  <div className={styles.badgeContainer}>
    <a
      href="https://trustseal.enamad.ir/?id=19077&Code=sScdOJOzhFxtcEqkjP7P"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.enamadLogo}>
        <img src={enamadLogo} alt="Enamad Logo" />
      </div>
    </a>
  </div>
);

// کامپوننت لوگوی Samandehi با لینک
const SamandehiBadge = () => (
  <div className={styles.badgeContainer}>
    <a href="https://sapra.ir/" target="_blank" rel="noopener noreferrer">
      <div className={styles.samandehiLogo}>
        <img src={samandehiLogo} alt="Samandehi Logo" />
      </div>
    </a>
  </div>
);

// کامپوننت لوگوی اتحادیه کسب‌وکارهای مجازی با لینک
const VirtualBusinessUnionBadge = () => (
  <div className={styles.badgeContainer}>
    <a
      href="https://logo.samandehi.ir/Verify.aspx?id=28177&p=uiwkmcsirfthjyoejyoe"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.virtualBusinessLogo}>
        <img src={etehadieh} alt="Virtual Business Union Logo" />
      </div>
    </a>
  </div>
);

// کامپوننت بلوک متن (بدون تغییر)
const FooterTextBlock = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = `
    دیجی کالا؛ بزرگترین فروشگاه اینترنتی ایران
    دیجی کالا سال‌ها است که به انتخاب اول بسیاری از خریداران اینترنتی تبدیل شده است. دیجی کالا به عنوان بزرگ‌ترین و معتبرترین فروشگاه آنلاین ایران، شناخته‌شده‌ترین فروشگاه نیز محسوب می‌شود. این فروشگاه آنلاین نه‌تنها گسترده‌ترین تنوع کالا را در دسته‌بندی‌های مختلف ارائه می‌دهد، بلکه با خدمات بی‌نظیر، سرعت ارسال بالا، ضمانت اصل بودن کالا و پشتیبانی حرفه‌ای، استاندارد جدیدی در خرید اینترنتی ایران تعریف کرده است.
  `;

  const fullText = `
    دیجی کالا؛ بزرگترین فروشگاه اینترنتی ایران
    دیجی کالا سال‌ها است که به انتخاب اول بسیاری از خریداران اینترنتی تبدیل شده است. دیجی کالا به عنوان بزرگ‌ترین و معتبرترین فروشگاه آنلاین ایران، شناخته‌شده‌ترین فروشگاه نیز محسوب می‌شود. این فروشگاه آنلاین نه‌تنها گسترده‌ترین تنوع کالا را در دسته‌بندی‌های مختلف ارائه می‌دهد، بلکه با خدمات بی‌نظیر، سرعت ارسال بالا، ضمانت اصل بودن کالا و پشتیبانی حرفه‌ای، استاندارد جدیدی در خرید اینترنتی ایران تعریف کرده است. این فروشگاه با سال‌ها تجربه و اعتماد مشتریان، کامل‌ترین و بهترین گزینه برای خرید آنلاین در ایران محسوب می‌شود.

    ویژگی های مهم دیجی کالا
    یکی از ویژگی‌های مهم در خرید از دیجی کالا، تنوع بی‌نظیر محصولات است. این فروشگاه اینترنتی طیف وسیعی از کالاها را در دسته‌های مختلف از جمله لوازم دیجیتال، لوازم خانگی، مد و پوشاک، لوازم آرایشی و بهداشتی، محصولات سلامت و زیبایی، و بسیاری از محصولات دیگر ارائه می‌دهد. به عنوان مثال، اگر به دنبال خرید یک گوشی موبایل جدید باشید، دیجی کالا مجموعه‌ای از بهترین گوشی‌ها از برندهای معتبر اپل و سامسونگ مانند ایفون 16، گوشی S25، گوشی‌های مختلف از برند شیائومی مانند شیائومی نوت ۱۴ و بسیاری از برندهای دیگر را در اختیار شما قرار می‌دهد. همچنین برای علاقه‌مندان به لوازم دیجیتال، این فروشگاه اینترنتی انواع لپ تاپ، تلویزیون، اسپیکر، و هندزفری بلوتوثی با کیفیت بالا را برای خرید آنلاین ارائه می‌دهد. دیجی کالا، مقصدی بی‌پایان برای خرید آسان، سریع و مطمئن است. راهی که هر آنچه نیاز دارید از قیمت لپ تاپ تا یک ایرپاد مطمئن را در اختیار شما قرار می‌دهد.

    ارسال سریع و مطمئن کالا
    یکی از مهم‌ترین دغدغه‌های کاربران خرید آنلاین، زمان تحویل کالا است. دیجی کالا برای حل این مشکل، گزینه‌های مختلف ارسال را در نظر گرفته است تا کاربران بتوانند بر اساس نیاز خود، روش ارسال مناسب را انتخاب کنند. به عنوان مثال، ارسال کالا به صورت ارسال امروز، ارسال سریع توسط پیک‌های دیجی کالا، از جمله روش‌های خرید سریع از این فروشگاه اینترنتی است. این امکانات باعث می‌شود که خریداران بتوانند سفارش خود را در کوتاه‌ترین زمان ممکن دریافت کنند. علاوه بر این، در صورتی که کالای خریداری شده از لحاظ کیفیت یا هر دلیل دیگری رضایت مشتری را جلب نکرده باشد، دیجی کالا ضمانت بازگشت کالا را ارائه می‌دهد. این ویژگی موجب اعتماد بیشتر مشتریان به خرید آنلاین از فروشگاه اینترنتی دیجی کالا شده است.

    تخفیف های ویژه و جشنواره ها
    دیجی کالا به طور منظم جشنواره‌ها و تخفیف‌های ویژه‌ای را برگزار می‌کند که برای مشتریان فرصت خرید کالاهای باکیفیت با قیمت‌های مناسب به همراه خواهد داشت. این تخفیف‌ها در ایام خاص مانند بلک فرایدی یا همان حراج جمعه سیاه و جشنواره‌های تابستانی توجه بسیاری از خریداران را جلب می‌کند. در این جشنواره‌ها، دیجی کالا تخفیف‌های عالی روی محصولات مختلف از جمله گوشی‌های موبایل، لپ تاپ‌ها، تلویزیون‌ها، و حتی محصولات زیبایی ارائه می‌دهد. می‌توانید گوشی ایفون 16 یا گوشی S25 را با تخفیف‌های ویژه خریداری کنید و از قیمت مناسب بهره‌مند شوید. دیجی کالا فراتر از یک فروشگاه اینترنتی، یک تجربه خرید مطمئن در بین کاربران مختلف بوده است که با ارائه بزرگ‌ترین تنوع کالا، قیمت‌های مختلف و خدماتی بی‌نقص، به مقصد اول خریداران آنلاین در ایران تبدیل شده است.
  `;

  return (
    <div className={styles.footerTextBlock}>
      <h2 className={styles.footerTitle}>دیجی کالا بیزینس: فوتر این سایت</h2>
      <p className={styles.footerDescription}>
        {isExpanded ? fullText : shortText}
      </p>
      <a
        href="#"
        className={styles.seeMoreLink}
        onClick={(e) => {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "بستن" : "مشاهده بیشتر >"}
      </a>
    </div>
  );
};

// کامپوننت اصلی
const FooterSection = () => {
  return (
    <div className={styles.footerSection}>
      <div className={styles.topDivider}></div> {/* خط افقی بالا */}
      <div className={styles.contentWrapper}>
        <FooterTextBlock />
        <div className={styles.divider}></div> {/* خط عمودی بین متن و لوگوها */}
        <div className={styles.certificationsWrapper}>
          <EnamadBadge />
          <SamandehiBadge />
          <VirtualBusinessUnionBadge />
        </div>
      </div>
      <div className={styles.bottomDivider}></div> {/* خط افقی پایین */}
      <div className={styles.copyrightText}>
        برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق این وب‌سایت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.
      </div>
    </div>
  );
};

export default FooterSection;