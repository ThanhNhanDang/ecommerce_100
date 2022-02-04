import React from "react";
import { optionsFeatured } from "../../../data";
import OwlCarousel from "react-owl-carousel";
import ProductOwlCarousel from "./ProductOwlCarousel";

const productsSale = [
  {
    img: "assets/images/demos/demo-3/products/product-2.jpg",
    new: false,
    color: false,
    colors: [],
    imgHover: "assets/images/demos/demo-3/products/product-1.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 60,
    reviews:121,
  },
  {
    img: "assets/images/demos/demo-3/products/product-2.jpg",
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
    ratings: 60,
    reviews:121,
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
    ratings: 60,
    reviews:121,
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
    ratings: 60,
    reviews:121,
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
    ratings: 60,
    reviews:121,
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
    ratings: 20,
    reviews:121,
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
    ratings: 60,
    reviews:121,
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
    ratings: 60,
    reviews:121,
    outOfStock: true,
  },
];

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
        {productsSale.map((product, index) => (
          <ProductOwlCarousel product={product} key={index} />
        ))}
      </OwlCarousel>
    </div>
  );
}

export default OnSale;
