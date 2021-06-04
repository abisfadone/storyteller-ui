import React from 'react';

const RadioButton = (props) => (
  <div className='radio__container'>
    <label htmlFor={`radio__${props.id}`}>
      <input
        disabled={props.disabled}
        checked={props.checked}
        type="radio"
        name={props.name}/>
    </label>
    <div className='radio__focus'></div>
  </div>
);

export default RadioButton;
