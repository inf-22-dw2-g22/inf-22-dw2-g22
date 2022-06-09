const router = require('express').Router();
const publiController = require('../controllers/publicacao-controller');

router.post('/', publiController.create);
router.get('/', publiController.getAll);
router.get('/:id', publiController.getAllPubli);
router.put('/:id', publiController.update);
router.delete('/:id', publiController.del);
module.exports = router;