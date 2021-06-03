import React from 'react';

const ProgressInteractionRadius = (props) => (
  <div className="progress-role-bar">
    <svg className="progress-role-bar__svg">
      <circle cx="60" cy="60" r="60"/>
      <circle cx="60" cy="60" r="60" strokeDashoffset={(-1) * (377 - (377 * props.value) / 100)}/>
    </svg>
    <div className="progress-role-bar__info">
      <span className="progress-role-bar__value">{props.value}{props.valueSymbol}</span>
      {props.text}
    </div>
  </div>
);

export default ProgressInteractionRadius;
