import React from 'react';
import clsx from 'clsx';

const IncrementStepper = (props) => (
  <div className={clsx('stepper__container', { stepper__container__disabled: props.disabled })}>
    <div className='stepper__btn__container'>
      <button onClick={props.handlerMinus} className='stepper__btn'><span>-</span></button>
      <div className='stepper__bcg__focus'></div>
    </div>
    <p className='stepper__increment'>{props.increment}</p>
    <div className='stepper__btn__container'>
      <button onClick={props.handlerPlus}
              className='stepper__btn stepper__btn__plus'><span>+</span></button>
      <div className='stepper__bcg__focus'></div>
    </div>
  </div>
);
export default IncrementStepper;
