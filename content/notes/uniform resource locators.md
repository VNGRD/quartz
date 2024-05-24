---
date: 2023-12-14
last updated: 2023-12-14
tags:
  - webdev/glossary
source: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL
---

# What is a uniform resource locator (URL)?
<mark style="background: #FFF3A3A6;">A uniform resource locator is the unique address of anything published on the [[internet vs web#What is the web?|web]].</mark>
- Commonly referred to as the URL
- Doesn’t necessarily have to be a webpage or website – URLs can also point to:
	- HTML pages
	- CSS documents
	- Images
	- *Anything* that has been published on the web regardless if it’s a website or not.

## Anatomy of a URL
**URL examples:**
```
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn#where_to_start
https://developer.mozilla.org/en-US/search?q=URL
```

- Composed of mandatory and optional parts:
	- **Scheme** → usually HTTPS / HTTP
		- <mark style="background: #ADCCFFA6;">HTTP is an unsecure version of HTTPS</mark>
		- Doesn’t necessarily have to be HTTPS; browsers may have their own special types
			- Example → Firefox can use “about” as a scheme → “about:about” leads to a page that goes to other pages that use the “about” scheme accessed by Firefox
	- **Authority** → Includes the [[domain names and dns requests|Domain name]] and the [[port]], separated by a colon. The authority is separated from the scheme with a “://”.
		- An IP address may be in place of a domain name.
		- [[port|Ports]] are usually omitted if standard ports are being used.
		- Example → ```developer.mozilla.org```
	- **Path to a file/resource** → Just like a path to a file in a computer, path to resources use the same kind of scheme (not like the scheme above)
		- Example → ```/en-US/docs/Learn```
	- **Parameters** → Usually listed as a key with a value. Each key is separated by a “?”
		- Specific to their own web server with their own rules
		- Example → ```?key1=value1&key2=value2``` → ```search?q=URL```
	- **Anchor** → Points to a specific heading in the document. Without the anchor in the URL, the page loaded goes to the topmost of the page. If there is an anchor specified, the webpage will go to the anchor instead.
		- Example → 
			- https://developer.mozilla.org/en-US/docs/Learn vs…
			- https://developer.mozilla.org/en-US/docs/Learn#where_to_start takes you to the portion of the page that says “Where to start,” as opposed to the topmost part of the page.

## Absolute vs relative vs semantic URLs


# External links and sources
- [What is a URL? - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#authority)

# Related
- [[internet vs web#Communication terminology]]
- [[web-related concepts]]