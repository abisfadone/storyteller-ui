import React from 'react';

const Button = (props) => {
  const text = props.isLoading
    ? <span className={`${props.type} loading`}/>
    : <span>{props.value}</span>;

  return (
    <div className={`btn__${props.size} btn__container`}>
      <button
        className={`btn btn__${props.type} btn__${props.size}`}
        name={props.name}
        disabled={props.disabled}
        onClick={props.handleClick}
      >
        {text}
      </button>
    </div>

  );
};

export default Button;
