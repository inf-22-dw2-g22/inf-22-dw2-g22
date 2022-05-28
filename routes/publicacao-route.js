const router = require('express').Router();
const publiController = require('../controllers/publicacao-controller');

router.post('/', publiController.create);
router.get('/', publiController.getAll);
router.get('/:id', publiController.getAllPubli);
//router.get('/:apiKey', publiController.getAllPubli);
//A LOGICA É QUE ELE ESTA EXECUTANDO O GET DO GETONE, SUPOSTAMENTE
//NAO ACEITA DOIS GET ID
module.exports = router;