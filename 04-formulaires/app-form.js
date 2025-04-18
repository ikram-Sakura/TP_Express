const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h1>Formulaire d'inscription</h1>
    <form action="/register" method="post">
      <input name="name" placeholder="Nom" required /><br>
      <input type="email" name="email" placeholder="Email" required /><br>
      <input type="password" name="password" placeholder="Mot de passe" required /><br>
      <button type="submit">S'inscrire</button>
    </form>
  `);
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Tous les champs sont requis.");
  }

  res.send(`<h2>Bienvenue ${name} ! Votre inscription est réussie.</h2>`);
});

app.listen(3007, () => console.log('Formulaire sur http://localhost:3007'));
