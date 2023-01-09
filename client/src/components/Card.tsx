import React from 'react';
import { StyledCard, StyledTitle } from './styles/Card.style';
import { Flex2 } from './styles/Flex.style';
import { StyledButton } from './styles/Button.style';
import ModalComponent from './ModalComponent';


function Card({flight}: {flight: any}) {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

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