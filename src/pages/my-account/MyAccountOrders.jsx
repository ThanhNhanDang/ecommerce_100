import React from "react";
import { Link } from "react-router-dom";

function MyAccountOrders() {
  return (
    <div
      class="tab-pane fade"
      id="tab-orders"
      role="tabpanel"
      aria-labelledby="tab-orders-link"
    >
      <p>No order has been made yet.</p>
      <Link to="/shop/grid-3-columns" class="btn btn-outline-primary-2">
        <span>GO SHOP</span>
        <i class="icon-long-arrow-right"></i>
      </Link>
    </div>
  );
}

export default MyAccountOrders;
