let express = require('express');
let router = express.Router();

const controller = require('../controllers/stock');

router.get('/', controller.read);

module.exports = router;