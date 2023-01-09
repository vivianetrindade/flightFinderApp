import React, { useState } from 'react';
import { StyledFormContainer } from '../components/styles/Form.style';
import { StyledProgressBar } from '../components/styles/ProgressBar.style';
import PassengerDetails from '../components/PassengerDetails';
import FlightDetails from '../components/FlightDetails';
import BookingOverview from '../components/BookingOverview';

function Booking() {
  const [progress, setProgress] = useState(0);

  const progressTitle = [
    {title: 'Passenger Details', component: <PassengerDetails/>}, 
    {title: 'Flight Details', component: <FlightDetails/>},
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
            onClick={()=>setProgress((currPage)=> currPage +1)}
          >
            {progress === progressTitle.length - 1 ? 'Confirm' : 'Next'}
          </button>
        </div>
      </StyledFormContainer>

    </div>
  )
}

export default Booking