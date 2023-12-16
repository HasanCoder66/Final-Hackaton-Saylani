import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../model/userSchema.js'
// import { createError } from "../error.js";




// register
// localhost:8000/auth/register





export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password : hash})

        await newUser.save()
        res.status(200).json('User signup successfully' )

    } catch (error) {
       next(error)
    }
}



// login
// localhost:8000/auth/register
export const login = async (req, res, next) => {
    try {
       const user = await User.findOne({email : req.body.email})
    //    if(!user) return next(createError(404, 'user not found sorry!'))
       if(!user) return  res.send('user not found')

       const isCorrect = await bcrypt.compare(req.body.password , user.password)
       if(!isCorrect) return next(createError(400, 'wrong Credientials!'))

       const {password, ...others} = user._doc  
       const token = jwt.sign({id : user._id  }, process.env.JWT_SECRET_KEY)

       res.cookie("access_token", token,{
        httpOnly : true,
       }).status(200).json(others)

    } catch (error) {
      console.log(error)
      //  next(error)
    }
}


// continue with google /
export const googleAuth = async (req, res, next) => {
   try {
     const user = await User.findOne({ email: req.body.email });
     if (user) {
       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
       res
         .cookie("access_token", token, {
           httpOnly: true,
         })
         .status(200)
         .json(user._doc);
     } else {
       const newUser = new User({
         ...req.body,
         fromGoogle: true,
       });
       const savedUser = await newUser.save();
       const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET_KEY);
       res
         .cookie("access_token", token, {
           httpOnly: true,
         })
         .status(200)
         .json(savedUser._doc);
     }
   } catch (error) {
    // console.log(error)
     next(error);
   }
 };

