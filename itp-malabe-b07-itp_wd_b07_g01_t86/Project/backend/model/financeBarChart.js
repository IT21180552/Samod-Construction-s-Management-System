import mongoose from '../db/conn.js'
import express from "express";

const financeBarChartSchema = new mongoose.Schema({
    cost : {type : Number , required : true},
    date : {type : Date , required : true , default : Date.now()},
    description : {type : String , required : true},
    expenses : {type : String , required : true},
    income : {type : String , required : true},
})
export default financeBarChartSchema