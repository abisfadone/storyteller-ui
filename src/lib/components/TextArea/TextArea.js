import React from 'react';
import clsx from 'clsx';

const TextArea = (props) => (
  <div>
    <div className='textarea__container'>
      <textarea className={`textarea 
      ${props.success && 'textarea__success'}  
      ${props.error && 'textarea__error'}`}
      id={props.id}
      placeholder={props.placeholder}
      name={props.name}
      disabled={props.disabled}
      value={props.value}
      onChange={props.handleChange}
      ></textarea>
      <p className={ clsx('textarea__placeholder',
        { textarea__placeholder__success: props.success },
        { textarea__placeholder__error: props.error }) }>{props.name}</p>
    </div>
    <div className='textarea__message'>
      {props.caption && <p className={'textarea__caption'}>{props.caption}</p>}
      {props.success ? <p className='textarea__message-success'>Login allowed</p> : null}
      {props.error ? <p className='textarea__message-error'>Login not allowed</p> : null}
    </div>
  </div>
);

export default TextArea;
