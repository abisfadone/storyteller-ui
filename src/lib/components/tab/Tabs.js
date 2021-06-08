import React, { useState } from 'react';
import Tab from './Tab';

const Tabs = (props) => {
  const [selectedElem, setSelectedElem] = useState(0);

  if (props.children.length === 0) {
    return <></>;
  }

  const clickHandler = async (index) => {
    setSelectedElem(index);
  };

  return (
    <div className="tabs">
      {props.children.map((elem, index) => (
        <Tab
          clickHandler={clickHandler}
          key={index}
          {...elem.props}
          index={index}
          active={selectedElem === index}/>
      ))}
    </div>
  );
};

export default Tabs;
