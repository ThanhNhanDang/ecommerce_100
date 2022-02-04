import React from "react";
import ProductOwlCarousel from "../tablist/ProductOwlCarousel";

const products = [
  {
    top: true,
    sale: true,
    img: "assets/images/demos/demo-3/products/product-5.jpg",
    imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Digital Cameras",
    title: "Canon - EOS 5D Mark IV DSLR Camera",
    price: 3599.99,
    oldPrice: 3999.99,
    ratings: 80,
    reviews: 5,
  },
  {
    top: true,
    sale: false,
    img: "assets/images/demos/demo-3/products/product-6.jpg",
    imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
    cat: "Digital Cameras",
    title: "Canon - EOS 5D Mark IV DSLR Camera",
    price: 3599.99,
    oldPrice: 3999.99,
    ratings: 100,
    reviews: 1201,
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
