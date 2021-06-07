import React from 'react';

const TextArea = (props) => (
  <div>
    <div className='textarea__container'>
      <textarea className={`textarea 
      ${props.success ? 'textarea__success' : ''}  
      ${props.error ? 'textarea__error' : ''}`}
      id={props.id}
      placeholder={props.placeholder}
      name={props.name}
      disabled={props.disabled}
      ></textarea>
      <p className='textarea__placeholder'>{props.name}</p>
    </div>
    <div className='textinput__message'>
      {props.success ? <p className='textarea__message-success'>Login allowed</p> : null}
      {props.error ? <p className='textarea__message-error'>Login not allowed</p> : null}
    </div>
  </div>
);

export default TextArea;
