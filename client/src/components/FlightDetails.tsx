import React from 'react';
import { FlightBook } from '../pages/Booking';
import { Container2 } from './styles/Container.style';
import { Flex } from './styles/Flex.style';
import { StyledCard2 } from './styles/Card.style';



function FlightDetails({flightBook}: {flightBook: FlightBook}) {
  return (
    <Container2>
      <Flex>
        <StyledCard2>
          <h3>{flightBook.goFlight.departure} --&gt; {flightBook.goFlight.arrival}</h3>
          <p>Departure Date: {flightBook.goFlight.departureDate} </p>
          <p>Return Date: {flightBook.goFlight.returnDate} </p>
        </StyledCard2>
        <StyledCard2>
          <h3>{flightBook.backFlight?.departure} --&gt; {flightBook.backFlight?.arrival}</h3>
          <p>Departure Date: {flightBook.backFlight?.departureDate} </p>
          <p>Return Date: {flightBook.backFlight?.returnDate} </p>
        </StyledCard2>
      </Flex>
      
        <h3>Number of Passengers: {flightBook.numberOfPassengers}</h3>
        <h3>Travel Class: {flightBook.travelClass}</h3>
        <h3>Price: {flightBook.price}</h3>
      
    </Container2>
  )
}

export default FlightDetails