const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const leadRoutes = require('./routes/leads');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error(err.message);
});

app.use('/api/leads', leadRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
