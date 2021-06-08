import React from 'react';

const Color = (props) => (
  <div className="color">
    <div className={`color__banner color__banner-${props.type}`}/>
    <div className="color__content">
      <h3 className="color__title">{props.title}</h3>
      <div className="color__text">{props.text}</div>
    </div>
  </div>
);

export default Color;
