import React from "react";
import { productsHome } from "../../data";
import QuickView from "../shop/QuickView";

function TableCart() {
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState(null);
  const handleClickOpen = (item) => {
    setProduct(item);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleQuantity = (item) => {
    console.log(item.quantity);
  };
  return (
    <>
      {product ? (
        <QuickView onClose={handleClose} open={open} product={product} />
      ) : (
        ""
      )}

      <table class="table table-cart table-mobile">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
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
                  {/* End .product-title */}
                </div>
                {/* End .product */}
              </td>
              <td class="price-col">${item.price}</td>
              <td class="quantity-col">
                <div class="cart-product-quantity">
                  <input
                    type="number"
                    class="form-control"
                    value="1"
                    min="1"
                    max="10"
                    step="1"
                    data-decimals="0"
                    required
                  />
                </div>
              </td>
              <td class="total-col">${item.price * item.quantity}</td>
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

export default TableCart;
