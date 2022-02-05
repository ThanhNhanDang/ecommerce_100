import React from "react";
import ProductShop234Sidebar from "../product-shop/with-sidebar/ProductShop234Sidebar";

function ShopWith3Columns(props) {
  return (
    <div className="products mb-3">
      <div className="row justify-content-center">
        <div className="col-6 col-md-4 col-lg-4">
          {props.products.map((product) => (
            <ProductShop234Sidebar key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopWith3Columns;
