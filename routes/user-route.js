const router = require('express').Router();

const userController = require('../controllers/user-controller');

router.get('/', userController.getAll);
router.post('/', userController.login);
router.put('/', userController.update);
router.delete('/:id', userController.del);

module.exports = router;