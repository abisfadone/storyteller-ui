import clsx from 'clsx';
import React from 'react';

const TextInput = (props) => (

  <div className='textinput__container'>

    <input
      disabled={props.disabled}
      className={`textinput__${props.size} textinput__${props.type}`}
      id={props.id}
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={ (e) => props.onChangeHandler(e)}
    />
    <label className={clsx('label', { label__active: props.value })}
           htmlFor={props.id}>{props.name}</label>
  </div>
);

export default TextInput;
