import React, {useState} from 'react';
// import { CalendarContainer } from './styles/Form.style';
import { Flex } from './styles/Flex.style';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  className?: string;
  title: string;
}

function DatePickerComponent({ className, title }: DatePickerProps) {
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <Flex direction= 'row' className={className}>
      <h2>{title}</h2>
      <div>
        <DatePicker 
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        />
      </div>
    </Flex>

  )
}

export default DatePickerComponent;