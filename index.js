function dm(tag, attrib, child) {
	var element = document.createElement(tag);

	if (attrib instanceof String) {
		// Do some regex
	} else if (attrib instanceof Element) {
		// Copy Element attribs
	} else if (attrib instanceof Array) {
		for (var i = 0; i < attrib.length; i++) {
			element.setAttribute(attrib[i][0], attrib[i][1]);
		}
	} else if (attrib instanceof Object) {
		for (var key in attrib) {
			if (attrib.hasOwnProperty(key) {

			}
		}
	}

	if (child instanceof Array) {

	} else if (child instanceof Element) {

	}

	return element;
}
