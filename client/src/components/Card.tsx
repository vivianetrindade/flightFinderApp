import React, {useEffect} from 'react';
import { StyledCard, StyledTitle } from './styles/Card.style';
import { Flex2 } from './styles/Flex.style';
import { StyledButton } from './styles/Button.style';
import ModalComponent from './ModalComponent';


function Card({flight}: {flight: any}) {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [flightOptions, setFlightOptions] = React.useState<any>([]);
  
  useEffect(() => {
  const go = flight.itineraries[0]
  const back = flight.itineraries[1]
  const goSegments: [{}] = [{}]
  if (go.segments.length > 1) {
    for (let i = 0; i < go.segments.length; i++) {
      const element = {
        departureSegmentId: i +1,  
        departure: go.segments[i].departure.iataCode,
        dapartureDate: go.segments[i].departure.at,
        arrival: go.segments[i].arrival.iataCode,
        arrivalDate: go.segments[i].arrival.at,
        duration: go.segments[i].duration,
      };
      goSegments.push(element)
    } 
  } else {
    const element = {
      departureSegmentId: 1,
      departure: go.segments[0].departure.iataCode,
      dapartureDate: go.segments[0].departure.at,
      arrival: go.segments[0].arrival.iataCode,
      arrivalDate: go.segments[0].arrival.at,
      duration: go.segments[0].duration,
    };
      goSegments.push(element)
    }
  const backSegments: [{}] = [{}]
  if (back.segments.length > 1) {
    for (let i = 0; i < back.segments.length; i++) {
      const element = {
        departureSegmentId: i +1,
        departure: back.segments[i].departure.iataCode,
        dapartureDate: back.segments[i].departure.at,
        arrival: back.segments[i].arrival.iataCode,
        arrivalDate: back.segments[i].arrival.at,
        duration: back.segments[i].duration,};
      backSegments.push(element)
    }
  } else {
    const element = {
      departureSegmentId: 1,
      departure: back.segments[0].departure.iataCode,
      dapartureDate: back.segments[0].departure.at,
      arrival: back.segments[0].arrival.iataCode,
      arrivalDate: back.segments[0].arrival.at,
      duration: back.segments[0].duration,
    };
      backSegments.push(element)
    }
    setFlightOptions((prev:any)=> [...prev, 
      {
      id: flight.id,
      numberOfBookableSeats: flight.numberOfBookableSeats,
      price: flight.price.grandTotal + flight.price.currency,
      goFlights: goSegments,
      backFlights: backSegments,
    }
    ])
  }, [])


  const openModal = (id: string) => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    <>
    <StyledCard onClick={()=>openModal(flight.id)}>
      <div key={flight.id}>
        <StyledTitle>Option {flight.id}</StyledTitle>
        {/* {console.log('flight', flight.itineraries)} */}
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
              <p><span>Total price:</span> {flight.price.grandTotal}{flight.price.currency}</p>
              <StyledButton margin='20rem'>More Details</StyledButton>
            </Flex2>
            
          </div>
    </StyledCard>
    <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal} afterOpenModal={afterOpenModal} flight={flight}/>
    
      </>
  )
}

export default Card;