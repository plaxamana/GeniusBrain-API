const express = require('express');

const app = express();
let port = 3000;

app.get('/', (req, res) => {
  res.send('it\'s working');
})

app.listen(port, () => {
  console.log('App is running on port: ' + port)
});

/**
 * / --> res = this is working
 * /signin --> POST = success/fail
 * /register --> POST = user
 * /profile/:userId --> GET = user
 * /image --> PUT --> user
 * 
 */