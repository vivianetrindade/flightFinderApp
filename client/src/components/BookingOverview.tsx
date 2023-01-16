import React from 'react';
import { Container2 } from './styles/Container.style';
import { Flex, Flex3 } from './styles/Flex.style';
import { StyledCard2 } from './styles/Card.style';


function BookingOverview({passengerInfo, flightBook}: {passengerInfo: any, flightBook: any}) {
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
      <StyledCard2>
        <h4>Travel Class: {flightBook.travelClass}</h4>
        <h4>Total Price: {flightBook.price}</h4>
      </StyledCard2>
      <div>
        <h4>Passengers</h4>
        <Flex3>
        {passengerInfo.map((passenger: any, index: number) => (
          <div key={index}>
            <h5>Passenger {index + 1}</h5>
            <p>Name: {passenger.firstName} {passenger.lastName}</p>
            <p>Address: {passenger.address}</p>
            <p>City: {passenger.city}, {passenger.state}, {passenger.country} </p>
            <p>Phone: {passenger.phone}</p>
            <p>Email: {passenger.email}</p>
          </div>
        ))}
        </Flex3>
      </div>
    </Container2>
  )
}

export default BookingOverview