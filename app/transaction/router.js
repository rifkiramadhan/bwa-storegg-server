var express = require('express');
var router = express.Router();
const { index, actionStatus } = require('./controller');

const { isLoginAdmin } = require('../middleware/auth');

router.use(isLoginAdmin);
router.get('/', index);
router.put('/status/:id', actionStatus);

module.exports = router;
