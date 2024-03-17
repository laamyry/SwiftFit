const express = require('express');
const mongoose = require('mongoose');
const db = require('./Database');

const app = express();
app.listen(5000, () => {
    console.log("Server has started on port 5000");
});