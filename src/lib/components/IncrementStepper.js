import React from 'react';
import clsx from 'clsx';

const IncrementStepper = (props) => (
  <div className={clsx('stepper__container', { stepper__container__disabled: props.disabled })}>
      <button onClick={props.handlerMinus} className='stepper__btn'><span>-</span></button>
    <p className='stepper__increment'>{props.increment}</p>
      <button onClick={props.handlerPlus} className='stepper__btn stepper__btn__plus'><span>+</span></button>
  </div>
);
export default IncrementStepper;
