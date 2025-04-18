const express = require('express');
const path = require('path');
const app = express();
const mainRoutes = require('./routes/main');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', mainRoutes);

app.listen(3000, () => console.log('Serveur http://localhost:3000'));
