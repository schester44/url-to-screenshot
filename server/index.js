const express = require("express")
const app = express()
const routes = require('./routes');
const utils = require('./helpers');

app.get("/", routes.defaultRoute)

const server = app.listen(3000, () => {
	console.log("listening at http://%s:%s", server.address().address, server.address().port)
})