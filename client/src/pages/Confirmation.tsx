import React, {useEffect} from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Flex2, Flex3 } from '../components/styles/Flex.style';
import { getPassengersByBookingId } from '../utils/data-utils';

function Confirmation() {
  const { data }: any = useLoaderData();
  console.log(data);
  const { confirmationId } = useParams();
  const [passengers, setPassengers] = React.useState<any>([]);

  useEffect(() => {
    if(confirmationId){
      getPassengersByBookingId(confirmationId)
      .then((data) => {
        console.log('passengers', data.data)
        setPassengers(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
   
      <div>
        <h1>Confirmation</h1>
        <h2>Flight Details</h2>
        <Flex2>
          <div>
            <h3>Go Flight</h3>
            <p>Departure: {data.goFlight.departure}</p>
            <p>Arrival: {data.goFlight.arrival}</p>
            <p>Departure Date: {data.goFlight.departureDate}</p>
            <p>Arrival Date: {data.goFlight.returnDate}</p>
          </div>
          <div>
            <h3>Return Flight</h3>
            <p>Departure: {data.backFlight.departure}</p>
            <p>Arrival: {data.backFlight.arrival}</p>
            <p>Departure Date: {data.backFlight.departureDate}</p>
            <p>Arrival Date: {data.backFlight.returnDate}</p>
          </div>
        </Flex2>
          <p>Travel Class: {data.travelClass}</p>
          <p>Total Price: {data.price}</p>
        
        
        <h2>Passenger Details</h2>
        {passengers.map((passenger: any) => {
          return (
            <div key={passenger.id}>
              <Flex3>
              {passenger.passengers.map((passenger: any, i: any) => {
                return(
                <div key={i}>
                  <p>Name: {passenger.firstName} {passenger.lastName}</p>
                  <p>Address:  {passenger.adress}, {passenger.city}, {passenger.country}</p>
                  <p>Phone: {passenger.phone}</p>
                  <p>Email: {passenger.email}</p>
                </div>
                )
              }
              )}
              </Flex3>
            </div>
          )
        })
        }
      </div>
    
  )
}

export default Confirmation;