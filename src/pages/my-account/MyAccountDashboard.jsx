import React from "react";

function MyAccountDashboard() {
  return (
    <div
      class="tab-pane fade show active"
      id="tab-dashboard"
      role="tabpanel"
      aria-labelledby="tab-dashboard-link"
    >
      <p>
        Hello <span class="font-weight-normal text-dark">User</span> (not{" "}
        <span class="font-weight-normal text-dark">User</span>?{" "}
        <a href="/#">Log out</a>)
        <br />
        From your account dashboard you can view your{" "}
        <a href="#tab-orders" class="tab-trigger-link link-underline">
          recent orders
        </a>
        , manage your{" "}
        <a href="#tab-address" class="tab-trigger-link">
          shipping and billing addresses
        </a>
        , and{" "}
        <a href="#tab-account" class="tab-trigger-link">
          edit your password and account details
        </a>
        .
      </p>
    </div>
  );
}

export default MyAccountDashboard;
