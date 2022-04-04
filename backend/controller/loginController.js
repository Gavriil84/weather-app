const profile = require('../models/Profile');

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await profile.findOne({ email, password }).lean();

    if (user) {
        res.json({ id: user._id, userName: user.userName, email: user.email, password: user.password })
    } else {
        res.json({ error: 'Invalid email or password!!' })
    }
}

module.exports = { loginUser }