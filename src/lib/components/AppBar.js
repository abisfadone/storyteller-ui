import React from 'react';

const AppBar = (props) => (
  <div className={`badge ${!props.value ? 'badge--none' : ''} `}>
    <h4>{props.value || 0}</h4>
  </div>
);

export default AppBar;
