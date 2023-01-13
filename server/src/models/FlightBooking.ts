import mongoose, { Document, Schema} from "mongoose";

export interface IFlightBooking extends Document {
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
const FlightBookingSchema: Schema = new Schema(
  {
  goFlight: {
    departure: { type: String, required: true },
    arrival: { type: String, required: true },
    departureDate: { type: String, required: true },
    returnDate: { type: String, required: true },
  },
  backFlight: {
    departure: { type: String, required: false },
    arrival: { type: String, required: false },
    departureDate: { type: String, required: false },
    returnDate: { type: String, required: false },
  },
  numberOfPassengers: { type: Number, required: true },
  travelClass: { type: String, required: true },
  price: { type: String, required: true },
},
{
  versionKey: false,
}
);

export default mongoose.model<IFlightBooking>("FlightBooking", FlightBookingSchema);