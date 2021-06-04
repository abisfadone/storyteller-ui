import React from 'react';

const Text = (props) => (
  <div
    className={`text text-${props.type}`}
  >{props.children}</div>
);

export default Text;
