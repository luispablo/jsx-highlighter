# JSXHighlighter

Small and focused library to mark with a css classed span a part of an JSX HTML text.

**If you like it, star; if you don't, please tell me why!! :)**

## Installation

```
npm install --save jsx-highlighter
```

## Usage

You can initialize it with the searched term, 

```
import JSXHighlighter from "jsx-highlighter";

...

const highlight = JSXHighlighter("highlighted", "ome");

// and when you build your JSX
return <div>{highlight("This is an awesome util!")}</div>;
```

or put it as a parameter in each highlighting operation.

```
import JSXHighlighter from "jsx-highlighter";

...

const highlight = JSXHighlighter("highlighted");

// and when you build your JSX
return <div>{highlight("This is an awesome util!", "ome")}</div>;
```

Both options will give you as a result: ```<span>This is an awes<span class="highlighted">ome</span> util!</span>```

But it's your job to define the CSS that'll make the UI magic.

## Credits

[@luispablo](https://twitter.com/luispablo)