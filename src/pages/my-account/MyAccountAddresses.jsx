import React from "react";

function MyAccountAddresses() {
  return (
    <div
      class="tab-pane fade"
      id="tab-address"
      role="tabpanel"
      aria-labelledby="tab-address-link"
    >
      <p>
        The following addresses will be used on the checkout page by default.
      </p>

      <div class="row">
        <div class="col-lg-6">
          <div class="card card-dashboard">
            <div class="card-body">
              <h3 class="card-title">Billing Address</h3>
              {/* End .card-title */}

              <p>
                User Name
                <br />
                User Company
                <br />
                John str
                <br />
                New York, NY 10001
                <br />
                1-234-987-6543
                <br />
                yourmail@mail.com
                <br />
                <a href="/#">
                  Edit <i class="icon-edit"></i>
                </a>
              </p>
            </div>
            {/* End .card-body */}
          </div>
          {/* End .card-dashboard */}
        </div>
        {/* End .col-lg-6 */}

        <div class="col-lg-6">
          <div class="card card-dashboard">
            <div class="card-body">
              <h3 class="card-title">Shipping Address</h3>
              {/* End .card-title */}

              <p>
                You have not set up this type of address yet.
                <br />
                <a href="/#">
                  Edit <i class="icon-edit"></i>
                </a>
              </p>
            </div>
            {/* End .card-body */}
          </div>
          {/* End .card-dashboard */}
        </div>
        {/* End .col-lg-6 */}
      </div>
      {/* End .row */}
    </div>
  );
}

export default MyAccountAddresses;
