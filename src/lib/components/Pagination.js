import React from 'react';

const Pagination = ({ activeElem = 0, itemAmount, clickHandler }) => {
  const itemArray = new Array(itemAmount).fill('');

  return (
    <div className="pagination">
      {itemArray.map((elem, index) => (
        <button
          key={index}
          className={`pagination__item ${index === activeElem ? 'pagination__item-active' : ''}`}
          onClick={() => clickHandler(index)}
        />
      ))}
    </div>
  );
};

export default Pagination;
