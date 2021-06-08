import clsx from 'clsx';
import React from 'react';

const TextInput = (props) => (
  <div >

    <div className={`textinput__container textinput__container__${props.size}`}>

      <input
        disabled={props.disabled}
        className={
          clsx(
            'textinput', `textinput${props.type}`,
            `${(props.error && 'textinput-error') || (props.success && 'textinput-success')}`,
            `textinput__${props.size}`,
            { textinput__icon__text: props.children }
          )
             }
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={(e) => props.onChangeHandler(e)}
      />
      <label className={
        clsx('label',
          { label__active: props.value },
          { label__icon: props.children },
          { label__success: props.success },
          { label__error: props.error })}
        htmlFor={props.id}>{props.name}
      </label>
      {props.children && <div onClick={props.handleSearch} className='textinput__icon'>{props.children}</div>}
    </div>
    <div className='textinput__message'>
      {props.caption && <p className={'textinput__caption'}>{props.caption}</p>}
      {props.success && <p className={'textinput__message-success'}>{props.successMessage}</p>}
      {props.error && <p className={'textinput__message-error'}>{props.errorMessage}</p>}
    </div>

  </div>
);

export default TextInput;
