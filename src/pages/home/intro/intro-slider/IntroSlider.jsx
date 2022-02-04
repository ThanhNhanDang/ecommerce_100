import React from "react";
import { Link } from "react-router-dom";
import SliderItem from "./SliderItem";
import OwlCarousel from "react-owl-carousel";

const sliderItems = [
  {
    id: 1,
    source: "/assets/images/demos/demo-3/slider/slide-1-480w.jpg",
    image: "/assets/images/demos/demo-3/slider/slide-1.jpg",
    subTitle: "Daily Deals",
    title: "AirPods",
    titleBr: "Earphones",
    oldPrice: null,
    price: "247",
    priceSup: "99",
    button: (
      <Link to="/product/grid-3-columns" className="btn btn-primary btn-round">
        <span>Click Here</span>
        <i className="icon-long-arrow-right"></i>
      </Link>
    ),
  },
  {
    id: 1,
    source: "/assets/images/demos/demo-3/slider/slide-2-480w.jpg",
    image: "/assets/images/demos/demo-3/slider/slide-2.jpg",
    subTitle: "Deals and Promotions",
    title: "Echo Dot",
    titleBr: "3rd Gen",
    oldPrice: "49,99",
    price: "29",
    priceSup: "99",
    button: (
      <Link to="/product/grid-3-columns" className="btn btn-primary btn-round">
        <span>Click Here</span>
        <i className="icon-long-arrow-right"></i>
      </Link>
    ),
  },
];

const optionsIntro = {
  items: 1,
  loop: true,
  smartSpeed: 1000,
  navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
  autoplay: true,
  nav: false,
  dots: true,
  responsive: {
    768: {
      nav: true,
      dots: false,
    },
  },
};

function IntroSlider() {
  return (
    <div className="col-lg-8">
      <div className="intro-slider-container slider-container-ratio mb-2 mb-lg-0">
        <OwlCarousel
          className="intro-slider owl-simple owl-dark owl-nav-inside"
          {...optionsIntro}
        >
          {sliderItems.map((sliderItem) => (
            <SliderItem key={sliderItem.id} sliderItem={sliderItem} />
          ))}
        </OwlCarousel>

        {/* End .intro-slider-container */}
      </div>
    </div>
  );
}

export default IntroSlider;
