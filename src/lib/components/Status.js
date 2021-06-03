import React from 'react';

const Status = (props) => (
  <div className={`status  status-${props.type}`}>{props.text}</div>
);

export default Status;
