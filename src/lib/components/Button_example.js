import React from 'react';

const Button_example = (props) => (
  <button className={`btn btn__${props.kind}`}
    data-id={props.id}
    type={props.type}
    name={props.name}
    value={props.value}
    disabled={props.disabled}
    onClick={props.handleClick}
  >
    <span>
      {props.label}
    </span>
  </button>
);

export default Button;
