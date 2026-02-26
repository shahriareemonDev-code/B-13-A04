 1. getElementById() → Selects one element by ID.

   getElementsByClassName() → Selects multiple elements by class.

   querySelector() → Selects first matching CSS selector.

   querySelectorAll() → Selects all matching CSS selectors.

2. let p = document.createElement("p");
  p.innerText = "Hello";
  document.body.appendChild(p);

3. When an event happens on a child element, it moves up to parent elements.

4. Add event listener to a parent element instead of many children.
   It is very Useful because it saves code and works for dynamic elements.
   
5. preventDefault() → Stops default browser action

   stopPropagation() → Stops event from going to parent
