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

	it("Highlight search term", () => {
		const html = highlight("Albert is standing");
		expect(html).toEqualJSX(<span><span className="yellow">Albe</span>rt is standing</span>);
	});
	it("undefined highlighting returns empty string", () => {
		const html = highlight(undefined);
		expect(html).toEqualJSX("");
	});
	it("undefined as search term returns empty string", () => {
		const highlightSinTermino = JSXHighlighter(CSS_CLASSNAME);
		const html = highlightSinTermino("Searched text");
		expect(html).toEqualJSX("");
	});
	it("gets the searched term when highlighting", () => {
		const jitHighlight = JSXHighlighter(CSS_CLASSNAME);
		const html = jitHighlight("This is abandoned text", "aba");
		expect(html).toEqualJSX(<span>This is <span className="yellow">aba</span>ndoned text</span>);
	});
});