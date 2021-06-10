import React from 'react';
import clsx from 'clsx';

const RadioButton = (props) => (
  <div className='radio__container'>
  <label className="label__container">
    <input
      className= {clsx('radio__input', { container__disabled: props.disabled })}
      type="radio"
      checked={props.checked}
      name={props.name}
      disabled={props.disabled}
      id={props.id}
    />
      <span className={clsx('checkmark', { checkmark__disabled: props.disabled })} />
  </label>
  </div>
);

export default RadioButton;
