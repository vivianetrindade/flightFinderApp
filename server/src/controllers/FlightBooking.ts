import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import FlightBooking from "../models/FlightBooking";

const createFlightBooking = (req: Request, res: Response, next: NextFunction) => {
  const booking = req.body;
  const newBooking = new FlightBooking({
    _id: new mongoose.Types.ObjectId(),
    ...booking,
  });
  return newBooking
          .save()
          .then((booking)=> res.status(201).json(booking))
          .catch((error) => res.status(500).json({error}));
}
const getFlightBooking = (req: Request, res: Response, next: NextFunction) => {
  const bookingId = req.params.bookingId;

  return FlightBooking.findById(bookingId)
          .then((booking) => (booking ? res.status(200).json(booking) : res.status(404).json({message: "Booking not found"})))
          .catch((error) => res.status(500).json({error}));
}
const getAllFlightBooking = (req: Request, res: Response, next: NextFunction) => {
  return FlightBooking.find()
          .then((bookings) => res.status(200).json({bookings}))
          .catch((error) => res.status(500).json({error}));
}
const deleteFlightBooking = (req: Request, res: Response, next: NextFunction) => {
  const bookingId = req.params.bookingId;

  return FlightBooking.findByIdAndDelete(bookingId)
          .then((booking) => (booking ? res.status(200).json({message: "Booking deleted"}) : res.status(404).json({message: "Booking not found"})))
          .catch((error) => res.status(500).json({error}));
}

export default {createFlightBooking, getFlightBooking, getAllFlightBooking, deleteFlightBooking};