import React from 'react';
import { Container, TitleContainer } from './styles/Container.style';
import { StyledForm, StyledInput, StyledSelectInput, StyledDatePicker, StyledButton } from './styles/Form.style';
import { Flex } from './styles/Flex.style';
import { getFligts } from '../utils/data-utils';
import Card from './Card';
// import data from '../data.json';

interface FormProps {
  flightDetails: {
    trip: string;
    originLocationCode: string;
    destinationLocationCode: string;
    departureDate: Date;
    returnDate?: Date;
    adults: string;
    children?: string;
    travelClass?: string;
  };
  setFlightDetails: React.Dispatch<React.SetStateAction<{
    trip: string;
    originLocationCode: string;
    destinationLocationCode: string;
    departureDate: Date;
    returnDate?: Date;
    adults: string;
    children?: string;
    travelClass?: string;
  }>>;
  }
function Form({flightDetails, setFlightDetails}: FormProps) {
  
  const [flightFound, setFlightFound] = React.useState<any>([])
  const [loading, setLoading] = React.useState<boolean>(false);
 
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFlightDetails({...flightDetails, [name]: value})
  }

  const handleDateChanges = (date: Date, name: string) => {
    setFlightDetails({...flightDetails, [name]: date})
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   setLoading(true);
    getFligts(flightDetails)
    .then((res: any) => {
      console.log(res.data)
      setFlightFound(res.data)
      setLoading(false);
    }
    )
  }

  const cityOptions = [{value: 'LAX', label: 'Los Angeles'}, {value: 'SFO', label: 'San Francisco'}, {value: 'NYC', label: 'New York'}]
  
  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="">Find your Flight</label>
        <Flex>
          <StyledInput id='one-way' name='trip' value='one-way' label='One-Way' type='radio' onChange={handleChanges} />
          <StyledInput id='round-trip' name='trip' value='round-trip' label='Round-trip' type='radio' onChange={handleChanges} />
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
      <TitleContainer>
        <h1>Flight Options</h1>
      </TitleContainer>
      {loading ? <h3>Loading...</h3> : flightFound.map((flight: any) => {
        return (
          <div key={flight.id}>
            <Card flight={flight} />
          </div>
        )
      })
      }
    </Container>
  )
}

export default Form;