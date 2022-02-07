import React from "react";
import Breadcrumb from "../shop/shop-with-sidebar/Breadcrumb";
import MyAccountAddresses from "./MyAccountAddresses";
import MyAccountDashboard from "./MyAccountDashboard";
import MyAccountDetails from "./MyAccountDetails";
import MyAccountDownloads from "./MyAccountDownloads";
import MyAccountNav from "./MyAccountNav";
import MyAccountOrders from "./MyAccountOrders";
const breadcrumb = {
  item1: "Shop",
  active1: "unactive",
  item2: "My Account",
  active2: "active",
};

function MyAccount() {
  return (
    <>
      <Breadcrumb breadcrumb={breadcrumb} />
      <div class="page-content">
        <div class="dashboard">
          <div class="container">
            <div class="row">
              <MyAccountNav />
              <div class="col-md-8 col-lg-9">
                <div class="tab-content">
                  <MyAccountDashboard />
                  <MyAccountOrders />
                  <MyAccountDownloads />
                  <MyAccountAddresses />
                  <MyAccountDetails />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
