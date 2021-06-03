import React from 'react';

const Button = (props) => (
  <div className='btn__container'>
    <button
      className={`btn btn__${props.type} btn__${props.size}`}
      name={props.name}
      disabled={props.disabled}
      onClick={props.handleClick}
    >
      {props.isLoading ? <span className={`${props.type} loading`}></span> : <span>{props.value}</span>}
    </button>
    <div className={'btn__bcg__focus'}></div>
  </div>

);

export default Button;
