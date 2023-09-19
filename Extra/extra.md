
## 5. Explain the concept of chaining in jQuery.
**Answer:** Chaining in jQuery allows you to apply multiple methods to the same set of selected elements in a single line of code. For example: `$('p').addClass('highlight').fadeOut();` applies the `addClass` and `fadeOut` methods to all `<p>` elements.

## 6. What is the purpose of the `.css()` method in jQuery?

**Answer:** The `.css()` method in jQuery is used to get or set CSS properties of selected elements. It can be used to change the styling of elements dynamically.

## 7. How do you attach a click event handler to an HTML element with the ID "myButton" in jQuery?

**Answer:** You can attach a click event handler to an element with the ID "myButton" using `$('#myButton').click(function() { /* Your code here */ });`.

## 8. What is the significance of `$(document).ready()` in jQuery?

**Answer:** `$(document).ready()` is used to ensure that jQuery code executes only after the document (HTML) has fully loaded, preventing issues with elements not being available for manipulation.

## 9. How can you hide an element using jQuery?

**Answer:** You can hide an element using the `.hide()` method in jQuery, like this: `$('#myElement').hide();`.

## 10. What does the `.fadeIn()` method do in jQuery?

**Answer:** The `.fadeIn()` method gradually makes a hidden element visible by increasing its opacity. It creates a fading-in effect.

## 11. How do you set the text content of an element using jQuery?

**Answer:** You can set the text content of an element using the `.text()` method. For example: `$('#myElement').text('New text');`.

## 12. What is the purpose of the `.html()` method in jQuery?

**Answer:** The `.html()` method is used to get or set the HTML content of an element. It allows you to insert or retrieve HTML content within an element.

## 13. How can you add a class to an element using jQuery?

**Answer:** You can add a class to an element using the `.addClass('className')` method, where "className" is the name of the class you want to add.

## 14. Explain the `.attr()` method in jQuery.

**Answer:** The `.attr()` method allows you to get or set attributes of HTML elements. It is often used to change attributes like `src`, `href`, or custom data attributes.

## 15. How do you select all immediate child elements of a parent element in jQuery?

**Answer:** You can select all immediate child elements of a parent element using the `.children()` method. For example: `$('#parent').children()` selects all immediate child elements of an element with the ID "parent."

## 16. What does the `.each()` method do in jQuery?

**Answer:** The `.each()` method iterates over a set of selected elements and performs a function on each element. It is useful for handling multiple elements individually.

## 17. How do you stop an animation in progress in jQuery?

**Answer:** You can stop an animation in progress using the `.stop()` method. This allows you to halt animations and prevent queued animations from executing.

## 18. What is the purpose of the `.filter()` method in jQuery?

**Answer:** The `.filter()` method is used to narrow down a set of selected elements based on specific criteria. It returns only the elements that match the specified filter.

## 19. How can you attach a custom data to an element using jQuery?

**Answer:** You can attach custom data to an element using the `.data()` method in jQuery. It allows you to associate arbitrary data with DOM elements.

## 20. What is event delegation in jQuery?

**Answer:** Event delegation in jQuery involves attaching a single event handler to a parent element and allowing it to manage events for its child elements. This is useful for handling events efficiently, especially when dealing with dynamically added elements.
