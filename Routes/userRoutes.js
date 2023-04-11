const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authRequest = require("../middleware/authMiddleware");

router.get('/user/:id', authRequest, userController.getUserById);
router.post('/user', userController.createUser);
router.put("/user/:id", authRequest, userController.updateUser);
router.delete("/user/:id", authRequest, userController.removeUser);
router.post("/user/login", userController.login);

module.exports = router;
