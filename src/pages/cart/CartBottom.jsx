import React from "react";

function CartBottom() {
  return (
    <div class="cart-bottom">
      <div class="cart-discount">
        <form action="#">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              required
              placeholder="coupon code"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-primary-2" type="submit">
                <i class="icon-long-arrow-right"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

      <a href="#" class="btn btn-outline-dark-2">
        <span>UPDATE CART</span>
        <i class="icon-refresh"></i>
      </a>
    </div>
  );
}

export default CartBottom;
