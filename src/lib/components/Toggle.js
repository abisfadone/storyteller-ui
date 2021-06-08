import React from 'react';
import clsx from 'clsx';

const Toggle = (props) => (
  <label className={clsx('switch', props.disabled && 'switch-disabled')}>
    <input {...props}/>
    <span className="slider round"/>
  </label>
);

export default Toggle;
