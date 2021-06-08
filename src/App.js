import React, { useState } from 'react';

import {
  AppBar,
  Text,
  Title,
  Comment,
  Table,
  ProgressInteraction,
  ProgressInteractionRadius,
  Toast,
  Tooltips,
  Status,
  Tag,
  Stats,
  Tabs,
  Tab,
  Pagination,
  AvatarWithName,
  Avatar,
  Card,
  CardBlur,
  Color,
  Grayscale,
  Toggle,
  Slider,
  Button,
  Checkbox,
  IconButton,
  RightArrow,
  TextInput,
  TextArea,
  TextInputIcon,
  IncrementStepper,
  RadioButton
} from './lib';

import './App.scss';
import { TableProps } from './TestData';
import avatar from './assets/img/avatar.png';

const App = () => {
  const [value, setValue] = useState(0);
  const [inputData, setInputData] = useState('');

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const onChangeHandler = (event) => {
    const { value } = event.target;

    console.log(value);
    setInputData(value);
  };

  return (
    <div>
      <p>Miramixi Storyteller</p>

      <AppBar />

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
        success={true}
        value={inputData}
        onChangeHandler={onChangeHandler}
        successMessage='fdsfsdfsd'
      >
      </TextInput>
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
        errorMessage='fdsfsdfsd'
      >
        <TextInputIcon />
      </TextInput>

      <TextArea
        name='Enter comment'
      />

      <RadioButton name='radio'/>
      <RadioButton name='radio'/>
      <RadioButton
        name='radio'
        disabled={true}
      />
      <RadioButton
        name='radio'
        disabled={true}
      />

      <IncrementStepper
        increment='2'
      />

      <Slider
        type="range"
        value={value}
        changeHandler={changeHandler}
      />

      <Toggle
        type="checkbox"
      />

      <Comment text={'hello'}/>

      <ProgressInteraction value={29} valueSymbol={'%'} text={'Done'}/>
      <ProgressInteractionRadius value={29} valueSymbol={'%'} text={'Done'}/>

      <Toast text={'Error (Full screen width)'} type={'error'} name={'Illia'}/>
      <Toast text={'Error (Full screen width)'} type={'success'} name={'Illia'}/>
      <Toast text={'Error (Full screen width)'} type={'default'} name={'Illia'}/>

      <Tooltips type={'my'}
                text={'Here is some helpful explainer text to assist the user in understanding how a certain feature works.'}/>
      <Tooltips type={'other'}
                text={'Here is some helpful explainer text to assist the user in understanding how a certain feature works.'}/>

      <Status type={'success'} text={'All systems go.'}/>
      <Status type={'error'} text={'All systems go.'}/>
      <Status type={'warn'} text={'All systems go.'}/>

      <Tag text={'Tag One'} type={'success'}/>
      <Tag text={'Tag One'} type={'primary'}/>
      <Tag text={'Tag One'} type={'secondary'}/>

      <Stats type={'light'} amount={'223'}/>
      <Stats type={'dark'} amount={'223'}/>

      <Tabs>
        <Tab text={'hello'}/>
        <Tab text={'hello'}/>
        <Tab text={'hello'}/>
        <Tab text={'hello'}/>
      </Tabs>

      <Pagination itemsArray={[1, 2, 3, 4]} activeElem={2}/>

      <AvatarWithName avatar={avatar} name={'Illia'} lastName={'Pruskii'} namePositoin={'right'}/>
      <AvatarWithName avatar={avatar} name={'Illia'} lastName={'Pruskii'} namePositoin={'bottom'}/>
      <AvatarWithName name={'Illia'} lastName={'Pruskii'} namePositoin={'right'}/>
      <AvatarWithName name={'Illia'} lastName={'Pruskii'} namePositoin={'bottom'}/>

      <Avatar online avatar={avatar}/>
      <Avatar online name={'Illia'} lastName={'Pruskii'}/>

      <Card radius={'large'} shadow={'soft'}>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
      </Card>
      <Card radius={'normal'} shadow={'large'}>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
      </Card>
      <Card radius={'small'} shadow={'large'}>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
      </Card>

      <CardBlur blur={'light'}>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
      </CardBlur>
      <CardBlur blur={'dark'}>
        <h1>hello world</h1>
        <h1>hello world</h1>
        <h1>hello world</h1>
      </CardBlur>

      <Color
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'primary'}
      />
      <Color
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'secondary'}
      />
      <Color
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'error'}
      />
      <Color
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'success'}
      />
      <Color
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'warning'}
      />
      <Color
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'gradient-primary'}
      />
      <Color
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'gradient-secondary'}
      />
      <Color
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'gradient-accent'}
      />

      <Grayscale
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'title-active'}
      />
      <Grayscale
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'body'}
      />
      <Grayscale
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'label'}
      />
      <Grayscale
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'placeholder'}
      />
      <Grayscale
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'line'}
      />
      <Grayscale
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'input-background'}
      />
      <Grayscale
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'background'}
      />
      <Grayscale
        title={'Primary'}
        text={'Used as the primary color.'}
        type={'off-white'}
      />

      <Table {...TableProps} action/>

      <Title type={'large'}>hello world</Title>
      <Title type={'large-bold'}>hello world</Title>
      <Title type={'medium'}>hello world</Title>
      <Title type={'medium-bold'}>hello world</Title>
      <Title type={'small'}>hello world</Title>
      <Title type={'small-bold'}>hello world</Title>

      <Text type={'large'}>hello world</Text>
      <Text type={'large-link'}>hello world</Text>
      <Text type={'medium'}>hello world</Text>
      <Text type={'medium-link'}>hello world</Text>
      <Text type={'small'}>hello world</Text>
      <Text type={'small-link'}>hello world</Text>
      <Text type={'x-small'}>hello world</Text>
      <Text type={'x-small-link'}>hello world</Text>
    </div>
  );
};

export default App;
