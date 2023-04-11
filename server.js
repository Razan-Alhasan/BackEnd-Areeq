const mongoose = require('mongoose');
const express = require('express');
const productRoute = require('./routes/productRoutes');
const reviewRoute = require('./routes/reviewRoutes');
const userRoute = require('./routes/userRoutes');
const discountRoute = require('./routes/discountRoutes');
const offerRoute = require('./routes/offerRoutes');
const product = require('./models/productModel');
const review = require('./models/reviewModel');
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
const review1 = new review({
    user: '643475302be5416400d14f3c',
    description: 'I love this product!',
    rate: 3,
    product: '6419e9c9073ca6ea13ba9014'
});
const product1 = new product({
    name: "olive oil soap",
    description: "perfect olive oil soap",
    category: 'Soap',
    price: 30,
    images: ['mm'],
    user: '643475302be5419900d14f3c'
});
review1.save();
product1.save();
app.use('/', productRoute);
app.use('/', reviewRoute);
app.use('/', userRoute);
app.use('/', discountRoute);
app.use('/', offerRoute);
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT | '3000');
