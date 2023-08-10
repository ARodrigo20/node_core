'use strict';

const express = require('express');
const path = require('path')
const cron = require('node-cron');
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST

// App
const app = express();

cron.schedule('*/10 * * * * *', () => {
  console.log('fecha :', new Date());
});

app.get('/', (req, res) => {
  res.send('aplicacion base');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
