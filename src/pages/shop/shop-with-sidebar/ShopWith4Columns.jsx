import { Pagination } from "@mui/material";
import React from "react";
import { products } from "../../../data";
import Breadcrumb from "./Breadcrumb";
import Toolbox from "./toolbox/Toolbox";
import Sidebar from "./sidebar/Sidebar"
import ProductShop234Sidebar from "../product-shop/with-sidebar/ProductShop234Sidebar";

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

function ShopWith4Columns() {
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
                  {productsPagi.map((product) => (
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <ProductShop234Sidebar
                        key={product.id}
                        product={product}
                      />
                    </div>
                  ))}
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

export default ShopWith4Columns;
