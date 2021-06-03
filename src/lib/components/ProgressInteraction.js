import React from 'react';

const ProgressInteraction = (props) => (
    <div className="progress-bar">
      <div className="progress-bar__interaction">
        <div className="progress-bar__indicator" style={{ width: `${props.value}%` }}/>
      </div>
      <div className="progress-bar__info">
        <span className="progress-bar__value">{props.value}%</span>
        Done
      </div>
    </div>
);

export default ProgressInteraction;
