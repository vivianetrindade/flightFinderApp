import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const Amadeus = require('amadeus');

interface IsoDate {
  toISOString(): TDateISO;
}

type TYear         = `${number}${number}${number}${number}`;
type TMonth        = `${number}${number}`;
type TDay          = `${number}${number}`;
type THours        = `${number}${number}`;
type TMinutes      = `${number}${number}`;
type TSeconds      = `${number}${number}`;
type TMilliseconds = `${number}${number}${number}`;
type TDateISODate = `${TYear}-${TMonth}-${TDay}`;
type TDateISOTime = `${THours}:${TMinutes}:${TSeconds}.${TMilliseconds}`;
type TDateISO = `${TDateISODate}T${TDateISOTime}Z`;

interface FlightReceived {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: string;
  returnDate?: string;
  adults: string;
  children?: string;
  travelClass?: string;
}


dotenv.config();

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const flightDetails = req.query;

  amadeus.shopping.flightOffersSearch.get({
    originLocationCode: flightDetails.originLocationCode,
    destinationLocationCode: flightDetails.destinationLocationCode,
    departureDate: flightDetails.departureDate,
    returnDate: flightDetails.returnDate,
    adults: flightDetails.adults,
    children: flightDetails.children,
    travelClass: flightDetails.travelClass,
  }).then(function (response: any) {
    res.send(response.data);
  }).catch(function (responseError: any) {
    console.log('Error', responseError.code);
  }
  );
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});