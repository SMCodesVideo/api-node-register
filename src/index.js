const express = require("express"),
routes = require("./routes"),
app = express(),
mongoose = require("mongoose"),
cors = require("cors");

mongoose.connect('mongodb+srv://SMCodes:samuelpvp@videoapi-iokbe.gcp.mongodb.net/test', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(4000);

console.log("Api iniciada.");