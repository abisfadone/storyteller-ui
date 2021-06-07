import React from 'react';
import clsx from 'clsx';
import likeLight from '../../assets/icon/like-light.svg';
import likeDark from '../../assets/icon/like-dark.svg';

const Stats = (props) => (
  <div className={clsx('stats', `stats-${props.type}`)}>
    <img src={props.type === 'light' ? likeLight : likeDark} alt={props.alt} />
    {props.amount}
  </div>
);

export default Stats;
