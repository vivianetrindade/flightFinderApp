import axios from 'axios';

interface FlightReceived {
  trip: string;
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: Date ;
  returnDate?: Date ;
  adults: string;
  children?: string;
  travelClass?: string;
}


export const getFligts = async (flightReceived: FlightReceived) => {
  
  return await axios.get(`http://localhost:8000/`,
   {
    params: {
      originLocationCode: flightReceived.originLocationCode,
      destinationLocationCode: flightReceived.destinationLocationCode,
      departureDate: flightReceived.departureDate.toISOString().split('T')[0],
      returnDate: flightReceived.returnDate?.toISOString().split('T')[0],
      adults: flightReceived.adults,
      children: flightReceived.children,
      travelClass: flightReceived.travelClass
    },
    }
    );
  
   
}