import React, { useState } from 'react';
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

interface FlightBook {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: string;
  returnDate: string;
  adults: string;
  children: string;
  travelClass: string;
  price: string;
}


function Booking({flightDetails}: {flightDetails: any}) {
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
    originLocationCode: '',
    destinationLocationCode: '',
    departureDate: '',
    returnDate: '',
    adults: '',
    children: '',
    travelClass: '',
    price: '',
  });
  const numberOfPassengers = parseInt(flightDetails.adults) + parseInt(flightDetails.children);
  

  const progressTitle = [
    {title: 'Passenger Details', component: <PassengerDetails passengerInfo={passengerInfo} setPassengerInfo={setPassengerInfo} numberOfPassengers={numberOfPassengers}/>}, 
    {title: 'Flight Details', component: <FlightDetails flightBook={flightBook} setFlightBook={setFlightBook}/>},
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