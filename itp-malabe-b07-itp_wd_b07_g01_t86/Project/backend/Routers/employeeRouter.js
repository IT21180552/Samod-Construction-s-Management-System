import express from 'express';
import mongoose from '../db/conn.js';
import {addNewEmployee, deleteEmployee, getAllEmployees, loginAsEmployee, updateEmployee} from '../controllers/employeeController.js';  

const employeeRouter = express.Router();
 

employeeRouter.post("/add",addNewEmployee);
employeeRouter.post("/login",loginAsEmployee)
employeeRouter.get("/",getAllEmployees)
employeeRouter.delete("/:id",deleteEmployee)
employeeRouter.put("/:id",updateEmployee)
export default employeeRouter;
