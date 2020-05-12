'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// conectar ao banco
mongoose.connect('Connection String');

// carregar rotas
const indexRoutes = require('./routes/index');
const products = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoutes);
app.use('/products', products);

module.exports = app;