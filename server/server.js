const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Client } = require('pg');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const res = await app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
