import  express  from "express";
import { register , login , addStudents  , getAllStudents} from "../controller/adminController.js";
// , , google


const adminRouter = express.Router()


// MIDDLEWARES


// register
// localhost:8000/auth/register0
adminRouter.post('/register' ,  register)

// login
// localhost:8000/auth/login
adminRouter.post('/login' , login)


adminRouter.post('/add-students' , addStudents)


adminRouter.get('/getstudents' , getAllStudents)




export default adminRouter