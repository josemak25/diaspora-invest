import React from 'react';
import { Slider } from 'antd';
import { formatToolTipPrice } from '../utils/formatPrice';

import 'antd/dist/antd.css';
import style from 'styled-components';

export default function PriceRange({ initialPriceState, handleRangeChange }) {
  const tipFormatter = value => {
    return `₦${formatToolTipPrice(value)}`;
  };

  return (
    <Container>
      <Slider
        range
        tooltipVisible
        step={10000}
        defaultValue={initialPriceState.defaultValues}
        tipFormatter={tipFormatter}
        onChange={handleRangeChange}
        min={initialPriceState.min}
        max={initialPriceState.max}
      />
    </Container>
  );
}

const Container = style.div`
position: relative
`;
