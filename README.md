# `<text-zoom-observer>` element

An element that observes the browser text zoom.

## Installation

Load the script and then add the element to your page:

```html
<!-- Defer or don’t—live your life -->
<script src=/path/to/text-zoom-observer-element.js></script>
<text-zoom-observer></text-zoom-observer>
```

## Usage

When the element is connected to the DOM, it will set a `zoomed` state when the
page has text zoom greater than the base font size (which is assumed to be
`16px`). You can use the `:has()` selector

```css
/* Text is zoomed */
:root:has(text-zoom-observer:state(zoomed)) {
    background-color: DeepPink;
}
```

# Limitations, trade-offs, and feature ideas

- Assumes _you_ haven’t changed the `font-size` of the document. Perhaps we
  could determine that automatically or an attribute could be used for this.
- Setting the state of an element which then needs to be selected with `:has()`
  is likely less performant than just setting a class name on the `<html>`
  element.
- I heard there’s a party going on in that closed shadow root and you weren’t
  invited—_boohoo!_
