import React from 'react';
import { StyledCard, StyledTitle } from './styles/Card.style';
import { Flex2 } from './styles/Flex.style';
import Modal from 'react-modal';
import { StyledButton } from './styles/Button.style';

const customStyles = {
  content: {
    top: '40%',

    background: '#ebfbff',
    height:'fit-content',
    color: 'black',
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
              <button>More Details</button>
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
        
        <button onClick={closeModal}>close</button>
        <Flex2>
        {/* <h2>Itinerarie</h2> */}
        {flight.itineraries.map((intineraries:any)=>{
          return intineraries.segments.map((segment:any)=> {
            return(
              <>
              <h4 >From: {segment.departure.iataCode} -- To: {segment.arrival.iataCode}</h4>
              </>
            )
          })
        }
        )}
        
        <p>Number of seats available: {flight.numberOfBookableSeats}</p>
        {flight.travelerPricings.map((travelerPricing:any)=>{
          return (
            <>
            <p>Price for {travelerPricing.travelerType}: {travelerPricing.price.total}{travelerPricing.price.currency}</p>
            </>
          )
        }
        )}
        </Flex2>
        <StyledButton>Book now</StyledButton>
      </Modal>
      </>
  )
}

export default Card;