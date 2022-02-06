import React from "react";
import { optionsFeatured, productsHome } from "../../../data";
import ProductOwlCarousel from "./ProductOwlCarousel";
import OwlCarousel from "react-owl-carousel";


function Featured() {
  return (
    <div
      className="tab-pane p-0 fade show active"
      id="products-featured-tab"
      role="tabpanel"
      aria-labelledby="products-featured-link"
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

export default Featured;
