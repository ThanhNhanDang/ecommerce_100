import React from "react";
import { Link } from "react-router-dom";

function MyAccountDownloads() {
  return (
    <div
      class="tab-pane fade"
      id="tab-downloads"
      role="tabpanel"
      aria-labelledby="tab-downloads-link"
    >
      <p>No downloads available yet.</p>
      <Link to="/shop/grid-3-columns" class="btn btn-outline-primary-2">
        <span>GO SHOP</span>
        <i class="icon-long-arrow-right"></i>
      </Link>
    </div>
  );
}

export default MyAccountDownloads;
