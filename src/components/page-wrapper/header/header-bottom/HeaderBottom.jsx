import React from "react";
import HeaderBottomCenter from "./header-center/HeaderBottomCenter";
import HeaderBottomLeft from "./header-left/HeaderBottomLeft";

function HeaderBottom() {
  return (
    <div className="header-bottom sticky-header">
      <div class="container">
        <HeaderBottomLeft />
        <HeaderBottomCenter />
      </div>
    </div>
  );
}

export default HeaderBottom;
