import React from 'react';

const Tooltips = (props) => (
  <div className={`tooltips ${props.type}`}>
    {props.text}
  </div>
);

export default Tooltips;
