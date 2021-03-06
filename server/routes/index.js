const url = require("url")
const path = require('path')
const utils = require("../helpers")

const File = require("../models/local-file.js")

const defaultRoute = (req, res) => {
	const url_parts = url.parse(req.url, true)
	const params = url_parts.query

	if (!utils.validUrl(params.url)) {
		res.sendFile(path.resolve(__dirname, '..', '..', 'build', 'index.html'));
		return
	}

	const options = utils.getRequestedOptions(params)

	const file = new File(params.url, options)

	if (!file.exists() || options.force) {
		file.save().then(image => {
			file.display(res)
		})

		return;
	}

	file.display(res)
}

module.exports = { defaultRoute }