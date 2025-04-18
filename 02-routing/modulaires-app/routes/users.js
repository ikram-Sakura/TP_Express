const express = require('express');
const router = express.Router();

const users = [
  { id: 1, name: 'Ikram', email: 'ikram@example.com' },
  { id: 2, name: 'Sara', email: 'sara@example.com' },
];

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('Utilisateur non trouvé');
  }
});

module.exports = router;
