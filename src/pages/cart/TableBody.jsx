import { useState } from "react";
import QuickView from "../shop/QuickView";

function TableBody(props) {
  const { product } = props;
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    if (isNaN(e.target.value)) return;
    if (Number(e.target.value) < 1) {
      setQuantity("1");
      return;
    }
    setQuantity(e.target.value);
  };

  return (
    <>
      <QuickView onClose={handleClose} open={open} product={product} />
      <tr key={product.id}>
        <td class="product-col">
          <div class="product">
            <figure class="product-media">
              <a onClick={() => handleClickOpen(product)}>
                <img src={product.img} alt="Product image" />
              </a>
            </figure>

            <h3 class="product-title">
              <a onClick={() => handleClickOpen(product)}>{product.title}</a>
            </h3>
            {/* End .product-title */}
          </div>
          {/* End .product */}
        </td>
        <td class="price-col">${product.price}</td>
        <td class="quantity-col">
          <div class="cart-product-quantity">
            <input
              type="text"
              value={quantity}
              class="form-control"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </td>
        <td class="total-col">${product.price * Number(quantity)}</td>
        <td class="remove-col">
          <button class="btn-remove">
            <i class="icon-close"></i>
          </button>
        </td>
      </tr>
    </>
  );
}

export default TableBody;
