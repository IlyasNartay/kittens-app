const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const kittenRoutes = require('./routes/kittens');
const photoEntryRoutes = require('./routes/photoEntries');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/kittens', kittenRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/photo-entries', photoEntryRoutes);


// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log('✅ MongoDB подключен'))
  .catch(err => console.error('❌ Ошибка подключения к MongoDB:', err));

module.exports = app;
