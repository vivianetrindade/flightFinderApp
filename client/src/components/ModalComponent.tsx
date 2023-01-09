import React from 'react';
import Modal from 'react-modal';
import { StyledButton } from './styles/Button.style';
import { Flex2 } from './styles/Flex.style';

interface ModalComponentProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  afterOpenModal: () => void;
  flight: any;
}

const customStyles = {
  content: {
    top: '40%',

    background: '#ebfbff',
    height:'fit-content',
    color: 'black',
  },
};

function ModalComponent({modalIsOpen, closeModal, afterOpenModal, flight}: ModalComponentProps) {
  return (
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
        
        <p>N of seats available: {flight.numberOfBookableSeats}</p>
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
  )
}

export default ModalComponent