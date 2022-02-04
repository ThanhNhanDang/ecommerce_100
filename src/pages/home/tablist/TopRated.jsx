import React from "react";
import { optionsFeatured } from "../../../data";
import ProductOwlCarousel from "./ProductOwlCarousel";
import OwlCarousel from "react-owl-carousel";

const productsTop = [
  {
    img: "assets/images/demos/demo-3/products/product-3.jpg",
    new: false,
    color: false,
    colors: [],
    imgHover: "assets/images/demos/demo-3/products/product-1.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 80,
    reviews: 223,
  },
  {
    img: "assets/images/demos/demo-3/products/product-3.jpg",
    new: false,
    color: true,
    colors: [
      { active: true, color: "#e2e2e2" },
      { active: false, color: "#333333" },
      { active: false, color: "#f2bc9e" },
    ],
    imgHover: "assets/images/demos/demo-3/products/product-1.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 80,
    reviews: 223,
  },
  {
    img: "assets/images/demos/demo-3/products/product-1.jpg",
    new: true,
    color: true,
    colors: [
      { active: true, color: "#e2e2e2" },
      { active: false, color: "#333333" },
      { active: false, color: "#f2bc9e" },
    ],
    imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 80,
    reviews: 223,
  },
  {
    img: "assets/images/demos/demo-3/products/product-1.jpg",
    new: true,
    color: false,
    colors: [],
    imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 80,
    reviews: 223,
  },
  {
    img: "assets/images/demos/demo-3/products/product-1.jpg",
    new: true,
    color: false,
    colors: [],
    imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 80,
    reviews: 223,
  },
  {
    img: "assets/images/demos/demo-3/products/product-1.jpg",
    new: true,
    color: true,
    colors: [
      { active: true, color: "#e2e2e2" },
      { active: false, color: "#333333" },
      { active: false, color: "#f2bc9e" },
    ],
    imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 80,
    reviews: 223,
  },
  {
    img: "assets/images/demos/demo-3/products/product-1.jpg",
    new: false,
    color: false,
    colors: [],
    imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 80,
    reviews: 223,
  },
  {
    img: "assets/images/demos/demo-3/products/product-1.jpg",
    new: false,
    color: false,
    colors: [],
    imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 80,
    reviews: 223,
  },
];

function TopRated() {
  return (
    <div
      className="tab-pane p-0 fade"
      id="products-top-tab"
      role="tabpanel"
      aria-labelledby="products-top-link"
    >
      <OwlCarousel
        className="owl-full carousel-equal-height carousel-with-shadow"
        {...optionsFeatured}
      >
        {productsTop.map((product, index) => (
          <ProductOwlCarousel product={product} key={index} />
        ))}
      </OwlCarousel>
    </div>
  );
}

export default TopRated;
