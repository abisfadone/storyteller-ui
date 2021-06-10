import React from 'react';

import { Title } from './lib';
// import { TableProps, TabsProps } from './TestData';
import Accordion from './lib/components/Accordion';

import './App.scss';
import './lib/components/styles/_accordion.scss';

const App = () => (
  <div>
    <Title>Miramixi Storyteller</Title>
    <Accordion
      title ='This is title'
      data = 'Here’s some example text that may answer an FAQ or give the user some helpful advice.'
    />

  </div>

);

export default App;
