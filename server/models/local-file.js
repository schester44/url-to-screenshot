const fs = require("fs")
const path = require("path")
const shorter = require("shorter")
const webshot = require("webshot")

class LocalFileModel {
	constructor(url, options) {
		this.uid = shorter.compress(url).toString("hex")
		this.filename = `${this.uid}.png`
		this.path = path.resolve(__dirname, "..", "screenshots")
		this.filepath = path.join(this.path, this.filename)
		this.url = url
		this.options = options

		console.log(this.options);
	}

	exists() {
		return fs.existsSync(this.filepath)
	}

	display(res) {
		res.sendFile(this.filepath)
	}
	
	async save(callback) {
		const options = {
			windowSize: {
				width: this.options.dimensions.width,
				height: this.options.dimensions.height
			},
			shotSize: {
				width: this.options.shotSize.width,
				height: this.options.shotSize.height
			},
			renderDelay: this.options.delay * 1000,
			captureSelector: this.options.selector
		}

		return new Promise((resolve, reject) => {
			webshot(this.url, this.filepath, options, error => {
				if (error) {
					reject(error)
				}
				
				resolve(this.filepath)
			})
		})
	}
}

module.exports = LocalFileModel
