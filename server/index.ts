import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});