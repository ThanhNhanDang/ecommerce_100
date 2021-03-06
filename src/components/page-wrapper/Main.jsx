import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Cart from "../../pages/cart/Cart";
import Contact from "../../pages/Contact";
import Home from "../../pages/home/Home";
import Checkout from "../../pages/checkout/Checkout";
import MyAccount from "../../pages/my-account/MyAccount";
import ProductDetails from "../../pages/product-details/Product";
import Shop from "../../pages/shop/Shop";
import Wishlist from "../../pages/wishlist/Wishlist";

function Main() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-cart" element={<Cart />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Shop />
    </main>
  );
}

export default Main;
