import bcrypt from "bcrypt";
import User from "../model/userSchema.js";

// UpdateUser
// localhost:8000/api/:id
export const updateUser = async (req, res) => {
  try {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        res.status(500).json(error);
      }
    }
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE A USER
// http://localhost:8500/api/user/:userId
export async function deleteUser(req, res, next) {
  if (req.params.id === req.body.userId) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).send({
        status: "Success",
        message: "Users deleted",
      });
    } catch (error) {
        console.log(error);
      //  next(error)
    }
  } else {
    res.status(400).send({
      status: "Fail",
      message: "You can delete only your Account",
    });
  }
}

//GET A SINGLE USER
// http://localhost:8500/api/users/:userId
export async function getSingleUser(req, res, next) {
  try {
    const singleUser = await User.findById(req.params.id);
    const { password, isAdmin, ...other } = singleUser._doc;
    res.status(200).send({
      status: "success",
      message: "user found",
      data: other,
    });
  } catch (error) {
    console.log(error);
    // next(error);
  }
}

// GET ALL USER
// http://localhost:8500/api/user/
export async function getAllUser(req, res, next) {
  try {
    let allUser = await User.find();
    let users = [];
    allUser.map((user) => {
      const { _id, userName, email } = user;
      users.push({ _id, userName, email });
    });
    res.status(200).send({
      status: "success",
      message: "List of all Users",
      data: users,
    });
  } catch (error) {
    // console.log(error);
    next(error);
  }
}
