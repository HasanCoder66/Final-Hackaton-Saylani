import express from 'express';
import { checkIn, getAttendance } from '../controller/attendanceController.js';

const attendanceRoutes = express.Router();

// REGISTER USER
// authRoutes.post('/register', signUp)

// LOGIN USER
attendanceRoutes.post('/checkIn', checkIn)
attendanceRoutes.get('/getAtt', getAttendance)

// LOGIN USER
// authRoutes.get('/forgotpassword', forgotPassword)

export default attendanceRoutes