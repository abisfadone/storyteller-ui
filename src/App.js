import React from 'react';
import Button from './lib/components/Button/Button';
import Checkbox from './lib/components/Checkbox/Checkbox';
//import RadioButton from './lib/components/RadioButton/RadioButton';
import IconButton from './lib/components/IconButton/IconButton';
import RightArrow from './lib/components/rightArrow/rightArrow';

import './lib/components/styles/_button.scss';
import './lib/components/styles/_checkbox.scss';
import './lib/components/styles/rightArrow.scss';
import './lib/components/styles/_iconbutton.scss';

const App = () => (
  <div>
    <p>Miramixi Storyteller</p>
    <h5>A button:</h5>
    <Button
      type='secondary'
      size='small'
      value='Button'
      isLoading={false}
    />
    <Button
      type='subtle'
      size='large'
      value='Button'
      isLoading={true}
      disabled={false}
    />
    <Checkbox
      id='checkbox'
    />
      <IconButton
        type='primary'
        isLoading={false}
      >
        <RightArrow color='primary'/>
      </IconButton>

    <IconButton
      type='secondary'
      isLoading={true}
    >
      <RightArrow color='secondary'/>
    </IconButton>

  </div>
);

export default App;
