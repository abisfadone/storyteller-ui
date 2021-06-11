import React from 'react';
import clsx from 'clsx';

const ToolTip = (props) => (
  <div className='tooltip__container'>
    {props.data.map((item) => <p key={item} className= {clsx({ tooltip__disabled: props.disabled })}>{item}</p>)}
  </div>
);

export default ToolTip;
