import React from "react";
import BannerItems from "./BannerItems";

const banners = [
  {
    id: 1,
    class: "mb-lg-1 mb-xl-2",
    image: "/assets/images/demos/demo-3/banners/banner-1.jpg",
    subTitle: "Top Product",
    title: "Edifier",
    titleBr: "Stereo Bluetooth",
    span: null,
    button: (
      <a href="/#" className="banner-link">
        Shop Now<i className="icon-long-arrow-right"></i>
      </a>
    ),
  },
  {
    id: 2,
    class: "mb-lg-1 mb-xl-2",
    image: "/assets/images/demos/demo-3/banners/banner-2.jpg",
    subTitle: "Clearance",
    title: "GoPro - Fusion 360",
    titleBr: null,
    span: "Save $70",
    button: (
      <a href="/#" className="banner-link">
        Shop Now<i className="icon-long-arrow-right"></i>
      </a>
    ),
  },
  {
    id: 3,
    class: "mb-0",
    image: "/assets/images/demos/demo-3/banners/banner-3.jpg",
    subTitle: "Featured",
    title: "Apple Watch 4",
    titleBr: null,
    span: "Our Hottest Deals",
    button: (
      <a href="/#" className="banner-link">
        Shop Now<i className="icon-long-arrow-right"></i>
      </a>
    ),
  },
];

function IntroBanners() {
  return (
    <div className="col-lg-4">
      <div className="intro-banners">
        {banners.map((banner) => (
          <BannerItems key={banner.id} banner={banner} />
        ))}
      </div>
      {/* End .intro-banners */}
    </div>
  );
}

export default IntroBanners;
