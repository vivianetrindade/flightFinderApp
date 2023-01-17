import React, {useLayoutEffect} from 'react';
import { StyledCard, StyledTitle, StyledLine } from './styles/Card.style';
import { Flex2 } from './styles/Flex.style';
import { StyledButton } from './styles/Button.style';
import ModalComponent from './ModalComponent';


function Card({flight}: {flight: any}) {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [flightOptions, setFlightOptions] = React.useState<any>();
  
  useLayoutEffect(() => {
  const go = flight.itineraries[0]
  const back = flight.itineraries[1]
  const goSegments: any = []
  if (go.segments.length > 1) {
    for (let i = 0; i < go.segments.length; i++) {
      const element = {
        departureSegmentId: i +1,  
        departure: go.segments[i].departure.iataCode,
        departureDate: go.segments[i].departure.at,
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
      departureDate: go.segments[0].departure.at,
      arrival: go.segments[0].arrival.iataCode,
      arrivalDate: go.segments[0].arrival.at,
      duration: go.segments[0].duration,
    };
      goSegments.push(element)
    }
  const backSegments: any = []
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
      departureDate: back.segments[0].departure.at,
      arrival: back.segments[0].arrival.iataCode,
      arrivalDate: back.segments[0].arrival.at,
      duration: back.segments[0].duration,
    };
      backSegments.push(element)
    }
    setFlightOptions( 
      {
      id: flight.id,
      numberOfBookableSeats: flight.numberOfBookableSeats,
      price: flight.price.grandTotal + flight.price.currency,
      goFlights: goSegments,
      backFlights: backSegments,
    }
    )
  }, [])
  console.log('flight', flightOptions)

  const openModal = (id: string) => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  if (flightOptions === undefined) {
    return <div>Loading...</div>
  }
  return (
    <>
    <StyledCard onClick={()=>openModal(flight.id)}>
      <div key={flight.id}>
        <StyledTitle>Option {flightOptions.id}</StyledTitle>
        
        <h3>Go Flight</h3>
             {flightOptions && flightOptions.goFlights.map((segment:any) => {
                return (
                <div key={segment.departureSegmentId}>
                <Flex2>
                  <div>
                    <h3>Departure: <span>{segment.departure}</span></h3>
                    <p>Date Time of departure: {segment.departureDate}</p>
                  </div>
                  <div>
                    <h3>Arrival: <span>{segment.arrival}</span></h3>
                    <p>Time of arrival: {segment.arrivalDate}</p>
                  </div>
                </Flex2>
                <Flex2>
                  <p>Duration: {segment.duration}</p>
                </Flex2>
                </div>
                )
              })
            }
            <StyledLine />
            <h3>Back Flight</h3>
             {flightOptions && flightOptions.backFlights.map((segment:any) => {
                return (
                <div key={segment.departureSegmentId}>
                <Flex2>
                  <div>
                  <h3>Departure: <span>{segment.departure}</span></h3>
                  <p>Time of departure: {segment.departureDate}</p>
                  </div>
                  <div>
                  <h3>Arrival: <span>{segment.arrival}</span></h3>
                  <p>Time of arrival: {segment.arrivalDate}</p>
                  </div>
                </Flex2>
                
                <Flex2>
                  <p>Duration: {segment.duration}</p>
                </Flex2>
                </div>
                )
              })
            }
            <Flex2>
              <p><span>Total price:</span> {flightOptions.price}</p>
              <StyledButton margin='20rem'>More Details</StyledButton>
            </Flex2>
            
          </div>
    </StyledCard>
    <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal} afterOpenModal={afterOpenModal} flight={flight}/>
    
      </>
  )
}

export default Card;