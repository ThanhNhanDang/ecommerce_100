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
      <table class="table table-wishlist table-mobile">
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
              <td class="product-col">
                <div class="product">
                  <figure class="product-media">
                    <a onClick={() => handleClickOpen(item)}>
                      <img src={item.img} alt="Product image" />
                    </a>
                  </figure>

                  <h3 class="product-title">
                    <a onClick={() => handleClickOpen(item)}>{item.title}</a>
                  </h3>
                </div>
              </td>
              <td class="price-col">${item.price}</td>
              <td class="stock-col">
                {item.outOfStock ? (
                  <span class="out-of-stock">Out of stock</span>
                ) : (
                  <span class="in-stock">In stock</span>
                )}
              </td>
              <td class="action-col">
                <div class="dropdown">
                  <button
                    class="btn btn-block btn-outline-primary-2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="icon-list-alt"></i>Select Options
                  </button>

                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      First option
                    </a>
                    <a class="dropdown-item" href="#">
                      Another option
                    </a>
                    <a class="dropdown-item" href="#">
                      The best option
                    </a>
                  </div>
                </div>
              </td>
              <td class="action-col">
                {item.outOfStock ? (
                  <button class="btn btn-block btn-outline-primary-2 disabled">
                    Out of Stock
                  </button>
                ) : (
                  <button class="btn btn-block btn-outline-primary-2">
                    <i class="icon-cart-plus"></i>Add to Cart
                  </button>
                )}
              </td>
              <td class="remove-col">
                <button class="btn-remove">
                  <i class="icon-close"></i>
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
