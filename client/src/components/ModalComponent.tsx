import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { StyledButton } from './styles/Button.style';
import { Flex2, Flex } from './styles/Flex.style';
import { StyledCard2 } from './styles/Card.style';
import { useNavigate } from 'react-router-dom';

interface ModalComponentProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  flight: any;
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
  const [selectedFlight, setSelectedFlight] = React.useState<any>(
    {
    id: '', 
    backFlights: [],
    goFlights: [],
    numberOfBookableSeats: 0,
    price: '',
    numberOfPassengers: 0
  });
  const navigate = useNavigate();


  useEffect(() => {
    setSelectedFlight({
      ...selectedFlight, 
      id: flight.id, 
      backFlights: flight.backFlights,
      goFlights: flight.goFlights,
      numberOfBookableSeats: flight.numberOfBookableSeats,
      price: flight.price,
      numberOfPassengers: flight.numberOfPassengers});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleBooking = () => {
    localStorage.setItem('selectedFlight', JSON.stringify(selectedFlight));
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
        {flight.backFlights.map((segment:any)=>{
          return(
           
              <div key={segment.id}>
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