import React from "react";

function SliderItem(props) {
  return (
    <div className="intro-slide">
      <figure className="slide-image">
        <picture>
          <source media="(max-width: 480px)" srcset={props.sliderItem.source} />
          <img src={props.sliderItem.image} alt="Image Desc" />
        </picture>
      </figure>
      {/* End .slide-image */}

      <div className="intro-content">
        <h3 className="intro-subtitle text-primary">{props.sliderItem.subTitle}</h3>
        {/* End .h3 intro-subtitle */}
        <h1 className="intro-title">
          {props.sliderItem.title} <br /> {props.sliderItem.titleBr}
        </h1>
        {/* End .intro-title */}

        <div className="intro-price">
          {props.sliderItem.oldPrice ? (
            <sup className="intro-old-price">${props.sliderItem.oldPrice}</sup>
          ) : (
            <sup>Today:</sup>
          )}

          <span className="text-primary">
            ${props.sliderItem.price}
            <sup>.{props.sliderItem.priceSup}</sup>
          </span>
        </div>
        {/* End .intro-price */}

        {props.sliderItem.button}
      </div>
      {/* End .intro-content */}
    </div>
  );
}

export default SliderItem;
