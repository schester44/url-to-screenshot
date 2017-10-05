const path = require('path')
const express = require("express")
const app = express()
const routes = require('./routes');
const utils = require('./helpers');

app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));

app.get("/", routes.defaultRoute)

const server = app.listen(3000, () => {
	console.log("listening at http://%s:%s", server.address().address, server.address().port)
})