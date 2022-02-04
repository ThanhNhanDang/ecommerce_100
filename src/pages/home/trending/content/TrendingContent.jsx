import React from "react";
import TrendingAccessories from "./TrendingAccessories";
import TrendingAll from "./TrendingAll";
import TrendingComputers from "./TrendingComputers";
import TrendingSmartwatches from "./TrendingSmartwatches";
import TrendingTabletsCellPhones from "./TrendingTabletsCellPhones";
import TrendingTV from "./TrendingTV";

function TrendingContent() {
  return (
    <div className="col-xl-4-5col">
      <div className="tab-content tab-content-carousel just-action-icons-sm">
        <TrendingAll />
        <TrendingTV />
        <TrendingComputers />
        <TrendingTabletsCellPhones />
        <TrendingSmartwatches />
        <TrendingAccessories />
      </div>
    </div>
  );
}

export default TrendingContent;
