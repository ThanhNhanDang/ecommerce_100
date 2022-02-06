import React from "react";
import { optionsFeatured, productsHome } from "../../../data";
import OwlCarousel from "react-owl-carousel";
import ProductOwlCarousel from "./ProductOwlCarousel";


function OnSale() {
  return (
    <div
      className="tab-pane p-0 fade"
      id="products-sale-tab"
      role="tabpanel"
      aria-labelledby="products-sale-link"
    >
      <OwlCarousel
        className="owl-full carousel-equal-height carousel-with-shadow"
        {...optionsFeatured}
      >
        {productsHome.map((product, index) => (
          <ProductOwlCarousel product={product} key={index} />
        ))}
      </OwlCarousel>
    </div>
  );
}

export default OnSale;
