const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const { connectDb } = require('./config/db');
connectDb();

// routers set up
const indexRouter = require('./routes/index');
const authRouter = require('./routes/authentication');
const productRouter = require('./routes/product');

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/product', productRouter);

module.exports = app;