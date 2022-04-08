const Profile = require('../models/Profile');

const getProfiles = async (req, res) => {
    try {
        res.status(200).json(await Profile.find());
    } catch (error) {
        res.status(400).send(error)
    }
}

const getProfile = async (req, res) => {
    try {
        res.status(200).json(await Profile.findOne({ _id: req.params.id }));
    } catch (error) {
        res.status(400).send(error)
    }
}

const postProfile = async (req, res) => {

    const { userName, email, password, favorite } = req.body;
    Profile.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "Ops, this email is already used!" })
        } else {
            const user = new Profile({ userName, email, password, favorite })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ user, id: user._id })
                }
            })
        }
    })
}

const putProfile = async (req, res) => {

    const { userName, email, password, favorite } = req.body;
    try {
        const updateUser = await Profile.updateOne({ _id: req.params.id },
            { userName, email, password, favorite })
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    getProfiles,
    getProfile,
    postProfile,
    putProfile
}