// مسیر فایل: src/App.js

import React from "react";
import Banner from "./components/Banner/Banner"; // ایمپورت بنر
import Navbar from "./components/Navbar/Navbar"; // ایمپورت نوبار
import MenuLocation from "./components/MenuLocation/MenuLocation"; //ایمپورت منو و لوکیشن

import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";
import Table from "./components/Table/Table";
import AmazingOffers from "./components/AmazingOffers/AmazingOffers";
import PromoSlider from "./components/PromoSlider/PromoSlider";
import SuperOfferBanner from "./components/SuperOfferBanner/SuperOfferBanner";
import NewPromoSlider from "./components/NewPromoSlider/NewPromoSlider";
import CategoryGrid from "./components/CategoryGrid/CategoryGrid";
import ImagePair from "./components/ImagePair/ImagePair";
import PromoBanners from "./components/PromoBanners/PromoBanners";
import OfferImages from "./components/OfferImages/OfferImages";
import TableOne from "./components/Table_1/TableOne";
import HotProducts from "./components/HotProducts/HotProducts";
import ProductList from "./components/ProductList/ProductList";
import Article from "./components/Articlee/Article";
import AD from "./components/AD/AD";
import DownloadBar from "./components/DownloadBar/DownloadBar";
import FooterSection from "./components/FooterSection/FooterSection";
import FooterLinks from "./components/FooterLinks/FooterLinks";
import SliderGallery from "./components/SliderGallery/SliderGallery";
function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <MenuLocation />
      <HorizontalScroll />
      <SliderGallery />
      <Table />
      <AmazingOffers />
      <PromoSlider />
      <SuperOfferBanner />
      <NewPromoSlider />
      <CategoryGrid />
      <ImagePair />
      <PromoBanners />
      <OfferImages />
      <TableOne />
      <HotProducts />
      <ProductList />
      <Article />
      <AD />
      <DownloadBar />
      <FooterSection />
      <FooterLinks /> 
    </div>
  );
}

export default App;
