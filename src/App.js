import React from 'react';

import { Title } from './lib';
// import { TableProps, TabsProps } from './TestData';
import './App.scss';
import './lib/components/styles/_tool-tip.scss';
import ToolTip from './lib/components/ToolTip';

const options = ['English', 'Ukrainian', 'English'];

const App = () => (
  <div>
    <Title>Miramixi Storyteller</Title>
    <ToolTip data={options} arrow={true}/>
  </div>

);

export default App;
