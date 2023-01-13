import React from 'react';
import { StyledForm2, StyledInput } from './styles/Form.style'; 
import { Flex } from './styles/Flex.style';
import { PassengerInfo } from '../pages/Booking';

interface PassengerDetailsProps {
  passengerInfo: PassengerInfo[];
  setPassengerInfo: React.Dispatch<React.SetStateAction<PassengerInfo[]>>;
  numberOfPassengers: number;
}

function PassengerDetails({passengerInfo, setPassengerInfo, numberOfPassengers}: PassengerDetailsProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const {name, value}  = e.target as typeof e.target & {name: keyof PassengerInfo, value: string};
    setPassengerInfo((prevState:PassengerInfo[]) => {
        return prevState.map((passenger:PassengerInfo) => {
            if(passenger.id === id){
                return {...passenger, [name]: value}
            }
            return passenger;
        });
    });
}


  const getPassengers = () => {
    const passengers:JSX.Element[] = [];
    for (let i = 0; i < numberOfPassengers; i++) {
      passengers.push(
        <>
      <h3 key={i}>Passenger {i+1}</h3>
        <Flex width='70rem'>
      <StyledInput id='firstName' name='firstName' type='text' value={passengerInfo[i].firstName} label='First Name' onChange={e=> handleChange(e, i)}/>
      <StyledInput id='lastName' name='lastName' type='text' value={passengerInfo[i].lastName} label='Last Name' onChange={e=> handleChange(e, i)}/>
      </Flex>
      <Flex width='100%'>
      <StyledInput id='email' name='email' type='text' value={passengerInfo[i].email} label='Email' onChange={e=> handleChange(e, i)}/>
      <StyledInput id='phone' name='phone' type='text' value={passengerInfo[i].phone} label='Phone' onChange={e=> handleChange(e, i)}/>
      </Flex>
      <Flex width='100%'>
      <StyledInput id='address' name='address' type='text' value={passengerInfo[i].address} label='Address' onChange={e=> handleChange(e, i)}/>
      <StyledInput id='city' name='city' type='text' value={passengerInfo[i].city} label='City' onChange={e=> handleChange(e, i)}/>
      </Flex>
      <Flex width='100%'>
      <StyledInput id='state' name='state' type='text' value={passengerInfo[i].state} label='State' onChange={e=> handleChange(e, i)}/>
      <StyledInput id='zip' name='zip' type='text' value={passengerInfo[i].zip} label='Zip Code' onChange={e=> handleChange(e, i)}/>
      <StyledInput id='country' name='country' type='text' value={passengerInfo[i].country} label='Country' onChange={e=> handleChange(e, i)}/>
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