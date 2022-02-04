import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import ProductDetails from "../../pages/ProductDetails";
import Shop from "../../pages/shop/Shop";
import Wishlist from "../../pages/Wishlist";

function Main() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
      <Shop />
    </main>
  );
}

export default Main;
