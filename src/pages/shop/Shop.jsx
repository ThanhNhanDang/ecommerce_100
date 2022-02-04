import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopCateBoxed from "./shop-category/ShopCateBoxed";
import ShopCateFullwidth from "./shop-category/ShopCateFullwidth";
import ShopBoxedNoSidebar from "./shop-no-sidebar/ShopBoxedNoSidebar";
import ShopFullwidthNoSidebar from "./shop-no-sidebar/ShopFullwidthNoSidebar";
import ShopWith1Columns from "./shop-with-sidebar/ShopWith1Columns";
import ShopWith2Columns from "./shop-with-sidebar/ShopWith2Columns";
import ShopWith3Columns from "./shop-with-sidebar/ShopWith3Columns";
import ShopWith4Columns from "./shop-with-sidebar/ShopWith4Columns";

function Shop() {
  return (
    <Routes>
      <Route path="/shop/grid-1-columns" element={<ShopWith1Columns />} />
      <Route path="/shop/grid-2-columns" element={<ShopWith2Columns />} />
      <Route path="/shop/grid-3-columns" element={<ShopWith3Columns />} />
      <Route path="/shop/grid-4-columns" element={<ShopWith4Columns />} />
      <Route path="/shop/boxed-no-sidebar" element={<ShopBoxedNoSidebar />} />
      <Route
        path="/shop/fullwidth-no-sidebar"
        element={<ShopFullwidthNoSidebar />}
      />
      <Route path="/shop/product-category-boxed" element={<ShopCateBoxed />} />{" "}
      <Route
        path="/shop/product-category-fullwidth"
        element={<ShopCateFullwidth />}
      />
    </Routes>
  );
}

export default Shop;
