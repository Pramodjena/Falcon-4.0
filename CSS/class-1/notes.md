# CSS Selectors:

1. Selectors:

Selectors are patterns used to select HTML elements that you want to style.
They are fundamental to CSS as they define the elements to which the CSS rules apply.
Selectors can target elements based on their type, attributes, relationship with other elements, and more.

2. ID Selectors:

ID selectors are used to select elements based on their unique identifier (ID).
They are denoted by the hash (#) symbol followed by the ID name.
ID selectors should be unique within the HTML document, meaning only one element should have a particular ID.
IDs are often used for styling specific elements or for JavaScript manipulation.

- Example :

```Javascript
css:
#header {
    background-color: blue;
    color: white;
    padding: 10px;
}

html:
<div id="header">
    <h1>Welcome</h1>
</div>

```

3. Class Selectors:

Class selectors are used to select elements based on their class attribute.
They are denoted by a period (.) followed by the class name.
Class selectors can be applied to multiple elements, allowing for consistent styling across different parts of the page.

- Example :

```Javascript
css:
.button {
    background-color: green;
    color: white;
    padding: 5px 10px;
}

html:
<button class="button">Click Me</button>
<button class="button">Submit</button>

```

## Note for Students:

Understanding CSS selectors is crucial for effective styling of HTML elements. Remember:

- IDs should be unique, representing a single element.
- Classes can be reused across multiple elements.
  Choose selectors wisely to efficiently target and style elements on your webpage.
