import React from 'react';
import { Flex } from './styles/Flex.style';

interface SelectInputProps {
  className?: string;
  name: string;
  id: string;
  label: string;
  options: {
    value: string,
    label: string,
  }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SelectInput({ className, name, id, label, options, onChange }: SelectInputProps) {
  return (
    <Flex direction='row' className={className}>
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id} onChange={onChange}>
        <option value=''>--Please choose an option--</option>
        {options.map(option => (
        <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </Flex>
  )
}

export default SelectInput