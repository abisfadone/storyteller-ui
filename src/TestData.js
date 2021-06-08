import React from 'react';

export const TableProps = {
  keyArray: [
    { value: 'Id' },
    {
      value: 'Name',
      type: 'disabled'
    },
    {
      value: 'LastName',
      type: 'error'
    },
    {
      value: 'Age',
      type: 'selected'
    }
  ],
  tableDateArray: [
    [
      { value: '32' },
      {
        value: 'Illia',
        type: 'error'
      },
      { value: 'Pruskii' },
      { value: '18' }
    ],
    [
      { value: '32' },
      { value: 'Illia' },
      {
        value: 'Pruskii',
        type: 'error'
      },
      { value: '18' }
    ],
    [
      { value: '32' },
      { value: 'Illia' },
      { value: 'Pruskii' },
      {
        value: '18',
        type: 'selected'
      }
    ]
  ]
};

export const TabsProps = [
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
];
