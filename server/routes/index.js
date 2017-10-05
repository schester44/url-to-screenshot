const File = require("../models/local-file.js")
const utils = require("../helpers")
const url = require("url")

const defaultRoute = (req, res) => {
	const url_parts = url.parse(req.url, true)
	const params = url_parts.query
	if (!utils.validUrl(params.url)) {
		console.warn("Invalid url attempt:", params.url)
		res.send("landing page")
		return
	}

	console.log(`Request received for ${params.url}`)

	const options = utils.getRequestedOptions(params)

	const file = new File(params.url, options)

	if (!file.exists() || options.force) {
		try {
			(async () => {
				const saved = await file.save()
			})
		} catch (e) {
			console.warn(e)
		}
	}

	file.display(res)
}

module.exports = { defaultRoute }