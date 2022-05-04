const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const router = express.Router();

// sendFile will go here

app.use(express.static(path.join(__dirname, 'public')));
app.get('/index', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('/mens.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/mens.html'));
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('/womens.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/womens.html'));
});




app.listen(port);
console.log('Server started at http://localhost:' + port);