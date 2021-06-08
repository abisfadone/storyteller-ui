import React from 'react';
import clsx from 'clsx';

const Tooltips = (props) => (
  <div className={clsx('tooltips', `tooltips-${props.type}`)}>
    {props.text}
  </div>
);

export default Tooltips;
