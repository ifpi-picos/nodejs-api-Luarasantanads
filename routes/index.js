const express = require('express');
const postagensRoutes = require('./postagensRoutes.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('App Online :)');
});

router.use('/postagens', postagensRoutes);

module.exports = router;