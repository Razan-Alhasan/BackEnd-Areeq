const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/user', userController.getuser); 
router.post('/user', userController.createuser); 
router.patch('/user/:id', userController.updateuser); 
router.delete('user/:id',userController.removeuser);

model.exports = router;
