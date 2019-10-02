import React from 'react';

import Select, { components } from 'react-select';

const customStyle = {
  control: () => ({
    display: 'flex',
    backgroundColor: '#f2f3f5',
    padding: 15,
    fontSize: 18,
    fontWeight: 700,
    borderRadius: 10,
  }),

  option: () => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 700,
    color: '#707070',
    padding: 20,
  }),

  singleValue: () => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 700,
    color: '#707070',
  }),

  dropdownIndicator: (base, state) => ({
    ...base,
    transition: 'all .2s ease',
    transform: state.isFocused ? 'rotate(180deg)' : null,
  }),

  indicatorSeparator: base => ({
    ...base,
    display: 'none',
  }),
};

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <img
        src={require('../images/arrow-down.svg')}
        width="16px"
        height="17px"
        alt="Escolha"
      />
    </components.DropdownIndicator>
  );
};

const SelectButton = props => {
  const { placeholder, options } = props;

  return (
    <Select
      styles={customStyle}
      components={{ DropdownIndicator }}
      isSearchable={false}
      placeholder={placeholder}
      options={options}
    />
  );
};

export default SelectButton;
