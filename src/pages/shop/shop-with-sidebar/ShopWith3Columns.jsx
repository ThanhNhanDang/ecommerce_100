import React from "react";
import FlipMove from "react-flip-move";
import ProductShop234Sidebar from "../product-shop/with-sidebar/ProductShop234Sidebar";

function ShopWith3Columns({ products }) {
  return (
    <FlipMove typeName={null}>
      {products.map((product) => (
        <div className="col-6 col-md-4 col-lg-4">
          <ProductShop234Sidebar key={product.id} product={product} />
        </div>
      ))}
    </FlipMove>
  );
}

export default ShopWith3Columns;
