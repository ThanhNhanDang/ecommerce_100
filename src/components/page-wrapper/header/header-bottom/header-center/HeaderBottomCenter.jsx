import React from "react";
import Megamenu from "./Megamenu";
import Shopmenu from "./Shopmenu";

const demoList = [
  {
    id: 1,
    backgroundImage: "/assets/images/menu/demos/3.jpg",
    title: "01 - electronic store",
  },
  {
    id: 2,
    backgroundImage: "/assets/images/menu/demos/4.jpg",
    title: "02 - electronic store",
  },
];

function HeaderBottomCenter() {
  return (
    <div class="header-center">
      <nav class="main-nav">
        <ul class="menu sf-arrows">
          <Megamenu demoList={demoList} />
          <Shopmenu />
        </ul>
      </nav>
    </div>
  );
}

export default HeaderBottomCenter;
