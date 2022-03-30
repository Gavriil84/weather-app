const router = require('express').Router();
const profileRouter = require('./profiles');

// router.get('/profile', (req, res) => {
//     res.status(200).json({ message: "hello" })
// })

router.use('/api/v1/profile', profileRouter);


module.exports = router;