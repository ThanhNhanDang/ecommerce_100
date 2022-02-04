import React from "react";
import HeaderBottomCenter from "./header-center/HeaderBottomCenter";
import HeaderBottomLeft from "./header-left/HeaderBottomLeft";
import HeaderBottomRight from "./header-right/HeaderBottomRight";

function HeaderBottom() {
  return (
    <div className="header-bottom sticky-header">
      <div class="container">
        <HeaderBottomLeft />
        <HeaderBottomCenter />
        <HeaderBottomRight />
      </div>
    </div>
  );
}

export default HeaderBottom;
