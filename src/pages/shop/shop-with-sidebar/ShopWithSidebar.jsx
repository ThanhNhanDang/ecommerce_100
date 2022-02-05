import React from "react";
import { Route, Routes } from "react-router-dom";
import { products } from "../../../data";
import Breadcrumb from "./Breadcrumb";
import Pagination from "@mui/material/Pagination";
import ShopWith1Columns from "./ShopWith1Columns";
import ShopWith2Columns from "./ShopWith2Columns";
import ShopWith3Columns from "./ShopWith3Columns";
import ShopWith4Columns from "./ShopWith4Columns";
import Toolbox from "./toolbox/Toolbox";
import Sidebar from "./sidebar/Sidebar";

const beadcrumb = {
  item1: "Shop",
  active1: "",
  item2: "Grid 3 Columns",
  active2: "active",
};

const toolboxLeft = {
  limit: 9,
  length: products.length,
};

function ShopWithSidebar() {
  const [page, setPage] = React.useState(1);
  const [productsPagi, setProductsPagi] = React.useState(
    products.slice(0, toolboxLeft.limit)
  );
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });

    const start = toolboxLeft.limit * (value - 1);
    const end = start + toolboxLeft.limit;
    setProductsPagi(products.slice(start, end));
  };
  return (
    <>
      <Breadcrumb breadcrumb={beadcrumb} />
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <Toolbox toolboxLeft={toolboxLeft} />
              <div className="products mb-3">
                <div className="row justify-content-center">
                  <Routes>
                    <Route
                      path="/shop/grid-1-columns"
                      element={<ShopWith1Columns />}
                    />
                    <Route
                      path="/shop/grid-2-columns"
                      element={<ShopWith2Columns products={productsPagi} />}
                    />
                    <Route
                      path="/shop/grid-3-columns"
                      element={<ShopWith3Columns products={productsPagi} />}
                    />
                    <Route
                      path="/shop/grid-4-columns"
                      element={<ShopWith4Columns products={productsPagi} />}
                    />
                  </Routes>
                </div>
              </div>
              <nav
                aria-label="Page navigation"
                className="pagination justify-content-center"
              >
                <Pagination
                  color="primary"
                  variant="outlined"
                  shape="rounded"
                  count={Math.floor(toolboxLeft.length / toolboxLeft.limit)}
                  page={page}
                  onChange={handleChange}
                />
              </nav>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopWithSidebar;
