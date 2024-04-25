// ! <|-------<< accessing nodes >>---------|>
console.log((document.body.childNodes[2].nodeValue = "Changed node value"));

// & In JavaScript, a node is any object in the Document Object Model (DOM). This includes elements, text, comments, and processing instructions. Elements are a specific type of node that represent HTML or XML elements.

// ^Nodes are organized in a tree-like structure, with the document node at the top and all other nodes branching off from it. Each node has a parent node, a list of child nodes, and a next sibling and previous sibling.

// *Elements have all the properties and methods of a node, but they also have additional properties and methods that are specific to elements. For example, elements have a tagName property that returns the name of the element, and an innerHTML property that returns the HTML content of the element.