import React from "react";
import ProductOwlCarousel from "../../tablist/ProductOwlCarousel";
import OwlCarousel from "react-owl-carousel";
import { productsHome } from "../../../../data";

function TopSellingAll(props) {
  return (
    <div
      className="tab-pane p-0 fade show active"
      id="top-all-tab"
      role="tabpanel"
      aria-labelledby="top-all-link"
    >
      <OwlCarousel
        className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
        {...props.optionsTop}
      >
        {productsHome.map((product, index) => (
          <ProductOwlCarousel product={product} key={index} />
        ))}
      </OwlCarousel>
    </div>
  );
}

export default TopSellingAll;
