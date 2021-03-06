import React from "react";

const colours = [
  {
    color: "#b87145",
  },
  {
    color: "#f0c04a",
  },
  {
    color: "#333333",
  },
  {
    color: "#cc3333",
  },
  {
    color: "#3399cc",
  },
  {
    color: "#669933",
  },
  {
    color: "#f2719c",
  },
  {
    color: "#ebebeb",
  },
];

function ColourSidebar() {
  const [selected, setSelected] = React.useState(null);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div className="widget widget-collapsible">
      <h3 className="widget-title">
        <a
          data-toggle="collapse"
          href="#widget-3"
          role="button"
          aria-expanded="true"
          aria-controls="widget-3"
        >
          Colour
        </a>
      </h3>
      {/* End .widget-title */}

      <div className="collapse show" id="widget-3">
        <div className="widget-body">
          <div className="filter-colors">
            {colours.map((item, index) => (
              <a
                key={index}
                className={selected === index ? "selected" : ""}
                onClick={() => handleClick(index)}
                style={{ background: item.color }}
              >
                <span className="sr-only">Color Name</span>
              </a>
            ))}
          </div>
          {/* End .filter-colors */}
        </div>
        {/* End .widget-body */}
      </div>
      {/* End .collapse */}
    </div>
  );
}

export default ColourSidebar;
