import React from 'react';
import { Container } from './styles/Container.style';
import { StyledForm, StyledRadioInput, StyledSelectInput, StyledDatePicker, StyledButton } from './styles/Form.style';
import { Flex } from './styles/Flex.style';

function Form() {
  const [trip, setTrip] = React.useState('one-way');
  const [origin, setOrigin] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [departureDate, setDepartureDate] = React.useState<Date>(new Date());
  const [returnDate, setReturnDate] = React.useState<Date>(new Date());
  const [adults, setAdults] = React.useState('1');
  const [children, setChildren] = React.useState('0');
  const [classType, setClassType] = React.useState('ECONOMY');

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'trip':
        setTrip(value);
        break;
      case 'origin':
        setOrigin(value);
        break;
      case 'destination':
        setDestination(value);
        break;
      case 'adults':
        setAdults(value);
        break;
      case 'children':
        setChildren(value);
        break;
      case 'class':
        setClassType(value);
        break;
      default:
        break;
    }
  }
  const handleDateChanges = (date: Date, name: string) => {
    switch (name) {
      case 'Departure Date':
        setDepartureDate(date);
        console.log(date)
        break;
      case 'Return Date':
        setReturnDate(date);
        break;
      default:
        break;
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({trip, origin, destination, departureDate, returnDate, adults, children, classType})
  }

  const cityOptions = [{value: 'LAX', label: 'Los Angeles'}, {value: 'SFO', label: 'San Francisco'}, {value: 'NYC', label: 'New York'}]
  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="">Find your Flight</label>
        <Flex>
          <StyledRadioInput id='one-way' name='trip' value='one-way' label='One-Way' type='radio' onChange={handleChanges} />
          <StyledRadioInput id='round-trip' name='trip' value='round-trip' label='Round-trip' type='radio' onChange={handleChanges} />
        </Flex>
        <Flex>
          <StyledSelectInput name='origin' id='origin' label='Origin' options={cityOptions} onChange={handleChanges}/>
          <StyledSelectInput name='destination' id='destination' label='Destination'options={cityOptions} onChange={handleChanges}/>
        </Flex>
        <Flex>
          <StyledDatePicker title='Departure Date' onChange={handleDateChanges} date={departureDate}/>
          <StyledDatePicker title='Return Date' onChange={handleDateChanges} date={returnDate}/>
        </Flex>
        <Flex>
          <StyledSelectInput name='adults' id='adults' label='Adults' options={[{value: '1', label: '1'}, {value: '2', label: '2'}, {value: '3', label: '3'}]} onChange={handleChanges}/>
          <StyledSelectInput name='children' id='children' label='Children' options={[{value: '0', label: '0'}, {value: '1', label: '1'}, {value: '2', label: '2'}]} onChange={handleChanges}/>
        </Flex>
        <StyledSelectInput name='class' id='class' label='Class' options={[{value: 'ECONOMY', label: 'Economy'}, {value: 'PREMIUM_ECONOMY', label: 'Premium Economy'}, {value: 'BUSINESS', label: 'Bussiness'}, {value: 'FIRST', label: 'First'}]} onChange={handleChanges}/>
        <StyledButton type='submit'>Search</StyledButton>

      </StyledForm>
    </Container>
  )
}

export default Form;