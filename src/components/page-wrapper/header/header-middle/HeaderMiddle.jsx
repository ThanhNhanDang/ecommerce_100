import React from "react";
import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

function HeaderMiddle() {
  return (
    <div className="header-middle">
      <div className="container">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </div>
    </div>
  );
}

export default HeaderMiddle;
