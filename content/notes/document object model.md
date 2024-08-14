---
date: 2023-12-12
tags:
  - webdev/glossary
---

# What is a document object model?
Outlines a document, like **HTML** or **XML**, into a kind of tree with its different elements and attributes as their own “leaves”
- aka “DOM” for short
- The “leaves” are referred to as **nodes**. Therefore, each element in the tree is a node.
	- Types of nodes for HTML DOM:
		1. Document node
		2. Element nodes
		3. Attribute nodes
		4. Text nodes
		5. Comment nodes
	- These kinds of nodes match with its matching element in the HTML file.
	- The topmost node of the tree is the document node.
- Browsers create DOMs when loading web pages into the client’s screen, but the DOM itself doesn’t have to be a structure of a tree.
	- After receiving the OK from the server and sent a copy of the website into the client, the browser “downloads the HTML into local memory and automatically parses it to display the page on screen” (1)

## 🔍 Elements as nodes (1)
HTML document structure:
```
<html>
	<head>
		<title>My Website</title>
	</head>
	<body>
		<h1>Welcome</h1>
		<p>This is my website.</p>
		<a href="https://example.com">Link</a>
	</body>
</html>
```

DOM tree structure:
```
- Document (root)
	- html
		- head
			- title
				- "My website"
		- body
			- h1
				- "Welcome"
			- p
				- "This is my website."
			- a
				- href: "https://example.com"
				- "Link"
```

> *The DOM tree structure example kind of makes it look like a regular notes outline…*

## In relation to JavaScript
- DOM trees allow web pages to be dynamic due to JavaScript capabilities
	- These trees act “as an interface between JavaScript and the document itself” (1) → *how?*
		- <mark style="background: #FFB86CA6;">What does it mean to be an interface?</mark>
			- **the means by which interaction or communication is achieved**
- JavaScript can interactively change a webpage by (1):
	1. Adding, changing, and removing any HTML elements and attributes
	2. Change any CSS styles
	3. React to all existing events
	4. Create new events

# External links and sources
1. [Document Object Model - Wikipedia](https://en.wikipedia.org/wiki/Document_Object_Model)
2. [Interface Definition & Meaning - Merriam-Webster](https://www.merriam-webster.com/dictionary/interface)
3. [Introduction to the DOM - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
# Related
- [[web-related concepts]]