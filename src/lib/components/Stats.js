import React from 'react';
import likeLight from '../../assets/icon/like-light.svg';
import likeDark from '../../assets/icon/like-dark.svg';

const Stats = (props) => (
  <div className={`stats stats-${props.type}`}>
    {props.type === 'light' && <img src={likeLight} alt=""/>}
    {props.type === 'dark' && <img src={likeDark} alt=""/>}
    {props.amount}
  </div>
);

export default Stats;
