# JSXHighlighter

Small and focused library to mark with a css classed span a part of an JSX HTML text.

**If you like it, star; if you don't, please tell me why!! :)**

## Installation

```
npm install --save jsx-highlighter
```

## Usage

```
import JSXHighlighter from "jsx-highlighter";

...

const highlight = JSXHighlighter("highlighted", "ome");

// and when you build your JSX
return <div>{highlight("This is and awesome util!")}</div>;
```

But it's your job to define the CSS that'll make the UI magic.

## Credits

[@luispablo](https://twitter.com/luispablo)