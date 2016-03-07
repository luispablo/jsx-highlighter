import expect from 'expect';
import expectJSX from 'expect-jsx';
import JSXHighlighter from "../JSXHighlighter";
import React from "react";

expect.extend(expectJSX);

describe("JSXHighlighter", () => {
	const SEARCH_TERM = "albe";
	const CSS_CLASSNAME = "yellow";

	let highlight;

	before(() => {
		highlight = JSXHighlighter(CSS_CLASSNAME, SEARCH_TERM);
	});

	it("highlights search term", () => {
		const html = highlight("Albert is standing");
		expect(html).toEqualJSX(<span><span className="yellow">Albe</span>rt is standing</span>);
	});
	it("undefined highlighting returns empty string", () => {
		const html = highlight(undefined);
		expect(html).toEqualJSX("");
	});
	it("undefined as search term returns the text as is", () => {
		const emptyHighlight = JSXHighlighter(CSS_CLASSNAME);
		const text = "Searched text";
		const html = emptyHighlight(text);
		expect(html).toEqualJSX(text);
	});
	it("gets the searched term when highlighting", () => {
		const jitHighlight = JSXHighlighter(CSS_CLASSNAME);
		const html = jitHighlight("This is abandoned text", "aba");
		expect(html).toEqualJSX(<span>This is <span className="yellow">aba</span>ndoned text</span>);
	});
});