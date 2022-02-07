import React from "react";
import { Link } from "react-router-dom";

function CartTotal() {
  return (
    <aside class="col-lg-3">
      <div class="summary summary-cart">
        <h3 class="summary-title">Cart Total</h3>
        {/* End .summary-title */}

        <table class="table table-summary">
          <tbody>
            <tr class="summary-subtotal">
              <td>Subtotal:</td>
              <td>$160.00</td>
            </tr>
            <tr class="summary-shipping">
              <td>Shipping:</td>
              <td>&nbsp;</td>
            </tr>
            <tr class="summary-shipping-row">
              <td>
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    id="free-shipping"
                    name="shipping"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="free-shipping">
                    Free Shipping
                  </label>
                </div>
              </td>
              <td>$0.00</td>
            </tr>
            <tr class="summary-shipping-row">
              <td>
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    id="standart-shipping"
                    name="shipping"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="standart-shipping">
                    Standart:
                  </label>
                </div>
              </td>
              <td>$10.00</td>
            </tr>
            <tr class="summary-shipping-row">
              <td>
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    id="express-shipping"
                    name="shipping"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="express-shipping">
                    Express:
                  </label>
                </div>
              </td>
              <td>$20.00</td>
            </tr>
            <tr class="summary-shipping-estimate">
              <td>
                Estimate for Your Country
                <br /> <a href="dashboard.html">Change address</a>
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr class="summary-total">
              <td>Total:</td>
              <td>$160.00</td>
            </tr>
          </tbody>
        </table>
        {/* End .table table-summary */}

        <a
          href="checkout.html"
          class="btn btn-outline-primary-2 btn-order btn-block"
        >
          PROCEED TO CHECKOUT
        </a>
      </div>
      {/* End .summary */}

      <Link to="/shop/grid-3-columns"  class="btn btn-outline-dark-2 btn-block mb-3">
        <span>CONTINUE SHOPPING</span>
        <i class="icon-refresh"></i>
      </Link>
    </aside>
  );
}

export default CartTotal;
