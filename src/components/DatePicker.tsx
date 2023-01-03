import React, {useState} from 'react';
// import { CalendarContainer } from './styles/Form.style';
import { Flex } from './styles/Flex.style';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  className?: string;
  title: string;
  date: Date;
  onChange: (date: Date, name: string) => void;
}

function DatePickerComponent({ className, title, onChange, date }: DatePickerProps) {
  
  return (
    <Flex direction= 'row' className={className}>
      <h2>{title}</h2>
      <div>
        <DatePicker 
        selected={date}
        onChange={(date: Date)=> onChange(date, title)}
        dateFormat='yyyy/MM/dd'
        />
      </div>
    </Flex>

  )
}

export default DatePickerComponent;