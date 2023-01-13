import mongoose, { Document, Schema, Types,} from "mongoose";

export interface IPassengerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  passport: string;
  flightBooking: string;
}

export interface IPassengerInfoModel extends Document, IPassengerInfo{
  passengers: IPassengerInfo[];
}
const PassengersInfoSchema: Schema = new Schema(
  {
    passengers: [Object]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model<IPassengerInfoModel>("PassengersInfo", PassengersInfoSchema);