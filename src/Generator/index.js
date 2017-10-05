import React, { Component } from "react"

import "./Generator.css"

import GeneratedLinkModal from "../GeneratedLinkModal"

		const validUrl = (params, link = `http://10.16.14.95:3000`) => {
			let first = true

			if (params.url === "https://") {
				return undefined
			}

			Object.keys(params).forEach(key => {
				if (params[key].trim().length > 0) {
					if (first === true) {
						link += `?${key}=${params[key]}`
					} else {
						link += `&${key}=${params[key]}`
					}
					first = false
				}
			})

			return link
		}

class Generator extends Component {
	constructor() {
		super()

		this.defaultState = {
			generator: {
				url: "https://",
				width: "",
				height: ""
			},
			modalVisible: false
		}

		this.state = { ...this.defaultState }

		this.onInputChange = this.onInputChange.bind(this)
		this.generateLink = this.generateLink.bind(this)
		this.reset = this.reset.bind(this)
		this.onGeneratedClose = this.onGeneratedClose.bind(this)
	}

	generateLink() {
		if (!validUrl(this.state.generator)) {
			alert('bad link bro!')
			console.warn('the link and or params provided were not valid');
			return;
		}
		
		this.setState({ modalVisible: true })
	}

	reset() {
		this.setState(this.defaultState)
	}

	onInputChange(event) {
		const field = event.target.name
		const value = event.target.value

		this.setState({
			generator: {
				...this.state.generator,
				[field]: value
			}
		})
	}

	onGeneratedClose() {
		this.setState({ modalVisible: false })
	}

	render() {
		const { generator, modalVisible } = this.state

		return (
			<div className="Generator">
				{modalVisible && (
					<GeneratedLinkModal close={this.onGeneratedClose} link={validUrl(this.state.generator)}>
					</GeneratedLinkModal>
				)}

				<div className="Generator__form">
					<div className="form-group">
						<label hmtlfor="url">URL to capture</label>
						<input
							type="text"
							placeholder="https://google.com"
							name="url"
							onChange={this.onInputChange}
							value={generator.url}
						/>
					</div>

					<div className="flex form-bottom">
						<div className="form-group">
							<label hmtlfor="width">Width (pixels)</label>
							<input
								type="text"
								placeholder="1920"
								name="width"
								onChange={this.onInputChange}
								value={generator.width}
							/>
						</div>

						<div className="form-group">
							<label hmtlfor="height">Height (pixels)</label>
							<input
								type="text"
								placeholder="1080"
								name="height"
								onChange={this.onInputChange}
								value={generator.height}
							/>
						</div>
					</div>

					<div className="Generator__generate">
						<button className="Generator__generate-btn" onClick={this.generateLink}>
							Generate screenshot link
						</button>
					</div>

					<div className="Generator__more-options">
						<p>more options</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Generator
