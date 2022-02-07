import React from "react";

function CartBottom() {
  return (
    <div className="cart-bottom">
      <div className="cart-discount">
        <form action="">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              required
              placeholder="coupon code"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-primary-2" type="submit">
                <i className="icon-long-arrow-right"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

      <a href="#" className="btn btn-outline-dark-2">
        <span>UPDATE CART</span>
        <i className="icon-refresh"></i>
      </a>
    </div>
  );
}

export default CartBottom;
