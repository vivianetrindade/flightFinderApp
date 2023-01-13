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



  return (
    <StyledForm2>
      {passengerInfo.map((passenger:PassengerInfo, i:number) => {
      return (
        <>
      <h3 key={i}>Passenger {i+1}</h3>
        <Flex width='70rem'>
      <StyledInput id='firstName' name='firstName' type='text' value={passenger.firstName} label='First Name' onChange={e=> handleChange(e, i)}/>
      <StyledInput id='lastName' name='lastName' type='text' value={passenger.lastName} label='Last Name' onChange={e=> handleChange(e, i)}/>
      </Flex>
      <Flex width='100%'>
      <StyledInput id='email' name='email' type='text' value={passenger.email} label='Email' onChange={e=> handleChange(e, i)}/>
      <StyledInput id='phone' name='phone' type='text' value={passenger.phone} label='Phone' onChange={e=> handleChange(e, i)}/>
      </Flex>
      <Flex width='100%'>
      <StyledInput id='address' name='address' type='text' value={passenger.address} label='Address' onChange={e=> handleChange(e, i)}/>
      <StyledInput id='city' name='city' type='text' value={passenger.city} label='City' onChange={e=> handleChange(e, i)}/>
      </Flex>
      <Flex width='100%'>
      <StyledInput id='state' name='state' type='text' value={passenger.state} label='State' onChange={e=> handleChange(e, i)}/>
      <StyledInput id='zip' name='zip' type='text' value={passenger.zip} label='Zip Code' onChange={e=> handleChange(e, i)}/>
      <StyledInput id='country' name='country' type='text' value={passenger.country} label='Country' onChange={e=> handleChange(e, i)}/>
      </Flex>
      </>
      )
    }
    
    )}
    </StyledForm2>
  )
  
}

export default PassengerDetails;