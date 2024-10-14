const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database/dbConnect');
const bookingRoutes = require('./routes/bookingRoutes.route');
const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', bookingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
