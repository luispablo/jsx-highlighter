import expect from 'expect';
import expectJSX from 'expect-jsx';
import JSXHighlighter from "../JSXHighlighter";
import React from "react";

expect.extend(expectJSX);

describe("JSXHighlighter", () => {
	const TERMINO_BUSCADO = "albe";
	const CSS_CLASSNAME = "yellow";

	let highlight;

	before(() => {
		highlight = JSXHighlighter(CSS_CLASSNAME, TERMINO_BUSCADO);
	});

	it("Resalta el término buscado", () => {
		const html = highlight("Alberto está sentado");
		expect(html).toEqualJSX(<span><span className="yellow">Albe</span>rto está sentado</span>);
	});
	it("Resaltar undefined devuelve un string vacío", () => {
		const html = highlight(undefined);
		expect(html).toEqualJSX("");
	});
	it("Resaltar undefined como término buscado devuelve string vacío", () => {
		const highlightSinTermino = JSXHighlighter(CSS_CLASSNAME);
		const html = highlightSinTermino("Texto a buscar");
		expect(html).toEqualJSX("");
	});
});