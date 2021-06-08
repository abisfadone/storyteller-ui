import React from 'react';
import clsx from 'clsx';

const Toast = (props) => (
  <div className={clsx('notification', `notification__${props.type}`)}>
    {`(${props.name}) `}
    {props.text}
    <button
      onClick={() => props.deleteToast(props.id)}
      className="notification__delete"
    />
  </div>
);

export default Toast;
