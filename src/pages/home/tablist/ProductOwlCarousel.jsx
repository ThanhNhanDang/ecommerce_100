import React from "react";

function ProductOwlCarousel(props) {
  return (
    <div className="product product-2">
      <figure className="product-media">
        {props.product.new && (
          <span className="product-label label-circle label-new">New</span>
        )}
        {props.product.top && (
          <span className="product-label label-circle label-top">Top</span>
        )}
        {props.product.sale && (
          <span className="product-label label-circle label-sale">Sale</span>
        )}
        {props.product.outOfStock && (
          <span className="product-label label-out">
            Out Of Stock
          </span>
        )}
        <a href="product.html">
          <img
            src={props.product.img}
            alt="Product image"
            className="product-image"
          />
          <img
            src={props.product.imgHover}
            alt="Product image"
            className="product-image-hover"
          />
        </a>

        <div className="product-action-vertical">
          <a href="/#" className="btn-product-icon btn-wishlist btn-expandable">
            <span>add to wishlist</span>
          </a>
        </div>

        <div className="product-action product-action-dark">
          <a href="/#" className="btn-product btn-cart" title="Add to cart">
            <span>add to cart</span>
          </a>
          <a
            href="popup/quickView.html"
            className="btn-product btn-quickview"
            title="Quick view"
          >
            <span>quick view</span>
          </a>
        </div>
      </figure>
      <div className="product-body">
        <div className="product-cat">
          <a href="/#">{props.product.cat}</a>
        </div>
        <h3 className="product-title">
          <a href="product.html">{props.product.title}</a>
        </h3>
        <div className="product-price">
          {props.product.outOfStock === props.product.oldPrice ? (
            "$" + props.product.price
          ) : props.product.oldPrice ? (
            <>
              <span className="new-price">${props.product.price}</span>
              <span className="old-price">Was ${props.product.oldPrice}</span>
            </>
          ) : props.product.outOfStock ? (
            <>
              <span class="out-price">${props.product.price}</span>
              <span class="out-text">Out of Stock</span>
            </>
          ) : null}
        </div>
        <div className="ratings-container">
          <div className="ratings">
            <div
              className="ratings-val"
              style={{ width: `${props.product.ratings}%` }}
            ></div>
          </div>
          <span className="ratings-text">
            ( {props.product.reviews} Reviews )
          </span>
        </div>
        {props.product.color && (
          <div className="product-nav product-nav-dots">
            {props.product.colors.map((color, index) => (
              <a
                key={index}
                href="/#"
                className={color.active ? "active" : " "}
                style={{ background: color.color }}
              >
                <span className="sr-only">Color</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductOwlCarousel;
