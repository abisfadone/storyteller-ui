import React from 'react';

const RightArrow = (props) => (
  <div className='right__arrow__container'>
  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className={`right__arrow__${props.color}`} d="M1 1L7.96317 7.96317L1 14.9263" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  </div>
);

export default RightArrow;
