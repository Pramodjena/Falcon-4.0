## Mouse Events

```js
click: Triggered when the user clicks on an element.

javascript

document.getElementById("myButton").addEventListener("click", function() {
alert("Button was clicked!");
});
```

```js
dblclick: Triggered when the user double-clicks on an element.

javascript

document.getElementById("myButton").addEventListener("dblclick", function() {
alert("Button was double-clicked!");
});
```

```js
mouseover: Triggered when the user moves the mouse pointer over an element.

javascript

document.getElementById("myDiv").addEventListener("mouseover", function() {
this.style.backgroundColor = "yellow";
});
```

```js
mouseout: Triggered when the user moves the mouse pointer out of an element.

javascript

document.getElementById("myDiv").addEventListener("mouseout", function() {
this.style.backgroundColor = "";
});
```

## Keyboard Events

```js
keydown: Triggered when the user presses a key down.

javascript

document.addEventListener("keydown", function(event) {
console.log("Key pressed: " + event.key);
});
```

```js
keyup: Triggered when the user releases a key.

javascript

document.addEventListener("keyup", function(event) {
console.log("Key released: " + event.key);
});
```

```js
keypress: Triggered when the user presses a key (for printable characters).

javascript

document.addEventListener("keypress", function(event) {
console.log("Key press: " + event.key);
});
```

## Form Events

```js
submit: Triggered when a form is submitted.

javascript

document.getElementById("myForm").addEventListener("submit", function(event) {
event.preventDefault();
alert("Form submitted!");
});
```

```js
change: Triggered when an element's value changes (for input, select, and textarea elements).

javascript

document.getElementById("myInput").addEventListener("change", function() {
console.log("Value changed: " + this.value);
});
```

```js
focus: Triggered when an element gains focus.

javascript

document.getElementById("myInput").addEventListener("focus", function() {
this.style.backgroundColor = "lightblue";
});
```

```js
blur: Triggered when an element loses focus.

javascript

document.getElementById("myInput").addEventListener("blur", function() {
this.style.backgroundColor = "";
});
```

## Window Events

```js
load: Triggered when the whole page has loaded.

javascript

window.addEventListener("load", function() {
console.log("Page fully loaded");
});
```

```js
resize: Triggered when the window is resized.

javascript

window.addEventListener("resize", function() {
console.log("Window resized");
});
```

```js
scroll: Triggered when the user scrolls the window.

javascript

window.addEventListener("scroll", function() {
console.log("Page scrolled");
});
```

## Touch Events

```js
touchstart: Triggered when a touch point is placed on the touch surface.

javascript

document.getElementById("myDiv").addEventListener("touchstart", function() {
this.style.backgroundColor = "lightgreen";
});
```

```js
touchmove: Triggered when a touch point is moved along the touch surface.

javascript

document.getElementById("myDiv").addEventListener("touchmove", function(event) {
console.log("Touch moving: " + event.touches[0].clientX + ", " + event.touches[0].clientY);
});
```

```js
touchend: Triggered when a touch point is removed from the touch surface.

javascript

document.getElementById("myDiv").addEventListener("touchend", function() {
this.style.backgroundColor = "";
});
```

## Drag and Drop Events

```js
dragstart: Triggered when the user starts dragging an element.

javascript

document.getElementById("dragItem").addEventListener("dragstart", function(event) {
event.dataTransfer.setData("text", event.target.id);
});
```

```js
dragover: Triggered when an element is being dragged over a valid drop target.

javascript

document.getElementById("dropZone").addEventListener("dragover", function(event) {
event.preventDefault();
});
```

```js
drop: Triggered when an element is dropped on a valid drop target.

javascript

document.getElementById("dropZone").addEventListener("drop", function(event) {
event.preventDefault();
var data = event.dataTransfer.getData("text");
event.target.appendChild(document.getElementById(data));
});

```

These examples cover a wide range of events you might encounter in JavaScript. Feel free to modify and expand these examples based on your specific needs!

```

```
