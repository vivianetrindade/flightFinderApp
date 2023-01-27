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