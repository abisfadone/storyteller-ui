import React from 'react';
import clsx from 'clsx';
import Card from './Card';

const Tab = (props) => {
  const content = typeof props.content === 'string'
    ? <p>{props.content}</p>
    : props.content;

  return (
    <div className="tab__container">
      <div
        tabIndex={1}
        className={clsx(['tab', { 'tab-active': props.active }])}
        onClick={() => {
          props.clickHandler(props.index);
        }}
      >
        {props.title}
      </div>
      <div className="tab__content" hidden={!props.active}>
        <Card shadow="soft" radius="normal">
          {content}
        </Card>
      </div>
    </div>
  );
};

export default Tab;
