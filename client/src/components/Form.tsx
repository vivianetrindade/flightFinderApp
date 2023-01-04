import React from 'react';
import { Container } from './styles/Container.style';
import { StyledForm, StyledRadioInput, StyledSelectInput, StyledDatePicker, StyledButton } from './styles/Form.style';
import { Flex } from './styles/Flex.style';
import { getFligts } from '../utils/data-utils';

function Form() {
  const [flightDetails, setFlightDetails] = React.useState<any>(
    {trip: 'one-way', 
    originLocationCode: '',
    destinationLocationCode: '',
    departureDate: new Date(),
    returnDate: new Date(),
    adults: '0',
    children: '0',
    travelClass: ''}
  )
 
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFlightDetails({...flightDetails, [name]: value})
  }

  const handleDateChanges = (date: Date, name: string) => {
    
    setFlightDetails({...flightDetails, [name]: date})
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    flightDetails.departureDate = flightDetails.departureDate.toISOString().split('T')[0];
    flightDetails.returnDate = flightDetails.returnDate.toISOString().split('T')[0];
    console.log(flightDetails)
    getFligts(flightDetails);
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
          <StyledSelectInput name='originLocationCode' id='origin' label='Origin' options={cityOptions} onChange={handleChanges}/>
          <StyledSelectInput name='destinationLocationCode' id='destination' label='Destination'options={cityOptions} onChange={handleChanges}/>
        </Flex>
        <Flex>
          <StyledDatePicker name='departureDate' title='Departure Date' onChange={handleDateChanges} date={flightDetails.departureDate}/>
          <StyledDatePicker name='returnDate' title='Return Date' onChange={handleDateChanges} date={flightDetails.returnDate}/>
        </Flex>
        <Flex>
          <StyledSelectInput name='adults' id='adults' label='Adults' options={[{value: '1', label: '1'}, {value: '2', label: '2'}, {value: '3', label: '3'}]} onChange={handleChanges}/>
          <StyledSelectInput name='children' id='children' label='Children' options={[{value: '0', label: '0'}, {value: '1', label: '1'}, {value: '2', label: '2'}]} onChange={handleChanges}/>
        </Flex>
        <StyledSelectInput name='travelClass' id='class' label='Class' options={[{value: 'ECONOMY', label: 'Economy'}, {value: 'PREMIUM_ECONOMY', label: 'Premium Economy'}, {value: 'BUSINESS', label: 'Bussiness'}, {value: 'FIRST', label: 'First'}]} onChange={handleChanges}/>
        <StyledButton type='submit'>Search</StyledButton>

      </StyledForm>
    </Container>
  )
}

export default Form;