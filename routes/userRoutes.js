const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user', userController.getUser); 
router.post('/user', userController.createUser); 
router.patch('/user/:id', userController.updateUser); 
router.delete('user/:id',userController.removeUser);


module.exports = router;
