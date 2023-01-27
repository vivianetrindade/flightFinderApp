import React from 'react';
import Modal from 'react-modal';
import { StyledButton } from './styles/Button.style';
import { Flex2, Flex } from './styles/Flex.style';
import { StyledCard2 } from './styles/Card.style';
import { useNavigate } from 'react-router-dom';
import { IflightOptions } from '../types/types';

interface ModalComponentProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  flight: IflightOptions;
}

const customStyles = {
  content: {
    top: '30%',

    background: '#ebfbff',
    height:'fit-content',
    color: 'black',
  },
};

function ModalComponent({modalIsOpen, closeModal, flight}: ModalComponentProps) {
  
  const navigate = useNavigate();


  const handleBooking = () => {
    console.log(flight, 'selectedFlight');
    localStorage.setItem('selectedFlight', JSON.stringify(flight));
    navigate('/bookingInfo');
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
      appElement={document.getElementById('root') as HTMLElement}
      >
        
        <StyledButton onClick={closeModal}>close</StyledButton>
        
        {/* <h2>Itinerarie</h2> */}
        <Flex2>
        <div>
        {flight.goFlights.map((segment:any)=>{
          return(
            
              <div key={segment.departureSegmentId}>
              <h4 >From: {segment.departure} {segment.departureDate} -- To: {segment.arrival} {segment.arrivalDate}</h4>
              </div>
            
            )
        })}
        </div>
        <div>
        {flight.backFlights && flight.backFlights.map((segment:any)=>{
          return(
           
              <div key={segment.departureSegmentId}>
              <h4 >From: {segment.departure} {segment.departureDate} -- To: {segment.arrival} {segment.arrivalDate}</h4>
              </div>
            )
          })}
        </div>
         </Flex2>
        <Flex>
          <StyledCard2>
            <p>N of seats available: {flight.numberOfBookableSeats}</p>
          </StyledCard2>
          <StyledCard2>
            <p>Number of passengers: {flight.numberOfPassengers}</p>
          </StyledCard2>
        </Flex>
        <StyledCard2>
            <h4>Total Price: {flight.price}</h4>
        </StyledCard2>
           
      <StyledCard2>
          <StyledButton onClick={handleBooking}>Book now</StyledButton>
      </StyledCard2>
      </Modal>
  )
}

export default ModalComponent