```javascript
<div class="bg-gradient-to-r from-blue-500 to-purple-500 ...">
```
This code snippet uses Tailwind's gradient utility classes.  However, if the element containing the gradient is too small, the gradient might not be visible or appear correctly.  This is because the gradient is defined across the entire width of the element, and if the element is too narrow, the gradient's transition might be compressed beyond visual recognition.