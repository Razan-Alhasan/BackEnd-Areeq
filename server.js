const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const connectDb = async() => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/areeq');
        console.log('connected to the database');
        return true;
    }catch(err){
        console.log(`failed to connect with the database with err: ${err.message}`);
        return false;
    }
}

connectDb();
const { Schema } = mongoose;
const orderSchema = new Schema(
    {
        user: String
    });
mongoose.model('order', orderSchema);
const app = express();
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT | '3000');