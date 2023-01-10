import React from 'react';
import { StyledForm2, StyledInput } from './styles/Form.style'; 
import { Flex } from './styles/Flex.style';

interface PassengerDetailsProps {
  passengerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  setPassengerInfo: React.Dispatch<React.SetStateAction<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }>>;
  numberOfPassengers: number;
}

function PassengerDetails({passengerInfo, setPassengerInfo, numberOfPassengers}: PassengerDetailsProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassengerInfo({...passengerInfo, [e.target.name]: e.target.value})
  }

  const getPassengers = () => {
    const passengers = [];
    for (let i = 0; i < numberOfPassengers; i++) {
      passengers.push(
        <>
      <h3>Passenger {i+1}</h3>
        <Flex width='100%'>
      <StyledInput id='firstName' name='firstName' type='text' value={passengerInfo.firstName} label='First Name' onChange={e=> handleChange(e)}/>
      <StyledInput id='lastName' name='lastName' type='text' value={passengerInfo.lastName} label='Last Name' onChange={e=> handleChange(e)}/>
      </Flex>
      <Flex>
      <StyledInput id='email' name='email' type='text' value={passengerInfo.email} label='Email' onChange={e=> handleChange(e)}/>
      <StyledInput id='phone' name='phone' type='text' value={passengerInfo.phone} label='Phone' onChange={e=> handleChange(e)}/>
      </Flex>
      <Flex>
      <StyledInput id='address' name='address' type='text' value={passengerInfo.address} label='Address' onChange={e=> handleChange(e)}/>
      <StyledInput id='city' name='city' type='text' value={passengerInfo.city} label='City' onChange={e=> handleChange(e)}/>
      </Flex>
      <Flex>
      <StyledInput id='state' name='state' type='text' value={passengerInfo.state} label='State' onChange={e=> handleChange(e)}/>
      <StyledInput id='zip' name='zip' type='text' value={passengerInfo.zip} label='Zip Code' onChange={e=> handleChange(e)}/>
      <StyledInput id='country' name='country' type='text' value={passengerInfo.country} label='Country' onChange={e=> handleChange(e)}/>
      </Flex>
      </>
      )
    }
    return passengers;
  }
  return (
    <StyledForm2>
      {getPassengers()}
    </StyledForm2>
  )
  
}

export default PassengerDetails