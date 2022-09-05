const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Client } = require('pg');
const pool = require('./db');
const todoRouter = require('./routes/todo.routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/todos', todoRouter());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
