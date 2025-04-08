const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Score = require('./models/Score');
const playerRoutes = require('./routes/player');
const teamRoutes = require('./routes/team');
const scoreRoutes = require('./routes/score');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection string
const uri = 'mongodb+srv://rksharma7071:c82cdddRTIj1wJ3a@live-score.zz27jud.mongodb.net/?retryWrites=true&w=majority&appName=Live-Score';

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));




app.use('/score', scoreRoutes);
app.use('/player', playerRoutes);
app.use('/team', teamRoutes);
app.use("/match", require("./routes/match"));


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
