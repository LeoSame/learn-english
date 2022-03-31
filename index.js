const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');

const app = express();
const PORT = process.env.PORT || config.get('serverPort');

app.use(express.json());

app.use(express.static('static'));
app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const start = async () => {
  try {
    await mongoose.connect(config.get('dbUrl'), { useNewUrlParser: true, useUnifiedTopology: true });

    app.listen(PORT, () => {
      console.log('Server started on port ', PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
