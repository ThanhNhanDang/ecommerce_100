import React from "react";
import ProductOwlCarousel from "../../tablist/ProductOwlCarousel";
import OwlCarousel from "react-owl-carousel";

const products = [
  {
    img: "/assets/images/demos/demo-3/products/product-15.jpg",
    top: true,
    color: false,
    colors: [],
    imgHover: "/assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Headphones",
    title: "Bose - SoundSport wireless headphones",
    price: 199.99,
    ratings: 100,
    reviews: 1223,
  },
  {
    img: "/assets/images/demos/demo-3/products/product-15.jpg",
    new: false,
    color: true,
    colors: [
      { active: true, color: "#e2e2e2" },
      { active: false, color: "#333333" },
      { active: false, color: "#f2bc9e" },
    ],
    imgHover: "/assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Video Games",
    title: "Microsoft - Refurbish Xbox One S 500GB",
    price: 279.99,
    ratings: 100,
    outOfStock: true,
    reviews: 1223,
  },
  {
    img: "/assets/images/demos/demo-3/products/product-15.jpg",
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
    img: "/assets/images/demos/demo-3/products/product-15.jpg",
    new: true,
    color: false,
    colors: [],
    imgHover: "/assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratings: 100,
    oldPrice: 367.99,
    reviews: 1223,
  },
  {
    img: "/assets/images/demos/demo-3/products/product-15.jpg",
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
    img: "/assets/images/demos/demo-3/products/product-15.jpg",
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
    img: "/assets/images/demos/demo-3/products/product-15.jpg",
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
    img: "/assets/images/demos/demo-3/products/product-15.jpg",
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
function TopSellingAccessories(props) {
  return (
    <div
      className="tab-pane p-0 fade"
      id="top-acc-tab"
      role="tabpanel"
      aria-labelledby="top-acc-link"
    >
      <OwlCarousel
        className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
        {...props.optionsTop}
      >
        {products.map((product, index) => (
          <ProductOwlCarousel product={product} key={index} />
        ))}
      </OwlCarousel>
    </div>
  );
}

export default TopSellingAccessories;
