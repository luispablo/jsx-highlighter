var React = require("react");

var compact = function compact (array) {
  return array.filter(function (item) {
    return item ? (typeof(item) !== "string" || item.trim().length) : item;
  });
};

var buildHighlighter = function buildHighlighter (cssClassName, wildcard, searchText) {
  const lowerSearchTexts = searchText && compact(searchText.split(wildcard)) || [];

  return function highlight (text) {
    if (text && searchText && text.trim().length > 0 && searchText.trim().length > 0) {
      const parts = [];
      let sufix = text || "";

      for (let searchItem of lowerSearchTexts) {
        const [lPrefix] = sufix.toLowerCase().split(searchItem.toLowerCase());
        const prefix = sufix.substring(0, lPrefix.length);
        const middle = sufix.substring(lPrefix.length, lPrefix.length + searchItem.length);
        sufix = sufix.substring(prefix.length + searchItem.length, sufix.length);
        parts.push(prefix);
        parts.push(React.createElement("span", { className: cssClassName, key: parts.length }, middle));        
      }
      return React.createElement("span", null, ...parts, sufix);
    } else {
      return text;
    }
  };
}

module.exports = buildHighlighter;
