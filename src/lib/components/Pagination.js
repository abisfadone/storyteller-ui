import React from 'react';

const Pagination = (props) => (
  <div className="pagination">
    {props.itemsArray.map((elem, index) => (
      <button
        key={index}
        className={`pagination__item ${index === props.activeElem ? 'pagination__item-active' : ''}`}
        onClick={() => props.clickHandler(index)}
      />
    ))}
  </div>
);

export default Pagination;
