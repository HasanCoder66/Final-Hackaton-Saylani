import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },

    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },

    password: {
        type: String,
        min: 6,
    },
    
    isAdmin: {
        type: Boolean,
        default: false
    },

    fromGoogle : {
        type : Boolean,
        default : false
    },
    
},
    { timestamps: true }
)
    // profilePicture: {
    //     type: String,
    //     default: ""
    // },

    // coverPicture: {
    //     type: String,
    //     default: ""
    // },

    // followers: {
    //     type: Array,
    //     default: []
    // },

    // followings: {
    //     type: Array,
    //     default: []
    // },


    // desc : {
    //     type : String,
    //     max : 50
    // },

    // city : {
    //     type : String,
    //     max : 50 
    // },

    // from : {
    //     type : String,
    //     max : 50 
    // },

    // relationship : {
    //     type : Number,
    //     enum : [1,2,3]
    // },


export default mongoose.model('user', userSchema)


