import React from 'react';
// import { CalendarContainer } from './styles/Form.style';
import { Flex } from './styles/Flex.style';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  className?: string;
  title: string;
  date?: Date;
  name: string;
  onChange: (date: Date, name: string) => void;
}

function DatePickerComponent({ className, title, onChange, date, name }: DatePickerProps) {
  
  return (
    <Flex direction= 'row' className={className}>
      <h2>{title}</h2>
      <div>
        <DatePicker
        name={name}
        selected={date}
        onChange={(date: Date)=> onChange(date, name)}
        dateFormat='yyyy/MM/dd'
        minDate={new Date()}
        />
      </div>
    </Flex>

  )
}

export default DatePickerComponent;