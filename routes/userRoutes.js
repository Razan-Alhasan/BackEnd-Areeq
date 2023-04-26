const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authRequest = require("../middleware/authMiddleware");

router.get('/user/:id', authRequest, userController.getUserById);
router.post('/user', userController.createUser);
router.put("/user/:id", authRequest, userController.updateUser);
router.delete("/user/:id", authRequest, userController.removeUser);
router.post("/user/login", userController.login);
router.get('/user', authRequest, userController.getCurrentUser);

module.exports = router;
