import React from "react";
import ProductShop234Sidebar from "../product-shop/with-sidebar/ProductShop234Sidebar";

function ShopWith3Columns(props) {
  return (
    <div className="products mb-3">
      <div className="row justify-content-center">
        {props.products.map((product) => (
          <div className="col-6 col-md-4 col-lg-4">
            <ProductShop234Sidebar key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopWith3Columns;
