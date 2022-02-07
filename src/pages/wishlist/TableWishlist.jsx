import React from "react";
import { productsHome } from "../../data";
import QuickView from "../shop/QuickView";

function TableWishlist() {
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState(null);
  const handleClickOpen = (item) => {
    setProduct(item);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {product ? (
        <QuickView onClose={handleClose} open={open} product={product} />
      ) : (
        ""
      )}
      <table className="table table-wishlist table-mobile">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productsHome.map((item) => (
            <tr key={item.id}>
              <td className="product-col">
                <div className="product">
                  <figure className="product-media">
                    <a onClick={() => handleClickOpen(item)}>
                      <img src={item.img} alt="Product image" />
                    </a>
                  </figure>

                  <h3 className="product-title">
                    <a onClick={() => handleClickOpen(item)}>{item.title}</a>
                  </h3>
                </div>
              </td>
              <td className="price-col">${item.price}</td>
              <td className="stock-col">
                {item.outOfStock ? (
                  <span className="out-of-stock">Out of stock</span>
                ) : (
                  <span className="in-stock">In stock</span>
                )}
              </td>
              <td className="action-col">
                <div className="dropdown">
                  <button
                    className="btn btn-block btn-outline-primary-2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="icon-list-alt"></i>Select Options
                  </button>

                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      First option
                    </a>
                    <a className="dropdown-item" href="#">
                      Another option
                    </a>
                    <a className="dropdown-item" href="#">
                      The best option
                    </a>
                  </div>
                </div>
              </td>
              <td className="action-col">
                {item.outOfStock ? (
                  <button className="btn btn-block btn-outline-primary-2 disabled">
                    Out of Stock
                  </button>
                ) : (
                  <button className="btn btn-block btn-outline-primary-2">
                    <i className="icon-cart-plus"></i>Add to Cart
                  </button>
                )}
              </td>
              <td className="remove-col">
                <button className="btn-remove">
                  <i className="icon-close"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableWishlist;
