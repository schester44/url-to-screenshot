const validUrl = url => url && url.trim().length > 0 && typeof url === "string";
const isTrue = val => val == "true"

const resolveShotSize = size => {
		const shotSizes = ["window", "all"]
		
		const defaultSize = "window"

		// return defaultSize if size is undefined or if the size isn't a number and valid shotSizes does not include the size
		if (typeof size === "undefined" || (isNaN(parseInt(size)) && !shotSizes.includes(size.toLowerCase()))) {
			return defaultSize
		}

		return size	
};

const getRequestedOptions = params => {
	return {
		dimensions: {
			width: !isNaN(parseInt(params.w)) ? parseInt(params.w) : 1920,
			height: !isNaN(parseInt(params.h)) ? parseInt(params.h) : 1080
		},
		shotSize: {
			width: resolveShotSize(params.vpw),
			height: resolveShotSize(params.vph)
		},
		delay: !isNaN(parseInt(params.delay)) ? parseInt(params.delay) : 0,
		force: isTrue(params.force),
		selector: params.selector ? params.selector : false
	}
}

module.exports = { validUrl, isTrue, resolveShotSize, getRequestedOptions }
