import React from "react";
import { optionsTop } from "../../../../data";
import TopSellingAccessories from "./TopSellingAccessories";
import TopSellingAll from "./TopSellingAll";
import TopSellingComputers from "./TopSellingComputers";
import TopSellingSmartwatches from "./TopSellingSmartwatches";
import TopSellingTabletsCellPhones from "./TopSellingTabletsCellPhones";
import TopSellingTV from "./TopSellingTV";

function TopSellingContent() {
  return (
    <div class="tab-content tab-content-carousel just-action-icons-sm">
      <TopSellingAll optionsTop={optionsTop} />
      <TopSellingTV optionsTop={optionsTop} />
      <TopSellingComputers optionsTop={optionsTop} />
      <TopSellingTabletsCellPhones optionsTop={optionsTop} />
      <TopSellingSmartwatches optionsTop={optionsTop} />
      <TopSellingAccessories optionsTop={optionsTop} />
    </div>
  );
}

export default TopSellingContent;
