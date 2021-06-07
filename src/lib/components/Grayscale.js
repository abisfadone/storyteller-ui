import React from 'react';

const Grayscale = (props) => (
  <div className="grayscale">
    <div className={`grayscale__banner grayscale__banner-${props.type}`}/>
    <div className="grayscale__content">
      <h3 className="grayscale__title">{props.title}</h3>
      <div className="grayscale__text">{props.text}</div>
    </div>
  </div>
);

export default Grayscale;
