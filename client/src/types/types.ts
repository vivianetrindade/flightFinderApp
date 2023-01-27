export interface IflightSearch {
  trip: string;
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: Date;
  returnDate?: Date;
  adults: string;
  children?: string;
  travelClass?: string;
}

export interface IgoFlights{
  departureSegmentId: number;
  departure: string;
  departureDate: string;
  arrival: string;
  arrivalDate: string;
  duration: string;
}

export interface IbackFlights extends IgoFlights{
  
}

export interface IflightOptions {
  id: string;
  numberOfBookableSeats: number;
  price: string;
  goFlights: IgoFlights[];
  backFlights?: IbackFlights[];
  numberOfPassengers: number;
  travelClass: string;
}

export interface IPassengerInfo {
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