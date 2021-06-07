import React, { useState } from 'react';
import Button from './lib/components/Button/Button';
import Checkbox from './lib/components/Checkbox/Checkbox';
import RadioButton from './lib/components/RadioButton/RadioButton';
import IconButton from './lib/components/IconButton/IconButton';
import RightArrow from './lib/components/rightArrow/rightArrow';
import TextInput from './lib/components/TextInput/TextInput';
import TextArea from './lib/components/TextArea/TextArea';

import './lib/components/styles/_button.scss';
import './lib/components/styles/_checkbox.scss';
import './lib/components/styles/rightArrow.scss';
import './lib/components/styles/_iconbutton.scss';
import './lib/components/styles/_textinput.scss';
import './lib/components/styles/_textarea.scss';
import './lib/components/styles/_radiobutton.scss';

const App = () => {
  const [inputData, setInputData] = useState('');
  const onChangeHandler = (event) => {
    const { value } = event.target;

    console.log(value);
    setInputData(value);
  };

  return <div>
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
    >
      <RightArrow color='secondary'/>
    </IconButton>

    <TextInput
      size='large'
      placeholder='Phone number'
      type='search'
      id='Phone_number'
      name='Phone number'
      disabled={false}
      error={true}
      value={inputData}
      onChangeHandler={onChangeHandler}
    />

    <TextArea
      name='Enter comment'
      success={true}
    />

    <RadioButton name='radio'/>
    <RadioButton name='radio'/>
  </div>;
};

export default App;
