import React from 'react';

const Title = (props) => (
  <div
    className={`typography typography-${props.type}`}
  >{props.children}</div>
);

export default Title;
