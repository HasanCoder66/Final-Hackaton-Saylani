import AttendanceModel from "../Modal/AttendanceModal.js";

export async function checkIn(req, res, next) {
    try {
        const options = {
            weekday: 'long',  // or 'short', 'narrow'
            year: 'numeric',
            month: 'long',    // or 'short', 'narrow'
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
};

const { studentId, course } = req.body;

const attendance = new AttendanceModel({
    studentId,
    course,
    date: Date.now(),
    checkInTime: new Date().toLocaleString('en-US', options),
});

const savedAttendance = await attendance.save();
res.status(201).json(savedAttendance);
} catch (error) {
res.status(400).json({ error: error.message });
}
}

export async function getAttendance(req, res, next) {
try {
const allAttendance = await AttendanceModel.find();
res.status(200).json(allAttendance);
} catch (error) {
res.status(500).json({ error: error.message });
    }
}