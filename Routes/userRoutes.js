const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authRequest = require("../middleware/authMiddleware");

router.get('/user/:id', authRequest, userController.getUserById);
router.post('/user', authRequest, userController.createUser);
router.put("/user", authRequest, userController.updateUser);
router.delete("/user/:id", authRequest, userController.removeUser);
router.post("/signup", userController.signup);
router.post("/login", userController.login);

model.exports = router;
