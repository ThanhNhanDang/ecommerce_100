import React from "react";
import { optionsBrand } from "../../../data";
import OwlCarousel from "react-owl-carousel";

const brands = [
  {
    id: 1,
    image: "/assets/images/brands/1.png",
  },
  {
    id: 2,
    image: "/assets/images/brands/2.png",
  },
  {
    id: 3,
    image: "/assets/images/brands/3.png",
  },
  {
    id: 4,
    image: "/assets/images/brands/4.png",
  },
  {
    id: 5,
    image: "/assets/images/brands/5.png",
  },
  {
    id: 6,
    image: "/assets/images/brands/6.png",
  },
];

function Brands() {
  return (
    <div className="container">
      <OwlCarousel
        className="owl-carousel mt-5 mb-5 owl-simple"
        {...optionsBrand}
      >
        {brands.map((item) => (
          <a href="/#" key={item.id} className="brand">
            <img src={item.image} alt="Brand Name" />
          </a>
        ))}
      </OwlCarousel>
    </div>
  );
}

export default Brands;
