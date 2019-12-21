const User = require("../models/User");
module.exports = {
    async store(req, res) {
        var { email, password } = req.body;
        var user = await User.findOne({ email });
        if(user === null) {
            user = await User.create({
               email,
               password 
            });
        }
        return res.json({ "create": { user } });
    },
    async index(req, res) {
        var users = await User.find();
        var us = [];
        users.map(user => {
            us.push({ email: user.email, id: user._id });
        });
        return res.json({ "users": us });
    }
}