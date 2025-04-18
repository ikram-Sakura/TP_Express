const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Liste des produits'));
router.get('/:id', (req, res) => res.send(`Produit ${req.params.id}`));

module.exports = router;
