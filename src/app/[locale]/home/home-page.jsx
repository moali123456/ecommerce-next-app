import React from "react";
import { getProducts } from "@/lib/actions/products/products-actions";
import CategoriesSection from "./categories-section";
import PopularProductSection from "./popular-product-section";
import DealsSection from "./deals-section";
import HotDealsSection from "./hot-deals-section";
import BannerSection from "./banner-section";
import CommentsSection from "./comments-section";
import SubcribeSection from "./subcribe-section";
import "./home-page.scss";

export default async function HomePage() {
  // Fetch Categories
  const productsData = await getProducts();

  return (
    <div id="home-page">
      {/* Categories section */}
      <div className="container_bx">
        <CategoriesSection />
      </div>

      {/* Popular product section */}
      <div className="container_bx">
        <PopularProductSection productsData={productsData} />
      </div>

      {/* Deals section */}
      <div className="container_bx">
        <DealsSection productsData={productsData} />
      </div>

      {/* Hot deals section */}
      <HotDealsSection productsData={productsData} />

      {/* Banner section */}
      <BannerSection />

      {/* Comments section */}
      <CommentsSection />

      {/* Subcribe section */}
      <SubcribeSection />
    </div>
  );
}
