const express = require("express"),
routes = require("./routes"),
app = express(),
mongoose = require("mongoose");

mongoose.connect('mongodb+srv://SMCodes:samuelpvp@videoapi-iokbe.gcp.mongodb.net/test', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(4000);