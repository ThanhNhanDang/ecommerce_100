import React from "react";
import ToolboxLeft from "./ToolboxLeft";
import ToolboxRight from "./ToolboxRight";

function Toolbox(props) {
  return (
    <div className="toolbox">
      <ToolboxLeft toolboxLeft={props.toolboxLeft} />
      <ToolboxRight />
    </div>
  );
}

export default Toolbox;
