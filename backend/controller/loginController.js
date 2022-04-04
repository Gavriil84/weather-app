const profile = require('../models/Profile');

const loginUser = async (req, res) => {
    const { userName, password } = req.body;

    const user = await profile.findOne({ userName, password }).lean();

    if (user) {
        res.json({ id: user._id, userName: user.userName })
    } else {
        res.json({ error: 'Invalid nickname or password!!' })
    }
}

module.exports = { loginUser }