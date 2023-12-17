import mongoose from 'mongoose';
const { Schema } = mongoose;

const AttendanceModel = new Schema({
    studentId: {
        type: String,
    },
    course: {
        type: String,
    },
    checkInTime: {
        type: String,
        required: true
    },
    checkOutTime: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
}, { timestamps: true });

export default mongoose.model('Attendance', AttendanceModel)