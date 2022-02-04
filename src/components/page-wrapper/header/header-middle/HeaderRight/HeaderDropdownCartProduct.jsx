import React from "react";
import { Link } from "react-router-dom";

function HeaderDropdownCartProduct(props) {
  return (
    <div className="product">
      <div className="product-cart-details">
        <h4 className="product-title">
          <Link to={"/product/" + props.productCart.id}>
            {props.productCart.title}
          </Link>
        </h4>

        <span className="cart-product-info">
          <span className="cart-product-qty">{props.productCart.qty}</span>x $
          {props.productCart.price}
        </span>
      </div>

      <figure className="product-image-container">
        <Link to={"/product/" + props.productCart.id} className="product-image">
          <img src={props.productCart.image} alt="product" />
        </Link>
      </figure>
      <a href="/#" className="btn-remove" title="Remove Product">
        <i className="icon-close"></i>
      </a>
    </div>
  );
}

export default HeaderDropdownCartProduct;
