import React, { useEffect, useState } from 'react';
import { StyledFormContainer } from '../components/styles/Form.style';
import { StyledProgressBar } from '../components/styles/ProgressBar.style';
import { Container } from '../components/styles/Container.style';
import { StyledButton } from '../components/styles/Form.style';
import PassengerDetails from '../components/PassengerDetails';
import FlightDetails from '../components/FlightDetails';
import BookingOverview from '../components/BookingOverview';
import { postFlights, postPassengers } from '../utils/data-utils';
import { useNavigate } from 'react-router-dom';

export interface PassengerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  id: number;
};

export interface FlightBook {
  goFlight:{
    departure: string;
    arrival: string;
    departureDate: string;
    returnDate: string;
  };
  backFlight?:{
    departure: string;
    arrival: string;
    departureDate: string;
    returnDate: string;
  };
  numberOfPassengers: number;
  travelClass: string;
  price: string;
}


function Booking() {
  const [progress, setProgress] = useState(0);
  const [passengerInfo, setPassengerInfo] = useState<PassengerInfo []>([
    {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      id: 0,
    }
  ]);
  const [flightBook, setFlightBook] = useState<FlightBook>({
    goFlight:{
      departure: '',
      arrival: '',
      departureDate: '',
      returnDate: '',
    },
    backFlight:{
      departure: '',
      arrival: '',
      departureDate: '',
      returnDate: '',
    },
    numberOfPassengers: 0,
    travelClass: '',
    price: '',
  });
  const navigate = useNavigate();

  
  useEffect(() => {
    const selectedFlight = JSON.parse(localStorage.getItem('selectedFlight') || '{}');
    console.log(selectedFlight, 'selectedFlight');
    
    for (let i = 0; i < selectedFlight.numberOfPassengers; i++) {
      setPassengerInfo([
        ...passengerInfo,
        {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          country: '',
          id: i,
        },
      ]);
    }
    setFlightBook({
      goFlight:{
        departure: selectedFlight.itineraries[0].segments[0].departure.iataCode,
        arrival: selectedFlight.itineraries[0].segments[0].arrival.iataCode,
        departureDate: selectedFlight.itineraries[0].segments[0].departure.at,
        returnDate: selectedFlight.itineraries[1].segments[0].arrival.at,
      },
      backFlight:{
        departure: selectedFlight.itineraries[1].segments[0].departure.iataCode,
        arrival: selectedFlight.itineraries[1].segments[0].arrival.iataCode,
        departureDate: selectedFlight.itineraries[1].segments[0].departure.at,
        returnDate: selectedFlight.itineraries[1].segments[0].arrival.at,
      },
      numberOfPassengers: selectedFlight.numberOfPassengers,
      travelClass: selectedFlight.travelerPricings[0].fareDetailsBySegment[0].cabin,
      price: selectedFlight.price.grandTotal + selectedFlight.price.currency,})
  }, [])
  
  const handleClick = () => {
    
      if (progress === progressTitle.length - 1) {
        postFlights(flightBook)
        .then((res) => {
          console.log(res.data, 'flights');
          return res.data
          .then((res: any) => {
            navigate('/confirmation', {state: {confirmationId: res._id}})
            postPassengers(passengerInfo, res._id)
            .then((res) => {
              console.log(res.data, 'passengers');
            }
            )
          }
          )
        }).catch((err) => {
          console.log(err);
        })
      } else {
        setProgress((currPage)=> currPage +1)}
  }

      
    

  const progressTitle = [
    {title: 'Passenger Details', component: <PassengerDetails passengerInfo={passengerInfo} setPassengerInfo={setPassengerInfo} numberOfPassengers={flightBook.numberOfPassengers}/>}, 
    {title: 'Flight Details', component: <FlightDetails flightBook={flightBook} />},
    {title: 'Booking Overview and Confirmation', component: <BookingOverview passengerInfo={passengerInfo} flightBook={flightBook} />}
  ]

  return (
    <div>
      <div>
        <StyledProgressBar width={progress === 0 ? '33.3%' : progress === 1 ? '66.6%' : '100%'}/>
      </div>
      <Container>
      <StyledFormContainer>
        <div>
          <h1>{progressTitle[progress].title}</h1>
          {progressTitle[progress].component}
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <StyledButton
            disabled={progress === 0}
            onClick={()=>setProgress((currPage)=> currPage -1)}
          >
            Back
          </StyledButton>
          <StyledButton
            onClick={()=>handleClick()}
          >
            {progress === progressTitle.length - 1 ? 'Confirm' : 'Next'}
          </StyledButton>
        </div>
      </StyledFormContainer>
      </Container>

    </div>
  )
}

export default Booking;