import React from "react";
import { optionsFeatured } from "../../../data";
import ProductOwlCarousel from "./ProductOwlCarousel";
import OwlCarousel from "react-owl-carousel";

const productsFeatured = [
  {
    img: "/assets/images/demos/demo-3/products/product-1.jpg",
    new: false,
    color: false,
    colors: [],
    imgHover: "/assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 100,
    reviews: 1223,
  },
  {
    img: "/assets/images/demos/demo-3/products/product-1.jpg",
    new: false,
    color: true,
    colors: [
      { active: true, color: "#e2e2e2" },
      { active: false, color: "#333333" },
      { active: false, color: "#f2bc9e" },
    ],
    imgHover: "/assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    oldPrice: null,
    ratings: 100,
    outOfStock: true,
    reviews: 1223,
  },
  {
    img: "/assets/images/demos/demo-3/products/product-1.jpg",
    new: true,
    color: true,
    colors: [
      { active: true, color: "#e2e2e2" },
      { active: false, color: "#333333" },
      { active: false, color: "#f2bc9e" },
    ],
    imgHover: "/assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 100,
    reviews: 1223,
  },
  {
    img: "/assets/images/demos/demo-3/products/product-1.jpg",
    new: true,
    color: false,
    colors: [],
    imgHover: "/assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 100,
    reviews: 1223,
  },
  {
    img: "/assets/images/demos/demo-3/products/product-1.jpg",
    new: true,
    color: false,
    colors: [],
    imgHover: "/assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 100,
    reviews: 1223,
  },
  {
    img: "/assets/images/demos/demo-3/products/product-1.jpg",
    new: true,
    color: true,
    colors: [
      { active: true, color: "#e2e2e2" },
      { active: false, color: "#333333" },
      { active: false, color: "#f2bc9e" },
    ],
    imgHover: "/assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 100,
    reviews: 1223,
  },
  {
    img: "/assets/images/demos/demo-3/products/product-1.jpg",
    new: false,
    color: false,
    colors: [],
    imgHover: "/assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 100,
    outOfStock: true,
    reviews: 1223,
  },
  {
    img: "/assets/images/demos/demo-3/products/product-1.jpg",
    new: false,
    color: false,
    colors: [],
    imgHover: "/assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 100,
    reviews: 1223,
  },
];

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
        {productsFeatured.map((product, index) => (
          <ProductOwlCarousel product={product} key={index} />
        ))}
      </OwlCarousel>
    </div>
  );
}

export default Featured;
