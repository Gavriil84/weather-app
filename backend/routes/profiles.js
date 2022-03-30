const express = require('express');
const router = express.Router();

const { getProfiles, getProfile, postProfile, putProfile } = require('../controller/profileController')

router.get("/", getProfiles)
router.get("/:id", getProfile)
router.post("/", postProfile)
router.put("/:id", putProfile)

module.exports = router;