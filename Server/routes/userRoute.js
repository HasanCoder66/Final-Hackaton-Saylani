import  express  from "express";
import { updateUser , deleteUser , getSingleUser , getAllUser } from "../controller/userController.js";
// , , google


const userRouter = express.Router()


// MIDDLEWARES


// update user
//http:localhost8500//api/user/updateUser
userRouter.put('/:id' ,  updateUser)


// delete user
//http:localhost8500//api/user/deleteUser
userRouter.delete('/:id' , deleteUser)


// get single user
//http:localhost8500//api/user/singleUser
userRouter.get('/getSingleUser/:id' , getSingleUser)


// delete user
//http:localhost8500//api/user/all-user
userRouter.get('/all-user' , getAllUser)

// authRouter.post('/google' , google)


export default userRouter