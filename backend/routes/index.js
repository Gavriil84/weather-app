const router = require('express').Router();

router.get('/profile', (req, res) => {
    res.status(200).json({ bitch: "slut" })
})


module.exports = router;