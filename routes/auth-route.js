const router = require('express').Router();
const authController = require('../controllers/auth-controller');


router.get('/', authController.userAuth);



module.exports = router;