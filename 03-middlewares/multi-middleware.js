const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const compression = require('compression');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(compression());

app.get('/', (req, res) => {
  const content = 'Hello avec middlewares tiers !'.repeat(20);
  res.send(content);
});

app.listen(3006, () => console.log('App avec middlewares tiers: http://localhost:3006'));
