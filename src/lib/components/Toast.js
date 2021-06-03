import React from 'react';

const Toast = (props) => (
  <div className={`notification notification__${props.status}`}>
    {`(${props.name}) `}
    {props.text}
    <button
      onClick={() => props.deleteToast(props.id)}
      className="notification__delete"
    />
  </div>
);

export default Toast;
