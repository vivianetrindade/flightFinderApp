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

interface FlightBook {
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
};

export const postFlights = async (flightDetails: FlightBook) => {
  return await axios.post(`http://localhost:8000/flightBookings/create`, flightDetails);
}

export const postPassengers = async (passengers: any, flightBookingID: string) => {
  return await axios.post(`http://localhost:8000/passengersInfo/create`, {passengers: passengers, flightBooking: flightBookingID});
}

export const getFlightBooking = async (flightBookingID: string) => {
  return await axios.get(`http://localhost:8000/flightBookings/get/${flightBookingID}`);
}

export const getPassengersByBookingId = async (flightBooking: string) => {
  return await axios.get(`http://localhost:8000/passengersInfo/get/booking/${flightBooking}`);
}
