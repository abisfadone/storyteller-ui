import React from 'react';
import clsx from 'clsx';

const AvatarWithName = (props) => (
  <div className={clsx('avatar-with-name', `avatar-with-name-${props.namePositoin}`)}>
    {props.avatar ? (
      <img className="avatar-img" src={props.avatar} alt={props.alt}/>
    ) : (
      <div className="avatar-empty">{props.name[0]}{props.lastName[0]}</div>
    )}
    <div className="avatar-with-name__info">
      <span className="avatar-with-name__name">{props.name} {props.lastName}</span>
      {props.status && <span className="avatar-with-name__status">{props.status}</span>}
    </div>
  </div>
);

export default AvatarWithName;
