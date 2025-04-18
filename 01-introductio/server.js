const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World'));
app.get('/date', (req, res) => res.send(new Date().toLocaleString()));

app.listen(3000, () => console.log('Serveur http://localhost:3000'));
