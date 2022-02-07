import { useState } from "react";
import { Link } from "react-router-dom";
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
        <td className="product-col">
          <div className="product">
            <figure className="product-media">
              <a onClick={() => handleClickOpen(product)}>
                <img src={product.img} alt="Product image" />
              </a>
            </figure>

            <h3 className="product-title">
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </h3>
            {/* End .product-title */}
          </div>
          {/* End .product */}
        </td>
        <td className="price-col">${product.price}</td>
        <td className="quantity-col">
          <div className="cart-product-quantity">
            <input
              type="text"
              value={quantity}
              className="form-control"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </td>
        <td className="total-col">
          ${(product.price * Number(quantity)).toFixed(2)}
        </td>
        <td className="remove-col">
          <button className="btn-remove">
            <i className="icon-close"></i>
          </button>
        </td>
      </tr>
    </>
  );
}

export default TableBody;
