import express from 'express';
import controller from '../controllers/PassengersInfo';

const router = express.Router();

router.post('/create', controller.createPassengersInfo);
router.get('/get/:passengersInfoId', controller.getPassengersInfo);
router.get('/get/booking/:flightBooking', controller.getPassengersInfoByflightBooking);
router.get('/get', controller.getAllPassengersInfo);
router.delete('/delete/:passengersInfoId', controller.deletePassengersInfo);

export = router;