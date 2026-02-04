customElements.define("text-zoom-observer", class extends HTMLElement {
	#internals = this.attachInternals();
	#ro = new ResizeObserver(([entry]) => {
		this.#internals.states[entry.contentRect.height > 16 ? "add" : "delete"]("zoomed");
	});
	constructor() {
		super();
		const styles = new CSSStyleSheet();
		styles.replaceSync(`:host {
			all: revert-layer !important;
			inset: -1px auto auto -1px !important;
			position: fixed !important;
			contain: strict !important;
			height: 1rem !important;
		}`);
		this.attachShadow({ mode: "closed" }).adoptedStyleSheets = [styles];
	}
	connectedCallback() { this.#ro.observe(this); }
	disconnectedCallback() { this.#ro.unobserve(this); }
});
