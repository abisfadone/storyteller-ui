import React from 'react';
import clsx from 'clsx';

const Toggle = (props) => (
  <div className="toggle">
    <label className={clsx('switch', props.disabled && 'switch-disabled')}>
      <input {...props}/>
      <span className="slider round"/>
    </label>
  </div>
);

export default Toggle;
