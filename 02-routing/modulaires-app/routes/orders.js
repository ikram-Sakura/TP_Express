const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Liste des ordres'));
router.get('/:id', (req, res) => res.send(`Ordre ${req.params.id}`));

module.exports = router;
