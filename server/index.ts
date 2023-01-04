import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
const Amadeus = require('amadeus');

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
  console.log(flightDetails, 'in server', flightDetails.departureDate);
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