import React from 'react';

import { Tabs } from './lib';
import { TableProps } from './TestData';
import './App.scss';

const App = () => {
  console.log(TableProps);

  return (
    <Tabs
      data={[
        {
          title: 'hello',
          content: <div>1</div>
        },
        {
          title: 'hello 2',
          content: <div>2</div>
        },
        {
          title: 'hello 3',
          content: <div>3</div>
        }
      ]}
    />
  );
};

export default App;
