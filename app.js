const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');


connectDB();

const app = express();


app.use(express.json());


app.use('/api/recipes', recipeRoutes);


app.use(errorMiddleware);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(3000, () => console.log(`Server running on port 3000`))
})
mongoose.connection.on('error', err => {
    console.log(err)
})