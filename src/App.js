import React from 'react';

import { Title } from './lib';
// import { TableProps, TabsProps } from './TestData';
import DropDown from './lib/components/DropDown';
import IncrementStepper from './lib/components/IncrementStepper';
import './App.scss';
import './lib/components/styles/_increment-stepper.scss';

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
      defaultValue='Language'
      menuColor='blue' />

   <IncrementStepper
     increment='2'
   />
  </div>

);

export default App;
