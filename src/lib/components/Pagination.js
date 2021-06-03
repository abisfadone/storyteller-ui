import React, { useState } from 'react';

const Pagination = (props) => {
  const [activeElem, setActiveElem] = useState(0);

  const clickHandler = (index) => {
    setActiveElem(index);
  };

  const itemsArray = new Array(props.itemAmount).fill('');

  return (
    <div className="pagination">
      {itemsArray.map((elem, index) => (
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
