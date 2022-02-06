import { Pagination } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../../data";
import Breadcrumb from "./Breadcrumb";
import Toolbox from "./toolbox/Toolbox";
import Sidebar from "./sidebar/Sidebar"
const beadcrumb = {
  item1: "Shop",
  active1: "unactive",
  item2: "Grid 3 Columns",
  active2: "active",
};

const toolboxLeft = {
  limit: 9,
  length: products.length,
};

function ShopWith1Columns() {
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
                {productsPagi.map((product) => (
                  <div class="product product-list">
                    <div class="row">
                      <div class="col-6 col-lg-3">
                        <figure class="product-media">
                          {product.new && (
                            <span className="product-label label-new">New</span>
                          )}
                          {product.top && (
                            <span className="product-label label-top">Top</span>
                          )}
                          {product.sale && (
                            <span className="product-label label-sale">
                              Sale
                            </span>
                          )}
                          {product.outOfStock && (
                            <span className="product-label label-out">
                              Out Of Stock
                            </span>
                          )}
                          <Link to={`/product/${product.id}`}>
                            <img
                              src={product.img}
                              alt="Product image"
                              class="product-image"
                            />
                          </Link>
                        </figure>
                        {/* End .product-media */}
                      </div>
                      {/* End .col-sm-6 col-lg-3 */}

                      <div class="col-6 col-lg-3 order-lg-last">
                        <div class="product-list-action">
                          <div class="product-price">$76.00</div>
                          {/* End .product-price */}
                          <div class="ratings-container">
                            <div class="ratings">
                              <div
                                class="ratings-val"
                                style={{ width: `20%` }}
                              ></div>
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span class="ratings-text">( 2 Reviews )</span>
                          </div>
                          {/* End .rating-container */}

                          <div class="product-action">
                            <a
                              href="popup/quickView.html"
                              class="btn-product btn-quickview"
                              title="Quick view"
                            >
                              <span>quick view</span>
                            </a>
                            <a
                              href="#"
                              class="btn-product btn-compare"
                              title="Compare"
                            >
                              <span>compare</span>
                            </a>
                          </div>
                          {/* End .product-action */}

                          <a href="#" class="btn-product btn-cart">
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-list-action */}
                      </div>
                      {/* End .col-sm-6 col-lg-3 */}

                      <div class="col-lg-6">
                        <div class="product-body product-action-inner">
                          <a
                            href="#"
                            class="btn-product btn-wishlist"
                            title="Add to wishlist"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <div class="product-cat">
                            <a href="#">Jeans</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 class="product-title">
                            <a href="product.html">
                              Blue utility pinafore denim dress
                            </a>
                          </h3>
                          {/* End .product-title */}

                          <div class="product-content">
                            <p>
                              Pellentesque aliquet nibh nec urna. In nisi neque,
                              aliquet vel, dapibus id, mattis vel, nisi.{" "}
                            </p>
                          </div>
                          {/* End .product-content */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .col-lg-6 */}
                    </div>
                    {/* End .row */}
                  </div>
                ))}
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

export default ShopWith1Columns;
