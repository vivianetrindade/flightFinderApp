import React from 'react';
import { Flex } from './styles/Flex.style';

interface RadioInputProps {
  className?: string;
  id: string;
  name: string;
  value: string;
  label: string;
  type: string;
}

function RadioInput({ className, id, name, value, label, type }: RadioInputProps) {
  return (
    <Flex direction='row' className={className}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} value={value} />
    </Flex>
  )
}

export default RadioInput