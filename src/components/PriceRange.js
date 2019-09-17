import React from 'react';

const PriceRange = () => {
  return (
    <div>
      <div>
        <div
          id="search-price-range"
          className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
        >
          <div
            className="ui-slider-range ui-corner-all ui-widget-header"
            style={{ left: '12.5%', width: '42.43%' }}
          ></div>
          <span
            tabIndex="0"
            className="ui-slider-handle ui-corner-all ui-state-default"
            style={{ left: '12.5%' }}
          >
            <span>$12500</span>
          </span>
          <span
            tabIndex="0"
            className="ui-slider-handle ui-corner-all ui-state-default"
            style={{ left: '54.93%' }}
          >
            <span>$54930</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
