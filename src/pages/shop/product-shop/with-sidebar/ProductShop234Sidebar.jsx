import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuickView from "../../QuickView";

function ProductShop234Sidebar(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageProduct, setImageProduct] = useState(props.product.img);
  const handleActiveThumbs = (index, img) => {
    setActiveIndex(index);
    setImageProduct(img);
  };

  return (
    <>
      <QuickView onClose={handleClose} open={open} product={props.product} />
      <div className="product product-7 text-center">
        <figure className="product-media">
          {props.product.new && (
            <span className="product-label label-new">New</span>
          )}
          {props.product.top && (
            <span className="product-label label-top">Top</span>
          )}
          {props.product.sale && (
            <span className="product-label label-sale">Sale</span>
          )}
          {props.product.outOfStock && (
            <span className="product-label label-out">Out Of Stock</span>
          )}
          <a>
            <img
              src={imageProduct}
              alt="Product image"
              onClick={handleClickOpen}
              className="product-image"
            />
          </a>

          <div className="product-action-vertical">
            <a className="btn-product-icon btn-wishlist btn-expandable">
              <span>add to wishlist</span>
            </a>
            <a
              onClick={handleClickOpen}
              style={{ cursor: "pointer" }}
              className="btn-product-icon btn-quickview"
              title="Quick view"
            >
              <span>Quick view</span>
            </a>

            <a
              href="/#"
              className="btn-product-icon btn-compare"
              title="Compare"
            >
              <span>Compare</span>
            </a>
          </div>

          <div className="product-action">
            <a href="/#" className="btn-product btn-cart">
              <span>add to cart</span>
            </a>
          </div>
        </figure>

        <div className="product-body">
          <div className="product-cat">
            <a href="/#">{props.product.cat}</a>
          </div>
          <h3 className="product-title">
            <Link to={`/product/${props.product.id}`}>
              {props.product.title}
            </Link>
          </h3>
          <div className="product-price">
            {props.product.outOfStock ? (
              <span class="out-price">${props.product.price}</span>
            ) : (
              "$" + props.product.price
            )}
          </div>
          <div className="ratings-container">
            <div className="ratings">
              <div
                className="ratings-val"
                style={{ width: `${props.product.ratingsVal}%` }}
              ></div>
            </div>
            <span className="ratings-text">
              ( {props.product.reviews} Reviews )
            </span>
          </div>

          <div className="product-nav product-nav-thumbs">
            {props.product.thumbnails.map((item, index) => (
              <a
                className={activeIndex === index ? "active" : "unactive"}
                key={index}
                onClick={() => handleActiveThumbs(index, item.img)}
              >
                <img src={item.img} alt="product desc" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductShop234Sidebar;
