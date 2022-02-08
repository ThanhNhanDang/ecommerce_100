import React from "react";

function ProductGallery() {
  return (
    <div class="col-md-6">
      <div class="product-gallery product-gallery-vertical">
        <div class="row">
          <figure class="product-main-image">
            <img
              id="product-zoom"
              src="/assets/images/products/single/1.jpg"
              data-zoom-image="/assets/images/products/single/1-big.jpg"
              alt="product image"
            />

            <a href="#" id="btn-product-gallery" class="btn-product-gallery">
              <i class="icon-arrows"></i>
            </a>
          </figure>
          <div id="product-zoom-gallery" class="product-image-gallery">
            <a
              class="product-gallery-item active"
              href="#"
              data-image="/assets/images/products/single/1.jpg"
              data-zoom-image="/assets/images/products/single/1-big.jpg"
            >
              <img
                src="/assets/images/products/single/1-small.jpg"
                alt="product side"
              />
            </a>

            <a
              class="product-gallery-item"
              href="#"
              data-image="/assets/images/products/single/2.jpg"
              data-zoom-image="/assets/images/products/single/2-big.jpg"
            >
              <img
                src="/assets/images/products/single/2-small.jpg"
                alt="product cross"
              />
            </a>

            <a
              class="product-gallery-item"
              href="#"
              data-image="/assets/images/products/single/3.jpg"
              data-zoom-image="/assets/images/products/single/3-big.jpg"
            >
              <img
                src="/assets/images/products/single/3-small.jpg"
                alt="product with model"
              />
            </a>

            <a
              class="product-gallery-item"
              href="#"
              data-image="/assets/images/products/single/4.jpg"
              data-zoom-image="/assets/images/products/single/4-big.jpg"
            >
              <img
                src="/assets/images/products/single/4-small.jpg"
                alt="product back"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGallery;
