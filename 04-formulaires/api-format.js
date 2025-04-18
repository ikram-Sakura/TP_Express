const express = require('express');
const app = express();

app.get('/data', (req, res) => {
  const user = {
    name: "Amina",
    email: "amina@example.com"
  };

  res.format({
    'text/html': function () {
      res.send(`<h1>Utilisateur</h1><p>Nom : ${user.name}</p><p>Email : ${user.email}</p>`);
    },

    'application/json': function () {
      res.json(user);
    },

    'application/xml': function () {
      res.type('application/xml');
      res.send(`<user><name>${user.name}</name><email>${user.email}</email></user>`);
    },

    'default': function () {
      res.status(406).send('Format non supporté');
    }
  });
});

app.listen(3008, () => console.log('API formats: http://localhost:3008/data'));
