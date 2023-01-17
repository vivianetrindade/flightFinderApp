import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Flex2, Flex3 } from '../components/styles/Flex.style';
import { Container3, TitleContainer, InfoContainer, Container } from '../components/styles/Container.style';


function Confirmation() {
  const { data }: any = useLoaderData();
  
  return (
   
      <Container bgcolor='#ebfbff'>
        <TitleContainer>
          <h1>Confirmation</h1>
          <h2>Booking Details</h2>
          <h4>BookingID: {data._id}</h4>
        </TitleContainer>
        <Flex2>
          <InfoContainer>
            <h3>Go Flight</h3>
            <p>Departure: {data.flightBooking.goFlight.departure}</p>
            <p>Arrival: {data.flightBooking.goFlight.arrival}</p>
            <p>Departure Date: {data.flightBooking.goFlight.departureDate}</p>
            <p>Arrival Date: {data.flightBooking.goFlight.returnDate}</p>
          </InfoContainer>
          <InfoContainer>
            <h3>Return Flight</h3>
            <p>Departure: {data.flightBooking.backFlight.departure}</p>
            <p>Arrival: {data.flightBooking.backFlight.arrival}</p>
            <p>Departure Date: {data.flightBooking.backFlight.departureDate}</p>
            <p>Arrival Date: {data.flightBooking.backFlight.returnDate}</p>
          </InfoContainer>
        </Flex2>
        <Container3>
          <p>Travel Class: {data.flightBooking.travelClass}</p>
          <p>Total Price: {data.flightBooking.price}</p>
        </Container3>
        <TitleContainer>
          <h2>Passenger Details</h2>
        </TitleContainer>
        <Flex3>
        {data.passengers.map((passenger: any, i: any) => {
          return (
            <InfoContainer key={i}>
              <p>Name: {passenger.firstName} {passenger.lastName}</p>
              <p>Address:  {passenger.adress}, {passenger.city}, {passenger.country}</p>
              <p>Phone: {passenger.phone}</p>
              <p>Email: {passenger.email}</p>
            </InfoContainer>
          )
          })
        }
        </Flex3>
      </Container>
  )
}

export default Confirmation;