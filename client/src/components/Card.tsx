import React from 'react';
import { StyledCard, StyledTitle } from './styles/Card.style';
import { Flex2 } from './styles/Flex.style';

function Card({flight}: {flight: any}) {
  return (
    <StyledCard>
      <div key={flight.id}>
        <StyledTitle>Flight Details</StyledTitle>
        {console.log('flight', flight)}
             {flight.itineraries.map((intineraries:any)=>{
              return intineraries.segments.map((segment:any) => {
                return (
                <React.Fragment key={segment.id}>
                <Flex2>
                  <h3>Departure: <span>{segment.departure.iataCode}</span></h3>
                  <h3>Arrival: <span>{segment.arrival.iataCode}</span></h3>
                </Flex2>
                <Flex2>
                  <p>Time of departure: {segment.departure.at}</p>
                  <p>Time of arrival: {segment.arrival.at}</p>
                </Flex2>
                <Flex2>
                  <p>Duration: {segment.duration}</p>
                </Flex2>
                </React.Fragment>
                )
              })
            })}
            <Flex2>
              <p><span>Price per adult:</span> {flight.price.grandTotal}{flight.price.currency}</p>
            </Flex2>
            
          </div>
    </StyledCard>
  )
}

export default Card;