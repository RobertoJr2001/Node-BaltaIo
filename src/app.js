'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// DataBase
mongoose.connect('Connection String');

// Models
const Product = require('./model/product'); 

// Routes
const indexRoutes = require('./routes/index');
const products = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoutes);
app.use('/products', products);

module.exports = app;