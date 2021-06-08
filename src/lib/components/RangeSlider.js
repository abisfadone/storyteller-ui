import React from 'react';
import clsx from 'clsx';

const RangeSlider = (props) => (
  <div className={clsx('range-slider', props.disabled && 'range-slider-disabled')}>
    <input
      value={props.value}
      type="range"
      onChange={props.changeHandler}
    />
    <div
      className="range-slider__progress-bar"
      style={{
        width: `${props.value}%`,
        borderRadius: `${props.value > 50 ? '40px' : '40px 0 0 40px'}`
      }}
    />
    <div className="range-slider__value-wrap">
      <div
        className="range-slider__value"
        style={{
          left: `calc(${props.value}% - 32px)`
        }}
      >
        {props.value}%
      </div>
    </div>
  </div>
);

export default RangeSlider;
