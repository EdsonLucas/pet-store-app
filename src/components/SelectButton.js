import React, { type ElementConfig } from 'react';

import Select, { components } from 'react-select';

const customStyle = {
  control: () => ({
    display: 'flex',
    backgroundColor: '#f2f3f5',
    padding: 15,
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 20,
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

const DropdownIndicator = (
  props: ElementConfig<typeof components.DropdownIndicator>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <img
        src={require('../images/arrow-down.svg')}
        width="16px"
        height="17px"
        alt="Escolha o animal"
      />
    </components.DropdownIndicator>
  );
};

const SelectButton = props => {
  return (
    <Select
      styles={customStyle}
      components={{ DropdownIndicator }}
      isSearchable={false}
      placeholder={props.placeholder}
      options={props.options}
    />
  );
};

export default SelectButton;
