import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopWith1Columns from "./shop-with-sidebar/ShopWith1Columns";
import ShopWith2Columns from "./shop-with-sidebar/ShopWith2Columns";
import ShopWith3Columns from "./shop-with-sidebar/ShopWith3Columns";
import ShopWith4Columns from "./shop-with-sidebar/ShopWith4Columns";

function Shop() {
  return (
    <Routes>
      <Route
        path="/shop/grid-1-columns"
        element={<ShopWith1Columns />}
      />
      <Route
        path="/shop/grid-2-columns"
        element={<ShopWith2Columns />}
      />
      <Route
        path="/shop/grid-3-columns"
        element={<ShopWith3Columns />}
      />
      <Route
        path="/shop/grid-4-columns"
        element={<ShopWith4Columns />}
      />
    </Routes>
  );
}

export default Shop;
