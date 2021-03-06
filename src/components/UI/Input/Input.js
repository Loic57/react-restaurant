import React from 'react';

import './Input.scss';

const Input = (props) => {

  let className = '';
  let inputElement = null;

  if(props.valid) {
    className = " -valid"
  }

  switch(props.config.type) {
    case ('select'):
      inputElement = 
      <select onChange={props.changed} {...props.config} required>
        <option disabled="disabled" selected>{props.config.placeholder}</option>
        {
          props.config.options.map(option => {
            return (
              <option value={option.value} key={option.value} disabled={option.disabled}>{option.displayValue}</option>
            );
          })
        }
      </select>
    break;
    default: 
      inputElement = <input {...props.config} onChange={props.changed} value={props.value} required />
  }

  return (
    <div className={"input" + className} key={props.config.id}>
      <label htmlFor={props.config.id}>{props.config.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;