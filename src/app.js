require('dotenv').config({ path: './config/.env' });
const express = require('express');

const app = express();

// Recognize incoming request object as JSON object
app.use(express.json());

// Register listener
app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});

module.exports = app;