# Dropdown Menu NPM package

This is a NPM package providing a simple unitlity function for creating dropdown menus in web apps. It allows you to easily create a dropdown menu by referencing two elements. One being the element that will trigger the dropdown and the other being the content of the dropdown menu. This will toggle the visibility of the dropdown content when the trigger is clicked.

## Installation

Install the package using npm:

```
npm install simpledrop-js
```

## Usage

** Import the module **
To use the `newDropDownMenu` function, you first need to import it into your JavaScript file:

```js
import { newDropDownMenu } from "simpledrop-js";
```

** Creating a Dropdown Menu **
The `newDropDownMenu` function takes two arguments: the element that triggers the drop down and the dropdown content element. Here is an example of how you would use the function:

```js
// Assuming you have a 'menu' and 'dropdown' element defined but it can be anything.
const btn = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");

newDropDownMenu(btn, dropdown);
```

This makes it so that when you click on the `btn` element, it will toggle the visibility of the `dropdown` element thus creating a dropwdown effect.

## Example HTML structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <header>
      <nav class="navbar">
        <button id="menu">Click To see dropdown menu</button>
        <ul id="dropdown">
          <li><a href="#" class="dropdown-menu-item">Menu Item</a></li>
          <li><a href="#" class="dropdown-menu-item">Menu Item</a></li>
          <li><a href="#" class="dropdown-menu-item">Menu Item</a></li>
        </ul>
      </nav>
    </header>
  </body>
</html>
```
