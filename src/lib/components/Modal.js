import React from 'react';

const Modal = (props) => (
  <div className="modal__container">
    <div className="modal">
      <button onClick={props.closeHandler} className={props.native ? 'modal__cross-native' : 'modal__cross'}/>
      <div className="modal__content">
        <div className="modal__title">{props.title}</div>
        <div className="modal__text">{props.text}</div>
        <div className="modal__main-btn">
          <button onClick={props.button.clickHandler}>{props.button.text}</button>
        </div>
        <div className="modal__skip-btn">
          <button className="modal__skip" onClick={props.skip.clickHandler}>{props.skip.text}</button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
