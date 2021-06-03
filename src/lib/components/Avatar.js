import React from 'react';

const Avatar = (props) => (
  <div className="avatar">
    {props.online && <div className="avatar__online-marker"/>}
    <div className={`avatar__wrap story-${props.avatar ? 'violet' : 'red'}`}>
      {props.avatar ? (
        <img className="avatar-img" src={props.avatar} alt={props.alt}/>
      ) : (
        <div className="avatar-empty">{props.name[0]}{props.lastName[0]}</div>
      )}
    </div>
  </div>
);

export default Avatar;
