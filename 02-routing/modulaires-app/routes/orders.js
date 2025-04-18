const express = require('express');
const router = express.Router();

const orders = [
  { id: 1, userId: 1, productIds: [1, 2], total: 1399.98 },
  { id: 2, userId: 2, productIds: [2], total: 499.99 },
];

router.get('/', (req, res) => {
  res.json(orders);
});

router.get('/:id', (req, res) => {
  const order = orders.find(o => o.id == req.params.id);
  if (order) {
    res.json(order);
  } else {
    res.status(404).send('Commande non trouvée');
  }
});

module.exports = router;
