const express = require('express');
const router = express.Router();
const validators = require('../validator');


const { loginUser } = require('../controller/loginController');

router.post("/", validators.loginValidator, loginUser)

module.exports = router;