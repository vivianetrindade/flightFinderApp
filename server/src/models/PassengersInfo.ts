import mongoose, { Document, Schema, Types,} from "mongoose";

export interface IPassengerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adress: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface IPassengerInfoModel extends Document {
  passengers: IPassengerInfo[];
  flightBooking: string;
}
const PassengersInfoSchema: Schema = new Schema(
  {
    passengers: [Object],
    flightBooking: { type: Types.ObjectId, ref: "FlightBooking" , required: true,}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model<IPassengerInfoModel>("PassengersInfo", PassengersInfoSchema);