import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopWith1Columns from "./ShopWith1Columns";
import ShopWith2Columns from "./ShopWith2Columns";
import ShopWith3Columns from "./ShopWith3Columns";
import ShopWith4Columns from "./ShopWith4Columns";

function ShopWithSidebar() {
  return (
    <Routes>
      <Route
        path="/shop/grid-1-columns"
        element={<ShopWith1Columns/>}
      />
      <Route
        path="/shop/grid-2-columns"
        element={<ShopWith2Columns/>}
      />
      <Route
        path="/shop/grid-3-columns"
        element={<ShopWith3Columns/>}
      />
      <Route
        path="/shop/grid-4-columns"
        element={<ShopWith4Columns/>}
      />
    </Routes>
  );
}

export default ShopWithSidebar;
