import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
function QuickView(props) {
  const { onClose, open, product } = props;
  const [openImg, setOpenImg] = React.useState(false);
  const [fullImg, setFullImg] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [imageProduct, setImageProduct] = React.useState(product.img);
  const handleClickOpen = (img) => {
    setOpenImg(true);
    setFullImg(img);
  };
  const handleCloseImg = () => {
    setOpenImg(false);
  };
  const handleActiveThumbs = (index, img) => {
    setActiveIndex(index);
    setImageProduct(img);
  };

  return (
    <>
      <Dialog open={openImg} fullWidth="false">
        <DialogTitle sx={{ m: 0, p: 2 }} onClose={handleCloseImg}>
          {handleCloseImg ? (
            <IconButton
              aria-label="close"
              onClick={handleCloseImg}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent>
          <img src={fullImg} alt="" />
        </DialogContent>
      </Dialog>
      <Dialog fullWidth="false" maxWidth="md" open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }} onClose={onClose}>
          {onClose ? (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent>
          <div className="container quickView-container">
            <div className="quickView-content">
              <div className="row">
                <div className="col-lg-7 col-md-6">
                  <div className="row">
                    <div className="product-left">
                      {product.thumbnails.map((item, index) => (
                        <a
                          key={index}
                          class={
                            activeIndex === index
                              ? "carousel-dot active"
                              : "carousel-dot"
                          }
                          onClick={() => handleActiveThumbs(index, item.img)}
                        >
                          <img src={item.img} />
                        </a>
                      ))}
                    </div>
                    <div className="product-right">
                      <div className="mb-0">
                        <div className="intro-slide" data-hash="one">
                          <img
                            src={imageProduct}
                            alt="Image Desc"
                            onClick={() => handleClickOpen(imageProduct)}
                          />
                        </div>

                        {/* End .intro-slide */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <h2 className="product-title">Linen-blend dress</h2>
                  <h3 className="product-price">$60.00</h3>

                  <div className="ratings-container">
                    <div className="ratings">
                      <div
                        className="ratings-val"
                        style={{ width: `20%` }}
                      ></div>
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                  {/* End .rating-container */}

                  <p className="product-txt">
                    Sed egestas, ante et vulputate volutpat, eros pede semper
                    est, vitae luctus metus libero eu augue.
                  </p>

                  <div className="details-filter-row product-nav product-nav-thumbs">
                    <label for="size">color:</label>

                    {product.thumbnails.map((item, index) => (
                      <a
                        key={index}
                        class={activeIndex === index ? "active" : null}
                        onClick={() => handleActiveThumbs(index, item.img)}
                      >
                        <img src={item.img} alt="product desc" />
                      </a>
                    ))}
                  </div>
                  {/* End .product-nav */}

                  <div className="details-filter-row details-row-size">
                    <label for="size">Size:</label>
                    <div className="select-custom">
                      <select name="size" id="size" className="form-control">
                        <option value="#" selected="selected">
                          Select a size
                        </option>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                        <option value="xl">Extra Large</option>
                      </select>
                    </div>
                    {/* End .select-custom */}
                  </div>

                  <div className="details-filter-row details-row-size">
                    <label for="qty">Qty:</label>
                    <div className="product-details-quantity">
                      <input
                        type="number"
                        id="qty"
                        className="form-control"
                        min="1"
                        max="10"
                        step="1"
                        data-decimals="0"
                        required
                      />
                    </div>
                    {/* End .product-details-quantity */}
                  </div>
                  {/* End .details-filter-row */}

                  <div className="product-details-action">
                    <div className="details-action-wrapper">
                      <a
                        href="#"
                        className="btn-product btn-wishlist"
                        title="Wishlist"
                      >
                        <span>Add to Wishlist</span>
                      </a>
                      <a
                        href="#"
                        className="btn-product btn-compare"
                        title="Compare"
                      >
                        <span>Add to Compare</span>
                      </a>
                    </div>
                    {/* End .details-action-wrapper */}
                    <a href="#" className="btn-product btn-cart">
                      <span>add to cart</span>
                    </a>
                  </div>

                  <div className="product-details-footer">
                    <div className="product-cat">
                      <span>Category:</span>
                      <a href="#">Women</a>,<a href="#">Dresses</a>,
                      <a href="#">Yellow</a>
                    </div>
                    {/* End .product-cat */}

                    <div className="social-icons social-icons-sm">
                      <span className="social-label">Share:</span>
                      <a
                        href="#"
                        className="social-icon"
                        title="Facebook"
                        target="_blank"
                      >
                        <i className="icon-facebook-f"></i>
                      </a>
                      <a
                        href="#"
                        className="social-icon"
                        title="Twitter"
                        target="_blank"
                      >
                        <i className="icon-twitter"></i>
                      </a>
                      <a
                        href="#"
                        className="social-icon"
                        title="Instagram"
                        target="_blank"
                      >
                        <i className="icon-instagram"></i>
                      </a>
                      <a
                        href="#"
                        className="social-icon"
                        title="Pinterest"
                        target="_blank"
                      >
                        <i className="icon-pinterest"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default QuickView;
