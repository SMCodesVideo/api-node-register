const express = require("express"),
routes = express.Router(),
Session = require("./controllers/Session");

routes.get('/stats', (req, res) => {
    return res.send("Ok");
});
routes.post('/createuser', Session.store);

module.exports = routes;