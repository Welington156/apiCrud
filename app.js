const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Rotas
app.use('/', indexRouter);
app.use('/about', aboutRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;
