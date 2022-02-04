import React from "react";
import Featured from "./Featured";
import OnSale from "./OnSale";
import TopRated from "./TopRated";

function Tablist() {
  return (
    <div className="container featured">
      <ul
        className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            id="products-featured-link"
            data-toggle="tab"
            href="#products-featured-tab"
            role="tab"
            aria-controls="products-featured-tab"
            aria-selected="true"
          >
            Featured
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="products-sale-link"
            data-toggle="tab"
            href="#products-sale-tab"
            role="tab"
            aria-controls="products-sale-tab"
            aria-selected="false"
          >
            On Sale
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="products-top-link"
            data-toggle="tab"
            href="#products-top-tab"
            role="tab"
            aria-controls="products-top-tab"
            aria-selected="false"
          >
            Top Rated
          </a>
        </li>
      </ul>
      <div className="tab-content tab-content-carousel">
        <Featured />
        <OnSale />
        <TopRated />
      </div>
    </div>
  );
}

export default Tablist;