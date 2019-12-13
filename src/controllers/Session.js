const User = require("../models/User");
module.exports = {
    async store(req, res) {
        var { email, password } = req.body;
        var use = await User.findOne({ email });
        if(use === null) {
            use = await User.create({
               email,
               password 
            });
        }
        return res.json({ "create": { use } });
    }
}