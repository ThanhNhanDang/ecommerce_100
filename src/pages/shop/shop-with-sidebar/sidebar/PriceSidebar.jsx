import React from "react";

function PriceSidebar() {
  return (
    <div className="widget widget-collapsible">
      <h3 className="widget-title">
        <a
          data-toggle="collapse"
          href="#widget-5"
          role="button"
          aria-expanded="true"
          aria-controls="widget-5"
        >
          Price
        </a>
      </h3>
      {/* End .widget-title */}

      <div className="collapse show" id="widget-5">
        <div className="widget-body">
          <div className="filter-items">
            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-1"
                />
                <label className="custom-control-label" for="price-1">
                  $0 - $250
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .filter-item */}

            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-2"
                />
                <label className="custom-control-label" for="price-2">
                  $50 - $300
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .filter-item */}

            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-3"
                />
                <label className="custom-control-label" for="price-3">
                  $100 - $350
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .filter-item */}

            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-4"
                />
                <label className="custom-control-label" for="price-4">
                  $150 - $400
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .filter-item */}

            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-5"
                />
                <label className="custom-control-label" for="price-5">
                  $200 - $450
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .filter-item */}

            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-6"
                />
                <label className="custom-control-label" for="price-6">
                  $250 - $500
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .filter-item */}

            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-7"
                />
                <label className="custom-control-label" for="price-7">
                  $300 - $550
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-8"
                />
                <label className="custom-control-label" for="price-8">
                  $350 - $600
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-9"
                />
                <label className="custom-control-label" for="price-9">
                  $400 - $650
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-10"
                />
                <label className="custom-control-label" for="price-10">
                  $450 - $700
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-11"
                />
                <label className="custom-control-label" for="price-11">
                  $500 - $750
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-12"
                />
                <label className="custom-control-label" for="price-12">
                  $550 - $800
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-13"
                />
                <label className="custom-control-label" for="price-13">
                  $600 - $850
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-14"
                />
                <label className="custom-control-label" for="price-14">
                  $650 - $900
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-15"
                />
                <label className="custom-control-label" for="price-15">
                  $700 - $950
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-16"
                />
                <label className="custom-control-label" for="price-16">
                  $750 - $1000
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .filter-item */}
          </div>
          {/* End .filter-items */}
        </div>
        {/* End .widget-body */}
      </div>
      {/* End .collapse */}
    </div>
  );
}

export default PriceSidebar;
