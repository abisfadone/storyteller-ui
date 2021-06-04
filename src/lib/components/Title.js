import React from 'react';

const Title = (props) => (
  <div className={`title title-${props.type}`}>
    {props.children}
  </div>
);

export default Title;
