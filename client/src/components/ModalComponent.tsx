import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { StyledButton } from './styles/Button.style';
import { Flex2 } from './styles/Flex.style';
import { useNavigate } from 'react-router-dom';

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
  const [selectedFlight, setSelectedFlight] = React.useState<any>(
    {
    id: '', 
    itineraries: [
      {
        duration: '', 
        segments: [
          {
            id: '', 
            departure: 
            {
              iataCode: '', 
              at: ''
            },
            arrival: 
            {
              iataCode:'', 
              at: ''
            }
          }
        ] 
      }
    ],
     numberOfBookableSeats: 0, 
     price: 
     {
      grandTotal: '',
      currency: ''
    }, 
    travelerPricings: 
    [
      {
        travelerType: '',
        price: 
        {
          total: '',
          currency: ''
        }
      }
    ],
    numberOfPassengers: 0
  });
  const navigate = useNavigate();


  useEffect(() => {
    setSelectedFlight({...selectedFlight, id: flight.id, itineraries: flight.itineraries, numberOfBookableSeats: flight.numberOfBookableSeats, price: flight.price, travelerPricings: flight.travelerPricings, numberOfPassengers: flight.travelerPricings.length});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleBooking = () => {
    localStorage.setItem('selectedFlight', JSON.stringify(selectedFlight));
    navigate('/bookingInfo');
  }
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
        {/* <Link to='/bookingInfo'> */}
        <StyledButton onClick={handleBooking}>Book now</StyledButton>
        {/* </Link> */}
      </Modal>
  )
}

export default ModalComponent