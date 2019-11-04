const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/usersController');

router.get('/', userController.findAll);
router.get('/:id', userController.findOne);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;