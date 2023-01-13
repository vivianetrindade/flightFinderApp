import express from 'express';
import controller from '../controllers/FlightBooking';

const router = express.Router();

router.post('/create', controller.createFlightBooking);
router.get('/get/:bookingId', controller.getFlightBooking);
router.get('/get', controller.getAllFlightBooking);
router.delete('/delete/:bookingId', controller.deleteFlightBooking);

export = router;