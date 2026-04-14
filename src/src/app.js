const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
require('./db/connection');

const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json()); 

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});