import React from 'react';

const Button = (props) => (
  <div className='btn__container'>
    <button
      className={`btn btn__${props.type} btn__${props.size}`}
      disabled={props.disabled}
    >
      {props.isLoading ? <span className={`${props.type} loading`}></span> : <span>{props.value}</span>}
    </button>
    <div className={'btn__bcg__focus'}></div>
  </div>

);

export default Button;
