const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: 'Ordinateur Portable', price: 899.99 },
  { id: 2, name: 'Smartphone', price: 499.99 },
];

router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Produit non trouvé');
  }
});

module.exports = router;
