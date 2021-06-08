import React from 'react';
import clsx from 'clsx';

const Status = (props) => (
  <div className={clsx('status', `status-${props.type}`)}>{props.text}</div>
);

export default Status;
