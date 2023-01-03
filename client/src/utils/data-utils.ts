import axios from 'axios';

interface FlightDetails {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: Date;
  returnDate?: Date;
  adults: string;
  children?: string;
  travelClass?: string;
}


export const getFligts = async (flightDetails: FlightDetails) => {
  console.log(flightDetails, 'in data utils', flightDetails.departureDate!.toJSON());
  const response = await axios.get(`http://localhost:8000/`, {
    params: flightDetails,
    });
  console.log(response.data);
  return response.data;
}