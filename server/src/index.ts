import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from './config/config';
import flightBookingRoutes from './routes/FlightBooking';
import passengersInfoRoutes from './routes/PassengersInfo';


const Amadeus = require('amadeus');


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
  clientId: config.amadeus.clientId,
  clientSecret: config.amadeus.clientSecret,
});

const app: Express = express();

mongoose.connect(config.mongo.url, { retryWrites: true, w: 'majority' })
.then(()=> {
  console.log('Connected to MongoDB');
})
.catch((error: any) => {
  console.error('Error connecting to MongoDB', error);
});

app.use(express.json());
app.use(cors());

app.use((req: Request, res: Response, next: any) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
  });

  // routes
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
app.use('/flightBookings', flightBookingRoutes);
app.use('/passengersInfo', passengersInfoRoutes);


/*HealthCheck */
app.get('/health', (req: Request, res: Response, next) => res.status(200).json({message:'check'}));

/*ErrorHandling */
app.use((req: Request, res: Response, next) => {
  const error = new Error('Not found');
  console.error(error);
  return res.status(404).json({message: error.message});
});




app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});