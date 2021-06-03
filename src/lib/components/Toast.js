import React from 'react';

const Toast = (props) => {
  const deleteHandler = () => {
    props.deleteToast(props.id);
  };

  return (
    <div className={`notification notification__${props.status}`}>
      {`(${props.name}) `}
      {props.text}
      <button
        onClick={deleteHandler}
        className="notification__delete"
      />
    </div>
  );
};

export default Toast;
