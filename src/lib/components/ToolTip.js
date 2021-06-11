import React from 'react';
import clsx from 'clsx';

const ToolTip = (props) => {
  let data;

  if (Array.isArray(props.data)) {
    data = props.data.map((item) => <p key={item}>{item}</p>);
  } else {
    data = <p>props.data</p>;
  }

  return (
    <div className={clsx('tooltip__container', { tooltip__arrow: props.arrow })}>
      {data}
    </div>
  );
};
export default ToolTip;
