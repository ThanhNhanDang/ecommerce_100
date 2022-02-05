import React from "react";
import { Route, Routes } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import ShopWith1Columns from "./ShopWith1Columns";
import ShopWith2Columns from "./ShopWith2Columns";
import ShopWith3Columns from "./ShopWith3Columns";
import ShopWith4Columns from "./ShopWith4Columns";
import Toolbox from "./toolbox/Toolbox";

const beadcrumb = {
  item1: "Shop",
  active1: "",
  item2: "Grid 3 Columns",
  active2: "active",
};

const toolboxLeft = {
  limit: 9,
  length: 54,
};

const products = [{}];

function ShopWithSidebar() {
  return (
    <>
      <Breadcrumb breadcrumb={beadcrumb} />
      <div class="page-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <Toolbox toolboxLeft={toolboxLeft} />
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
                  exact
                  element={<ShopWith3Columns products={products} />}
                />
                <Route
                  path="/shop/grid-4-columns"
                  element={<ShopWith4Columns />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopWithSidebar;
