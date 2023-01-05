import React from 'react';
import { StyledCard, StyledTitle } from './styles/Card.style';
import { Flex2 } from './styles/Flex.style';
import Modal from 'react-modal';

const customStyles = {
  content: {
    height:'fit-content',
    
  },
};

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
              <p><span>Total price:</span> {flight.price.grandTotal}{flight.price.currency}</p>
            </Flex2>
            
          </div>
    </StyledCard>
 
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
      appElement={document.getElementById('root') as HTMLElement}
      >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <p>{flight.numberOfBookableSeats}</p>
      </Modal>
      </>
  )
}

export default Card;