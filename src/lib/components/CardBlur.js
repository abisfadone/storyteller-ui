import React from 'react';
import clsx from 'clsx';

const CardBlur = (props) => (
  <div className={clsx('card-blur', `card-blur-${props.blur}`)}>
    {props.children}
  </div>
);

export default CardBlur;
