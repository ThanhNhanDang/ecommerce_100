import React from "react";
import ProductShop234Sidebar from "../product-shop/with-sidebar/ProductShop234Sidebar";

function ShopWith2Columns({ products }) {
  return (
    <>
      {products.map((product) => (
        <div className="col-6">
          <ProductShop234Sidebar key={product.id} product={product} />
        </div>
      ))}
    </>
  );
}

export default ShopWith2Columns;
