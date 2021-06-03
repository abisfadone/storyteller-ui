import React from 'react';
import Button from './lib/components/Button/Button';
// import Checkbox from './lib/components/Checkbox/Checkbox';

import './lib/components/styles/_button.scss';
import './lib/components/styles/_checkbox.scss';

const App = () => (
  <div>
    <p>Miramixi Storyteller</p>
    <h5>A button:</h5>
    <Button
      type='primary'
      size='large'
      value={'Button'}
      isLoading={false}
    />

  </div>
);

export default App;
