import React from "react";

function BannerItems(props) {
  return (
    <div className={`banner ${props.banner.class}`}>
      <a href="/#">
        <img src={props.banner.image} alt="Banner" />
      </a>

      <div className="banner-content">
        <h4 className="banner-subtitle d-lg-none d-xl-block">
          <a href="/#">{props.banner.subTitle}</a>
        </h4>
        {/* End .banner-subtitle */}
        <h3 className="banner-title">
          <a href="/#">
            {props.banner.title} <br />
            {props.banner.titleBr}
            {props.banner.span && <span>{props.banner.span}</span>}
          </a>
        </h3>
        {/* End .banner-title */}
        {props.banner.button}
      </div>
      {/* End .banner-content */}
    </div>
  );
}

export default BannerItems;
