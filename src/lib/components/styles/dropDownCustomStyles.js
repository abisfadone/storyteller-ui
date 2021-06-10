const customStyles = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? '2px solid #5F2EEA' : 0,
    boxShadow: 'none',
    backgroundColor: '#EFF0F6',
    borderRadius: '16px',
    width: '325px',
    height: '64px',
    boxSizing: 'border-box',
    zIndex: 2,
    opacity: state.isDisabled ? 0.5 : 1,
    '&:active': {
      border: '2px solid black'
    },
    '&:hover': {
      border: `2px solid ${state.selectProps.menuColor}`,
      boxShadow: 'rgba(228, 219, 253, 0.8) 0px 0px 0px 5px'
    }
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.selectProps.menuColor,
    border: 0,
    fontWeight: state.isSelected ? 600 : 400,
    fontSize: '14px',
    background: 'none',
    '&:hover': {
      fontWeight: 600,
      cursor: 'pointer'
    }
  }),
  indicatorsContainer: (provided, state) => ({
    '.myDropDown': {
      '&__dropdown-indicator': {
        color: state.selectProps.menuColor,
        marginRight: '15px'
      }
    }
  }),
  singleValue: (base, state) => ({
    ...base,
    color: state.selectProps.menuColor,
    border: state.isFocused ? '2px solid #5F2EEA' : 0,
    boxSizing: 'border-box',
    width: '325px',
    overflow: 'none'
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transition: 'all .2s ease',
    transform: state.isFocused ? 'rotate(-90deg)' : null
  }),
  menu: (base) => ({
    ...base,
    borderRadius: '0px 0px 22px 22px',
    border: 0,
    boxSizing: 'border-box',
    marginTop: '-15px',
    paddingTop: '10px',
    width: '323px',
    marginLeft: '1px'

  })
};

export default customStyles;
