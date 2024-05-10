# Introduction to CSS Positioning:

CSS positioning is a fundamental concept in web development that allows you to control the layout and placement of elements on a webpage. Understanding different positioning properties will help you create visually appealing and structured web pages. Let's dive into the basics of CSS positioning.

1. Static Positioning:
   By default, HTML elements are positioned statically, meaning they flow in the order they appear in the HTML document. You don't need to specify any positioning properties for static positioning.

2. Relative Positioning:
   Relative positioning allows you to position an element relative to its normal position on the page. When you use relative positioning, you can move the element using the top, bottom, left, and right properties.

```javascript
//css
.example {
  position: relative;
  top: 10px; /* Move the element 10 pixels down */
  left: 20px; /* Move the element 20 pixels to the right */
}

```

3. Absolute Positioning:
   Absolute positioning positions an element relative to its closest positioned ancestor or to the initial containing block of the document. This means that the element is taken out of the normal document flow.

```javascript
//css
.example {
  position: absolute;
  top: 50px; /* Position the element 50 pixels from the top */
  left: 100px; /* Position the element 100 pixels from the left */
}

```

4. Fixed Positioning:
   Fixed positioning positions an element relative to the browser window. The element remains fixed even when the user scrolls the page.

```javascript
//css
.example {
  position: fixed;
  top: 0; /* Position the element at the top of the viewport */
  right: 0; /* Position the element at the right side of the viewport */
}

```

5. Sticky Positioning:
   Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as relative positioned until it crosses a specified threshold, then it is treated as fixed positioned.

```javascript
//css
.example {
  position: sticky;
  top: 0; /* Stick the element at the top of its container when scrolling */
}

```

## Conclusion:

Understanding CSS positioning is essential for creating well-structured and visually appealing web pages. By mastering these basic positioning techniques, you'll have greater control over the layout of your web content. Experiment with different positioning properties and see how they affect the placement of elements on your webpage.

# Z-Index

- The z-index property specifies the stack order of an element. An element with a higher z-index value will be placed on top of an element with a lower z-index value.

```javascript
//css
.box1 {
   position: relative;
    z-index: 1;
}
.box2 {
   position: relative;
    z-index: 2;
}
```
