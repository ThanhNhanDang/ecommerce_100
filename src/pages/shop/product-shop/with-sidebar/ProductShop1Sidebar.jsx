import React from "react";
import { Link } from "react-router-dom";
import QuickView from "../../QuickView";

function ProductShop1Sidebar({ product }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <QuickView onClose={handleClose} open={open} product={product} />

      <div className="product product-list">
        <div className="row">
          <div className="col-6 col-lg-3">
            <figure className="product-media">
              {product.new && (
                <span className="product-label label-new">New</span>
              )}
              {product.top && (
                <span className="product-label label-top">Top</span>
              )}
              {product.sale && (
                <span className="product-label label-sale">Sale</span>
              )}
              {product.outOfStock && (
                <span className="product-label label-out">Out Of Stock</span>
              )}
              <a>
                <img
                  src={product.img}
                  style={{cursor:"pointer"}}
                  alt="Product image"
                  className="product-image"
                  onClick={handleClickOpen}
                />
              </a>
            </figure>
            {/* End .product-media */}
          </div>
          {/* End .col-sm-6 col-lg-3 */}

          <div className="col-6 col-lg-3 order-lg-last">
            <div className="product-list-action">
              <div
                className={product.outOfStock ? "out-price" : "product-price"}
              >
                ${product.price}
              </div>
              {/* End .product-price */}
              <div className="ratings-container">
                <div className="ratings">
                  <div
                    className="ratings-val"
                    style={{ width: `${product.ratingsVal}%` }}
                  ></div>
                  {/* End .ratings-val */}
                </div>
                {/* End .ratings */}
                <span className="ratings-text">
                  ( {product.reviews} Reviews )
                </span>
              </div>
              {/* End .rating-container */}

              <div className="product-action">
                <a
                  className="btn-product btn-quickview"
                  title="Quick view"
                  style={{cursor:"pointer"}}
                  onClick={handleClickOpen}
                >
                  <span>quick view</span>
                </a>
                <a
                  href="/#"
                  className="btn-product btn-compare"
                  title="Compare"
                >
                  <span>compare</span>
                </a>
              </div>
              {/* End .product-action */}

              <a
                href="/#"
                className={`btn-product btn-cart ${
                  product.outOfStock && "disabled"
                }`}
              >
                <span>add to cart</span>
              </a>
            </div>
            {/* End .product-list-action */}
          </div>
          {/* End .col-sm-6 col-lg-3 */}

          <div className="col-lg-6">
            <div className="product-body product-action-inner">
              <a
                href="/#"
                className="btn-product btn-wishlist"
                title="Add to wishlist"
              >
                <span>add to wishlist</span>
              </a>
              <div className="product-cat">
                <Link to="/shop/grid-3-columns">{product.cat}</Link>
              </div>
              {/* End .product-cat */}
              <h3 className="product-title">
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </h3>
              {/* End .product-title */}

              <div className="product-content">
                <p>{product.description}</p>
              </div>
              {/* End .product-content */}
            </div>
            {/* End .product-body */}
          </div>
          {/* End .col-lg-6 */}
        </div>
        {/* End .row */}
      </div>
    </>
  );
}

export default ProductShop1Sidebar;
