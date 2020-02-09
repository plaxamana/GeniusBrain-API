const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'philip',
    password : 'admin',
    database : 'geniusbrain'
  }
});


const app = express();
let port = 3001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('home');
  // const data = db.select('*').from('users')
  // .then(res => response.json(data));
})

app.post('/signin', (req, res) => {signin.handleSignin(db, bcrypt)(req, res)});
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)});
app.get('/profile/:id', (req, res) => {profile.handleProfileGet(req, res, db)});
app.put('/image', (req, res) => {image.handleImage(req, res, db)});

app.listen(port, () => {
  console.log('App is running on port: ' + port)
});
