import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import PassengersInfo from "../models/PassengersInfo";

const { ObjectId } = mongoose.Types;

const createPassengersInfo = (req: Request, res: Response, next: NextFunction) => {
  const passengersInfo = req.body;
  const newPassengersInfo = new PassengersInfo({
    _id: new mongoose.Types.ObjectId(),
    ...passengersInfo,
  });
  return newPassengersInfo
          .save()
          .then((passengersInfo)=> res.status(201).json(passengersInfo))
          .catch((error) => res.status(500).json({error}));
}

const getPassengersInfo = (req: Request, res: Response, next: NextFunction) => {
  const passengersInfoId = req.params.passengersInfoId;

  return PassengersInfo.findById(passengersInfoId)
          .populate('flightBooking')
          .then((passengersInfo) => (passengersInfo ? res.status(200).json(passengersInfo) : res.status(404).json({message: "Passengers not found"})))
          .catch((error) => res.status(500).json({error}));
}

const getPassengersInfoByflightBooking = (req: Request, res: Response, next: NextFunction) => {
  
  const flightBooking = req.params.flightBooking;
 
  return PassengersInfo.find({flightBooking})
          .populate('flightBooking')
          .then((passengersInfo) => (passengersInfo ? res.status(200).json(passengersInfo) : res.status(404).json({message: "Passengers not found by flightBooking"})))
          .catch((error) => res.status(500).json({error}));
}

const getAllPassengersInfo = (req: Request, res: Response, next: NextFunction) => {
  return PassengersInfo.find()
          .then((passengersInfo) => res.status(200).json({passengersInfo}))
          .catch((error) => res.status(500).json({error}));
}

const deletePassengersInfo = (req: Request, res: Response, next: NextFunction) => {
  const passengersInfoId = req.params.passengersInfoId;

  return PassengersInfo.findByIdAndDelete(passengersInfoId)
          .then((passengersInfo) => (passengersInfo ? res.status(200).json({message: "Passengers deleted"}) : res.status(404).json({message: "Passengers not found"})))
          .catch((error) => res.status(500).json({error}));
}

export default {createPassengersInfo, getPassengersInfo, getAllPassengersInfo, deletePassengersInfo, getPassengersInfoByflightBooking};

