import React from "react";

function ToolboxLeft(props) {
  return (
    <div className="toolbox-left">
      <div className="toolbox-info">
        Showing{" "}
        <span>
          {props.toolboxLeft.limit} of {props.toolboxLeft.length}
        </span>{" "}
        Products
      </div>
    </div>
  );
}

export default ToolboxLeft;
