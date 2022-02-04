import React from "react";
import Boxes from "./boxes/Boxes";
import Brands from "./brands/Brands";
import DealsOutlet from "./deals-outlet/DealsOutlet";
import Intro from "./intro/Intro";
import NewDeals from "./new-deals/NewDeals";
import ShopSocial from "./shop-social/ShopSocial";
import Tablist from "./tablist/Tablist";
import TopSelling from "./top-selling/TopSelling";
import TrendingProduct from "./trending/Trending";
function Home() {
  return (
    <>
      <Intro />
      <Tablist />
      <div class="mb-7 mb-lg-11"></div>
      <NewDeals />
      <DealsOutlet />
      <Brands />
      <div class="container">
        <hr class="mt-3 mb-6" />
      </div>
      <TrendingProduct />
      <div class="container">
        <hr class="mt-5 mb-6" />
      </div>
      <TopSelling />
      <div class="container">
        <hr class="mt-5 mb-0" />
      </div>
      <Boxes />
      <ShopSocial />
    </>
  );
}

export default Home;
