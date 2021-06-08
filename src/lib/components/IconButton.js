import React from 'react';

const IconButton = (props) => (
  <div className={'icon__btn__container'}>
    <button
      className={`icon__btn icon__btn__${props.type}`}
      disabled={props.disabled}
    >
      {props.isLoading ? <span className={`${props.type} button-loading`}></span> : props.children}
    </button>
    <div className={'icon__btn__bcg__focus'}></div>
  </div>
);

export default IconButton;
