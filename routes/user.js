let express = require('express');
let router = express.Router();

const controller = require('../controllers/user');

router.get('/:nickname', controller.read);
router.post('/', controller.insert);

module.exports = router;