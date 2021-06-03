import React from 'react';

const CardBlur = (props) => (
  <div className={`card-blur card-blur-${props.blur}`}>
    {props.children}
  </div>
);

export default CardBlur;
