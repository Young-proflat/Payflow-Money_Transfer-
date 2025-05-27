const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express()
PORT = process.env.PORT || 3000

mongoose.connect(process.env.DATABASE_URL)
.then ( () => {
    console.log('Database is running ')
    app.listen(PORT, () => {
        console.log('Server is running')
    })
})