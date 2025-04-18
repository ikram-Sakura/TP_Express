const express = require('express');
const app = express();
const logger = require('./logger');
const auth = require('./auth');

app.use(logger); 
app.use(express.json());

app.get('/', (req, res) => res.send('Public'));
app.get('/admin', auth, (req, res) => res.send('Espace sécurisé'));

app.listen(3005, () => console.log('Auth app: http://localhost:3005'));
