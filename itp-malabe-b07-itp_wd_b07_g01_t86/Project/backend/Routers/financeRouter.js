import express from 'express';
import mongoose from '../db/conn.js';
import { createFinanceBarChart, getAllFinanceBarChart } from '../controllers/FinanceBarController.js';
import{getAllOutTransactions,updateOutTransaction,deleteOutTransaction} from '../controllers/outTransactionController.js'

const financeRouter = express.Router();

financeRouter.post("/",createFinanceBarChart);
financeRouter.get("/",getAllFinanceBarChart);

export default financeRouter;