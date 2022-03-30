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
    try {
        const newUser = new Profile({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        })
        const saveUser = await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).send(error)
    }
}

const putProfile = async (req, res) => {
    try {
        const updateUser = await Profile.updateOne({ _id: req.params.id },
            {
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password
            })
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