const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const classRoutes = require('./routes/classRoutes');
const router = express.Router();

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/classes', classRoutes);


module.exports = app;
