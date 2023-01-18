import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.9ecwthe.mongodb.net/flights`;
const AMADEUS_CLIENT_ID = process.env.AMADEUS_CLIENT_ID;
const AMADEUS_CLIENT_SECRET = process.env.AMADEUS_CLIENT_SECRET;
const port = process.env.PORT || 8000;

export const config = {
  mongo: {
    url: MONGO_URL,
  },
  amadeus: {
    clientId: AMADEUS_CLIENT_ID,
    clientSecret: AMADEUS_CLIENT_SECRET,
  },
  port,
};