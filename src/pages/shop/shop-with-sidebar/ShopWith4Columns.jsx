import React from "react";
import ProductShop234Sidebar from "../product-shop/with-sidebar/ProductShop234Sidebar";

function ShopWith4Columns({ products }) {
  return (
    <>
      {products.map((product) => (
        <div className="col-6 col-md-4 col-lg-4 col-xl-3">
          <ProductShop234Sidebar key={product.id} product={product} />
        </div>
      ))}
    </>
  );
}

export default ShopWith4Columns;
