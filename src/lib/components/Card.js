import React from 'react';
import clsx from 'clsx';

const Card = (props) => (
  <div className={clsx('card', `card-radius-${props.radius}`, `card-shadow-${props.shadow}`)}>
    {props.children}
  </div>
);

export default Card;
