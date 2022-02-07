import React from "react";
import TableBody from "./TableBody";

function TableCart({ productsCart }) {
  return (
    <table class="table table-cart table-mobile">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {productsCart.map((item) => (
          <TableBody product={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}

export default TableCart;
