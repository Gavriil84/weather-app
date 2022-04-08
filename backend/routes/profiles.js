const express = require('express');
const router = express.Router();
const validators = require('../validator');

const { getProfiles, getProfile, postProfile, putProfile } = require('../controller/profileController')

router.get("/", getProfiles)
router.get("/:id", getProfile)
router.post("/", validators.signupValidator, postProfile)
router.put("/:id", putProfile)

module.exports = router;