const router = require('express').Router();
const vendaController = require('../controllers/venda-controller');

router.post('/', vendaController.create);
router.get('/', vendaController.getAll);
router.get('/:id', vendaController.getAllVendas);

module.exports = router;