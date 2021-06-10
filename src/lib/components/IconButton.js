import React from 'react';

const IconButton = (props) => {
  const icon = props.isLoading
    ? <span className={`${props.type} button-loading`}/>
    : props.children;

  return (
    <div className={'icon__btn__container'}>
      <button
        className={`icon__btn icon__btn__${props.type}`}
        disabled={props.disabled}
      >
        {icon}
      </button>
    </div>
  );
};

export default IconButton;
