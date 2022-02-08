import React from "react";
import ProductBreadcrumb from "./ProductBreadcrumb";
import ProductDetailsTop from "./product-details-top/ProductDetailsTop";
function Product() {
  useScript ("/assets/js/jquery.elevateZoom.min.js")
  return (
    <>
      <ProductBreadcrumb />
      <div class="page-content">
        <div class="container">
          <ProductDetailsTop />
        </div>
      </div>
    </>
  );
}

export default Product;
