const express = require('express');
// Import and require mysql2
const Next = require('./src/code.js');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Next.Test();

Next.Start()