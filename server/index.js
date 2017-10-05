const path = require('path')
const express = require("express")
const app = express()
const routes = require('./routes');
const utils = require('./helpers');


app.get("/", routes.defaultRoute)
app.use(express.static(path.resolve(__dirname, '..', 'build')));

const server = app.listen(3000, () => {
	console.log("listening at http://%s:%s", server.address().address, server.address().port)
})