import React from 'react';

const Tab = (props) => (
  <div
    tabIndex={1}
    className={`tab  ${props.active ? 'tab-active' : ''}`}
    onClick={() => {
      props.clickHandler(props.index);
    }}>
    {props.text}
  </div>
);

export default Tab;
