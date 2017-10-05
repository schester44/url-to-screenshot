import React from "react"

import closeIcon from "./x.svg"

import "./GeneratedLinkModal.css"

const GeneratedLinkModal = props => {
	const { link, close } = props

	return (
		<div className="GeneratedLinkModal">
			<span className="GeneratedLinkModal__close" onClick={close}><img src={closeIcon} /></span>
			<div className="GeneratedLinkModal__link">{link}</div>
		</div>
	)
}

export default GeneratedLinkModal
