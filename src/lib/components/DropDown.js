import React from 'react';
import { default as Select } from 'react-select';

import customStyles from './styles/dropDownCustomStyles';

const DropDown = (props) => (
  <div className="dropdown__container">
    <Select options={props.options}
            defaultValue={{ label: props.value, value: props.value }}
            styles={customStyles}
            classNamePrefix="myDropDown"
            onChange={props.changeHandler}
            isDisabled={props.disabled}
            menuColor={props.menuColor}
    />
  </div>
);

export default DropDown;
