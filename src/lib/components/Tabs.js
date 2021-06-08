import React, { useState } from 'react';
import Tab from './Tab';

const Tabs = ({ data }) => {
  const [selectedElem, setSelectedElem] = useState(0);

  if (!data) {
    return <></>;
  }

  const clickHandler = async (index) => {
    setSelectedElem(index);
  };

  return (
    <div className="tabs">
      {data.map((tab, index) => (
        <Tab
          {...tab}
          key={tab.title}
          index={index}
          active={selectedElem === index}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
};

export default Tabs;
