import React from 'react';

import { Title } from './lib';
// import { TableProps, TabsProps } from './TestData';
import DropDown from './lib/components/DropDown';
import './App.scss';

const options = [
  { value: 'English', label: 'English' },
  { value: 'Ukrainian', label: 'Ukrainian' },
  { value: 'Russian', label: 'Russian' }
];

const App = () => (
  <div>
    <Title>Miramixi Storyteller</Title>
    <DropDown
      options={options}
      value='Language'
      menuColor='#5F2EEA'
    />
  </div>

);

export default App;
