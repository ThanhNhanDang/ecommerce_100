import React from "react";
import { Link } from "react-router-dom";

import HeaderDropdownCartProduct from "./HeaderDropdownCartProduct";

const productCarts = [
  {
    id: 1,
    title: "Beige knitted elastic runner shoes",
    qty: "1",
    price: "84.00",
    image: "/assets/images/products/cart/product-1.jpg",
  },
  {
    id: 2,
    title: "Blue utility pinafore denim dress",
    qty: "1",
    price: "76.00",
    image: "/assets/images/products/cart/product-2.jpg",
  },
];

function HeaderRightDropdownCart() {
  return (
    <div className="dropdown cart-dropdown">
      <a
        href="/#"
        className="dropdown-toggle"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        data-display="static"
      >
        <div className="icon">
          <i className="icon-shopping-cart"></i>
          <span className="cart-count">2</span>
        </div>
        <p>Cart</p>
      </a>
      <div className="dropdown-menu dropdown-menu-right">
        <div className="dropdown-cart-products">
          {productCarts.map((productCart) => (
            <HeaderDropdownCartProduct
              key={productCart.id}
              productCart={productCart}
            ></HeaderDropdownCartProduct>
          ))}
          <div className="dropdown-cart-total">
            <span>Total</span>

            <span className="cart-total-price">$160.00</span>
          </div>

          <div className="dropdown-cart-action">
            <Link to="my-cart" className="btn btn-primary">
              View Cart
            </Link>
            <Link to="/checkout" className="btn btn-outline-primary-2">
              <span>Checkout</span>
              <i className="icon-long-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderRightDropdownCart;
