import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopCateBoxed from "./shop-category/ShopCateBoxed";
import ShopCateFullwidth from "./shop-category/ShopCateFullwidth";
import ShopBoxedNoSidebar from "./shop-no-sidebar/ShopBoxedNoSidebar";
import ShopFullwidthNoSidebar from "./shop-no-sidebar/ShopFullwidthNoSidebar";
import ShopWithSidebar from "./shop-with-sidebar/ShopWithSidebar";

function Shop() {
  return (
    <>
      <ShopWithSidebar />
      <Routes>
        <Route path="/shop/boxed-no-sidebar" element={<ShopBoxedNoSidebar />} />
        <Route
          path="/shop/fullwidth-no-sidebar"
          element={<ShopFullwidthNoSidebar />}
        />
        <Route
          path="/shop/product-category-boxed"
          element={<ShopCateBoxed />}
        />
        <Route
          path="/shop/product-category-fullwidth"
          element={<ShopCateFullwidth />}
        />
      </Routes>
    </>
  );
}

export default Shop;
