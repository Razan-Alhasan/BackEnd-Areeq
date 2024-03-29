const mongoose = require('mongoose');
const express = require('express');
const reviewRoute = require('./routes/reviewRoutes');
const productRoute = require('./routes/productRoutes');
const userRoute = require('./routes/userRoutes');
const discountRoute = require('./routes/discountRoutes');
const offerRoute = require('./routes/offerRoutes');
const cors = require('cors');
const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/areeq');
        console.log('connected to the database');
        return true;
    } catch (err) {
        console.log(`failed to connect with the database with err: ${err.message}`);
        return false;
    }
}

connectDb();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', reviewRoute);
app.use('/', productRoute);
app.use('/', userRoute);
app.use('/', discountRoute);
app.use('/', offerRoute);
app.listen(process.env.PORT | '3000');
