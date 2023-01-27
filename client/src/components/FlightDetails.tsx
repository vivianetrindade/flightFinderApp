import React from 'react';
import { Container2 } from './styles/Container.style';
import { Flex } from './styles/Flex.style';
import { StyledCard2 } from './styles/Card.style';
import { IflightOptions } from '../types/types';



function FlightDetails({flightBook}: {flightBook: IflightOptions}) {
  return (
    <Container2>
      <Flex>
        {flightBook && flightBook.goFlights.map((segment: any) => {
          return (
            <StyledCard2 key={segment.departureSegmentId}>
              <h3>{segment.departure} --&gt; {segment.arrival}</h3>
              <p>Departure Date: {segment.departureDate} </p>
              <p>Return Date: {segment.arrivalDate} </p>
        </StyledCard2>
          )}
        )}
        {flightBook && flightBook.backFlights && flightBook.backFlights.map((segment: any) => {
          return (
          <StyledCard2 key={segment.departureSegmentId}>
            <h3>{segment.departure} --&gt; {segment.arrival}</h3>
            <p>Departure Date: {segment.departureDate} </p>
            <p>Return Date: {segment.arrivalDate} </p>
          </StyledCard2>
          )
        }
        )}
      </Flex>
      <StyledCard2>
        <h4>Number of Passengers: {flightBook.numberOfPassengers}</h4>
        <h4>Travel Class: {flightBook.travelClass}</h4>
        <h4>Total Price: {flightBook.price}</h4>
      </StyledCard2>
    </Container2>
  )
}

export default FlightDetails