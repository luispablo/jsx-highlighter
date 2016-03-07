import React from "react";

export default (cssClassName, searchText) => {
	return (fullText) => {
		if (fullText && searchText) {
			const position = fullText.toUpperCase().indexOf(searchText.toUpperCase());

			if (position < 0) {
				return fullText;
			} else {
				const prefix = fullText.substring(0, position);
				const middle = fullText.substring(position, position + searchText.length);
				const sufix = fullText.substring(position + searchText.length);

				return <span>{prefix}<span className={cssClassName}>{middle}</span>{sufix}</span>;
			}
		} else {
			return "";
		}
	};
}