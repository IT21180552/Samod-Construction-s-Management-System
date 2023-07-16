import mongoose from "../db/conn.js";
import financeBarChartModel from "../model/financeBarChart.js";

const financeBarChart = mongoose.model("financeBarChart", financeBarChartModel);

//function to create financeBarChart
export function createFinanceBarChart(req, res) {
    const financeBarChart = new financeBarChartModel({
        cost: req.body.cost,
        date: req.body.date,
        description: req.body.description,
        expenses: req.body.expenses,
        income: req.body.income
    });
    financeBarChart.save().then(result => {
        res.json(result);
    }).catch(err => {
        res.json(err);
    });
    }

    //function to get all financeBarChart
    export function getAllFinanceBarChart(req, res) {
        financeBarChart.find().then(result => {
            res.json(result);
        }).catch(err => {
            res.json(err);
        });
    }
