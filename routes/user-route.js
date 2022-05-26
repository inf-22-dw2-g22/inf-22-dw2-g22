const router = require('express').Router();

const userController= require('../controllers/user-controller');

router.get('/', userController.getAll);
router.post('/', userController.create);
router.get('/:id', userController.getOne);
router.put('/:id', userController.update);

module.exports = router;