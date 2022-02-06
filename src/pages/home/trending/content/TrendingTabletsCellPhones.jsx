import React from "react";
import { optionsFeatured, productsHome } from "../../../../data";
import ProductOwlCarousel from "../../tablist/ProductOwlCarousel";
import OwlCarousel from "react-owl-carousel";

function TrendingTabletsCellPhones() {
  return (
    <div
      className="tab-pane p-0 fade"
      id="trending-phones-tab"
      role="tabpanel"
      aria-labelledby="trending-phones-link"
    >
      <OwlCarousel
        className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
        {...optionsFeatured}
      >
        {productsHome.map((product, index) => (
          <ProductOwlCarousel product={product} key={index} />
        ))}
      </OwlCarousel>
    </div>
  );
}

export default TrendingTabletsCellPhones;
