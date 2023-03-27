const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/user', userController.getuser); 
router.post('/user', userController.createuser); 
router.patch('/user/:id', userController.updateuser); 
router.patch('user/:id',userController.deleteuser);