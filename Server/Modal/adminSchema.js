import mongoose from 'mongoose';
const { Schema } = mongoose;

const StudentSchema = new Schema({
    studentId: {
        type: String,
        unique: true,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    profilePicture: {
        type: String,
        default: ""
    },
    course: {
        type: String,
    },
    attendance: [
        {
            date: {
                type: Date,
            },
            status: {
                type: String,
                enum: ['Present', 'Absent'],
                default: 'Absent'
            }
        }
    ]
}, { timestamps: true });

export default mongoose.model('Student', StudentSchema)
