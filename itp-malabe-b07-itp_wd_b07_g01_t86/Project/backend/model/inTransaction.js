import mongoose from "../db/conn.js";
const inTransactionSchema = new mongoose.Schema({
    cost: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    description: {
        type: String,
        required: true
    },
    price : {
        type : Number,
        required : true
    },    
});
export default inTransactionSchema;
