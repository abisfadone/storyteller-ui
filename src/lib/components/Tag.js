import React from 'react';
import clsx from 'clsx';
import labelPrimary from '../../assets/icon/label-primary.svg';
import labelSecondary from '../../assets/icon/label-secondary.svg';
import labelSuccess from '../../assets/icon/label-success.svg';

const Tag = (props) => (
  <div className={clsx('tag', `tag-${props.type}`)}>
    {props.type === 'success' && <img src={labelSuccess} alt={props.alt}/>}
    {props.type === 'primary' && <img src={labelPrimary} alt={props.alt}/>}
    {props.type === 'secondary' && <img src={labelSecondary} alt={props.alt}/>}
    {props.text}
  </div>
);

export default Tag;
