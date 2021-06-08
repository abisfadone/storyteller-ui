import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SellSlider = ({ settings, children }) => (
  <div className="slider__sell">
    <Slider {...settings}>
      {children}
    </Slider>
  </div>
);

export default SellSlider;
