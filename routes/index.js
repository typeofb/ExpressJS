let express = require('express');
let router = express.Router();

const controller = require('../controllers/index');

router.get('/', controller.read);
router.put('/:id', controller.update);

module.exports = router;