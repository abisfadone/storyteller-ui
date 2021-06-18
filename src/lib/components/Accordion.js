import React, { useState } from 'react';
import clsx from 'clsx';
import plusIcon from '../../assets/icon/plusIcon.svg';
import minusIcon from '../../assets/icon/minusIcon.svg';

const Accordion = (props) => {
  const [expanded, setExpanded] = useState(false);
  const plus = <img src={plusIcon} alt='plus' />;
  const minus = <img src={minusIcon} alt='minus'/>;
  const icon = expanded ? minus : plus;

  return (
    <article className={
      clsx('accordion__container',
        { accordion__container__disabled: props.disabled },
        { accordion__container__expanded: expanded })}>
      <div className='accordion__container__title'>
        <h5 className='accordion__title'>
          {props.title}
        </h5>
        <button className='accordion__btn' onClick={() => setExpanded(!expanded)}>
          {icon}
        </button>
      </div>
      {expanded && <p className='accordion__data'>{props.data}</p>}
    </article>
  );
};
export default Accordion;
