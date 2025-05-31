const express = require('express');
const router = express.Router();
const { getConcerts } = require('../controllers/concertController');

router.get('/', getConcerts);

module.exports = router; 