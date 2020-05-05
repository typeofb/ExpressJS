let express = require('express');
let router = express.Router();

const controller = require('../controllers/stockAjax');

router.get('/', controller.read);
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/', controller.delete);

module.exports = router;