import React, { useEffect, useState } from 'react';
import { StyledFormContainer } from '../components/styles/Form.style';
import { StyledProgressBar } from '../components/styles/ProgressBar.style';
import PassengerDetails from '../components/PassengerDetails';
import FlightDetails from '../components/FlightDetails';
import BookingOverview from '../components/BookingOverview';

interface PassengerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
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
  const [passengerInfo, setPassengerInfo] = useState<PassengerInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });
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

  useEffect(() => {
    const selectedFlight = JSON.parse(localStorage.getItem('selectedFlight') || '{}');
    console.log(selectedFlight, 'selectedFlight');
    setFlightBook({
      goFlight:{
        departure: selectedFlight.itineraries[0].segments.map((segment:{departure: {iataCode: string}})=> segment.departure.iataCode),
        arrival: selectedFlight.itineraries[0].segments.map((segment: {arrival: {iataCode: string}}) => segment.arrival.iataCode),
        departureDate: selectedFlight.itineraries[0].segments.map((segment: {departure: {at: string}}) => segment.departure.at),
        returnDate: selectedFlight.itineraries[1].segments.map((segment: {arrival: {at: string}}) => segment.arrival.at),
      },
      backFlight:{
        departure: selectedFlight.itineraries[1].segments.map((segment: {departure: {iataCode: string}}) => segment.departure.iataCode),
        arrival: selectedFlight.itineraries[1].segments.map((segment: {arrival: {iataCode: string}}) => segment.arrival.iataCode),
        departureDate: selectedFlight.itineraries[1].segments.map((segment: {departure: {at: string}}) => segment.departure.at),
        returnDate: selectedFlight.itineraries[1].segments.map((segment: {arrival: {at: string}}) => segment.arrival.at),
      },
      numberOfPassengers: selectedFlight.numberOfPassengers,
      travelClass: selectedFlight.travelerPricings[0].fareDetailsBySegment[0].cabin,
      price: selectedFlight.price.grandTotal + selectedFlight.price.currency,})
  }, [])
  
  

  const progressTitle = [
    {title: 'Passenger Details', component: <PassengerDetails passengerInfo={passengerInfo} setPassengerInfo={setPassengerInfo} numberOfPassengers={flightBook.numberOfPassengers}/>}, 
    {title: 'Flight Details', component: <FlightDetails flightBook={flightBook} />},
    {title: 'Booking Overview and Confirmation', component: <BookingOverview/>}
  ]

  return (
    <div>
      <div>
        <StyledProgressBar width={progress === 0 ? '33.3%' : progress === 1 ? '66.6%' : '100%'}/>
      </div>
      <StyledFormContainer>
        <div>
          <h1>{progressTitle[progress].title}</h1>
          {progressTitle[progress].component}
        </div>
        <div>
          <button
            disabled={progress === 0}
            onClick={()=>setProgress((currPage)=> currPage -1)}
          >
            Back
          </button>
          <button
            onClick={()=>{
              
              setProgress((currPage)=> currPage +1)}}
          >
            {progress === progressTitle.length - 1 ? 'Confirm' : 'Next'}
          </button>
        </div>
      </StyledFormContainer>

    </div>
  )
}

export default Booking