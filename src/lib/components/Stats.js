import React from 'react';
import likeLight from '../../assets/icon/like-light.svg';
import likeDark from '../../assets/icon/like-dark.svg';

const Stats = (props) => (
  <div className={`stats stats-${props.type}`}>
    <img src={props.type === 'light' ? likeLight : likeDark} alt={props.alt} />
    {props.amount}
  </div>
);

export default Stats;
