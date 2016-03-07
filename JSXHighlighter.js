var React = require("react");

module.exports = function (cssClassName, searchText) {
	return function (fullText) {
		if (fullText && searchText) {
			var position = fullText.toUpperCase().indexOf(searchText.toUpperCase());

			if (position < 0) {
				return fullText;
			} else {
				var prefix = fullText.substring(0, position);
				var middle = fullText.substring(position, position + searchText.length);
				var sufix = fullText.substring(position + searchText.length);

				var highlight = React.createElement("span", {className: cssClassName}, middle);

				return React.createElement("span", null, prefix, highlight, sufix);
			}
		} else {
			return "";
		}
	};
}