import React from 'react';
import { StyledCard } from './styles/Card.style';

function Card({flight}: {flight: any}) {
  return (
    <StyledCard>
      <div key={flight.id}>
        {console.log('flight', flight)}
             {flight.itineraries.map((intineraries:any)=>{
              return intineraries.segments.map((segment:any) => {
                return (
                < div key={segment.id}>
                <p>Departure: {segment.departure.iataCode}</p>
                <p>Arrival: {segment.arrival.iataCode}</p>
                <p>Duration: {segment.duration}</p>
                <p>Time of departure: {segment.departure.at}</p>
                <p>Time of arrival: {segment.arrival.at}</p>
                </div>
                )
              })
            })}
            <p>Price per adult: {flight.price.total}{flight.price.currency}</p>
          </div>
    </StyledCard>
  )
}

export default Card;