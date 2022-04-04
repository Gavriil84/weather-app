const router = require('express').Router();
const profileRouter = require('./profiles');
const loginrouter = require('./login')

// router.get('/profile', (req, res) => {
//     res.status(200).json({ message: "hello" })
// })

router.use('/api/v1/profile', profileRouter);
router.use('/api/v1/login', loginrouter);


module.exports = router;