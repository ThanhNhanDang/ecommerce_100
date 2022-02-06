import React from "react";
import ProductOwlCarousel from "../tablist/ProductOwlCarousel";

const products = [
  {
    id: 7,
    img: "https://i.ibb.co/NKXgF5t/600-xiaomi-mi-10-pro.png",
    imgHover: "https://i.ibb.co/fN3BMSJ/dien-thoai-chup-anh-dep-11.png",
    thumbnails: [
      {
        active: true,
        img: "https://i.ibb.co/NKXgF5t/600-xiaomi-mi-10-pro.png",
      },
      {
        active: false,
        img:
          "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/27/1_637394086980896366.png",
      },
      {
        active: false,
        img:
          "https://cdn.tgdd.vn/Products/Images/42/229228/xiaomi-redmi-note-10-pro-thumb-xam-600x600-600x600.jpg",
      },
    ],
    top: false,
    sale: true,
    new: true,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Phasellus hendrerit. Pellentesque",
    color: false,
    colors: [],
    outOfStock: false,
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratingsVal: 60,
    reviews: 2,
  },
  {
    id: 8,
    img: "https://i.ibb.co/T4JNYfj/14ab60b9a783ace9e7a7c97b8e142ef4.png",
    imgHover: "https://i.ibb.co/fN3BMSJ/dien-thoai-chup-anh-dep-11.png",
    thumbnails: [
      {
        active: true,
        img: "https://i.ibb.co/T4JNYfj/14ab60b9a783ace9e7a7c97b8e142ef4.png",
      },
      {
        active: false,
        img:
          "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/p/w/pwb000258050.jpg",
      },
      {
        active: false,
        img: "https://cf.shopee.vn/file/c13f4c35f54168709d41d780611216b1",
      },
    ],
    top: true,
    sale: false,
    new: true,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Phasellus hendrerit. Pellentesque",
    color: false,
    colors: [],
    outOfStock: false,
    cat: "Cameras & Camcorders",
    title: "GoPro - HERO7 Black HD Waterproof Action",
    price: 349.99,
    ratingsVal: 60,
    reviews: 212,
  },
];

function DealsOutlet() {
  return (
    <div className="bg-light deal-container pt-7 pb-7 mb-5">
      <div className="container">
        <div className="heading text-center mb-4">
          <h2 className="title">Deals & Outlet</h2>
          <p className="title-desc">Today’s deal and more</p>
        </div>
        <div className="row">
          <div className="col-lg-6 deal-col">
            <div
              className="deal"
              style={{
                backgroundImage:
                  "url('assets/images/demos/demo-3/deal/bg-1.jpg')",
              }}
            >
              <div className="deal-top">
                <h2>Deal of the Day.</h2>
                <h4>Limited quantities. </h4>
              </div>
              <div className="deal-content">
                <h3 className="product-title">
                  <a href="product.html">
                    Home Smart Speaker with Google Assistant
                  </a>
                </h3>

                <div className="product-price">
                  <span className="new-price">$129.00</span>
                  <span className="old-price">Was $150.99</span>
                </div>

                <a href="product.html" className="btn btn-link">
                  <span>Shop Now</span>
                  <i className="icon-long-arrow-right"></i>
                </a>
              </div>
              <div className="deal-bottom">
                <div className="deal-countdown" data-until="+10h"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="products">
              <div className="row">
                {products.map((product, index) => (
                  <div className="col-6" key={index}>
                    <ProductOwlCarousel product={product} key={index} />
                    {/* End .product */}
                  </div>
                ))}
              </div>
              {/* End .row */}
            </div>
          </div>
        </div>
        <div className="more-container text-center mt-3 mb-0">
          <a href="/#" className="btn btn-outline-dark-2 btn-round btn-more">
            <span>Shop more Outlet deals</span>
            <i className="icon-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DealsOutlet;
