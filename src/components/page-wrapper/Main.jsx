import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Cart from "../../pages/Cart";
import Checkout from "../../pages/Checkout";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import MyAccount from "../../pages/MyAccount";
import ProductDetails from "../../pages/ProductDetails";
import Shop from "../../pages/shop/Shop";
import Wishlist from "../../pages/Wishlist";

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
