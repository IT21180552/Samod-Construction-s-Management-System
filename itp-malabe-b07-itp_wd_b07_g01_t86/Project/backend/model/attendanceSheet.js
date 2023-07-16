import express from  'express'
import mongoose from '../db/conn.js'
const attendanceSchema = new mongoose.Schema({
    date  : {type : Date , required : true , default : Date.now()},
    empList : {type : [String] , required : true , default : []}
})

export default attendanceSchema