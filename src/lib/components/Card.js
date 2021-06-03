import React from 'react';

const Card = (props) => (
  <div className={`card card-radius-${props.radius} card-shadow-${props.shadow}`}>
    {props.children}
  </div>
);

export default Card;
