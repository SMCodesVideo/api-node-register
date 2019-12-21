const express = require("express"),
routes = express.Router(),
Session = require("./controllers/Session");

routes.get('/stats', (req, res) => {
    return res.send("Ok");
});
// PARAMS: email, password

routes.post('/createuser', Session.store); // Essa rota cria um usuário para ficar no banco de dados

// Finalize

routes.get('/getusers', Session.index); // Essa rota pesquisa todos os usuários registrado no banco de dados

module.exports = routes;