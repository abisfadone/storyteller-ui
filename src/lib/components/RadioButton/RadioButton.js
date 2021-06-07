import React from 'react';

const RadioButton = (props) => (
  <div className='radio__container'>
    <input
      className='radio__btn'
      disabled={props.disabled}
      checked={props.checked}
      type="radio"
      name={props.name}/>
    <label className='radio__label' htmlFor={`radio__${props.id}`}> </label>
  </div>
);

export default RadioButton;
