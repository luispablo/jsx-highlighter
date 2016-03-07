var React = require("react");

module.exports = function (cssClassName, searchText) {
	return function (fullText, searchTextJIT) {
		searchTextJIT = searchTextJIT || searchText;

		if (fullText && searchTextJIT) {
			var position = fullText.toUpperCase().indexOf(searchTextJIT.toUpperCase());

			if (position < 0) {
				return fullText;
			} else {
				var prefix = fullText.substring(0, position);
				var middle = fullText.substring(position, position + searchTextJIT.length);
				var sufix = fullText.substring(position + searchTextJIT.length);

				var highlight = React.createElement("span", {className: cssClassName}, middle);

				return React.createElement("span", null, prefix, highlight, sufix);
			}
		} else {
			return fullText || "";
		}
	};
}