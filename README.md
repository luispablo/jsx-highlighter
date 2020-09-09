# jsx-highlighter

Small and focused library to mark with a css classed span a part of an JSX HTML text.

**If you like it, star; if you don't, please tell me why!! :)**

## Installation

```
npm install --save jsx-highlighter
```

## Usage

Initialize it with the CSS class, search wildcard and searched text

```jsx
import buildHighlighter from "jsx-highlighter";

...

// "highlighted"  is the CSS class applied to the wraping HTML span
// "%"            is the wildcard used to search (used only to analyze, removed from the final result)
// "%ome"         is the text searched for, so you'd want 'ome', 'Ome', 'OMe', etc to be highlighted
const highlight = buildHighlighter("highlighted", "%", "%ome");

// and when you build your JSX
return <div>{highlight("This is an awesome util!")}</div>;
```

**All fields are mandatory.**

This will give you as a result: ```<span>This is an awes<span class="highlighted">ome</span> util!</span>```

## Credits

[@luispablo](https://twitter.com/luispablo)
