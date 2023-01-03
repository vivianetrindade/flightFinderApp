import React from 'react';
import { Flex } from './styles/Flex.style';

interface SelectInputProps {
  className?: string;
  name: string;
  id: string;
  label: string;
}

function SelectInput({ className, name, id, label }: SelectInputProps) {
  return (
    <Flex direction='row' className={className}>
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id}>
        <option value=''>--Please choose an option--</option>
        <option value="LAX">Los Angeles</option>
        <option value="SFO">San Francisco</option>
        <option value="NYC">New York</option>
      </select>
    </Flex>
  )
}

export default SelectInput