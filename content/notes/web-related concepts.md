---
date: 2023-12-10
last updated: 2023-12-14
tags:
  - theodinproject
  - "#webdev"
source: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines
---
# Parts of the web

<mark style="background: #FFF3A3A6;">WEB PAGE</mark>: a document that can be displayed in a browser, accessible by a unique address
- Written in HTML
- Employs the use of style information, scripts, and media with **component files**.
	- Style information is controlled by CSS
	- Scripts add interactivity to the page
	- Media is provided through images, sounds, and videos
- Code files include HTML, CSS, and JavaScript
- Assets include all other documents and media that help make up a website other than its code file components

<mark style="background: #FFF3A3A6;">WEBSITE</mark>: a collection of pages grouped together that are related to each other in some way by subject
- The web pages are linked together by subject as well as domain name
	- Each page has its own unique link that directs to the page itself *within* the website
- A website doesn’t necessarily have to have multiple pages – **it’s possible to have a website with one page only that updates as needed**

<mark style="background: #FFF3A3A6;">WEB SERVER</mark>: a computer that hosts one or more websites on the [[internet vs web#What is the internet?|Internet]] 
- <mark style="background: #FFF3A3A6;">HOSTING</mark>: all files are available in that one computer in order for a website to work properly

<mark style="background: #FFF3A3A6;">SEARCH ENGINE</mark>: a web service that lets you find other web pages
- There are different types of search engines controlled by different companies. These include:
	- Google
	- Bing
	- Yahoo
	- DuckDuckGo

> [!example] The library analogy
> Think of the different parts of the web as if it’s own kind of world. For example:
> 
> - Web page → a single page in a book
> - Website → a book
> - Web server → a library filled with books
> - Search engine → a kind of navigation that can direct you to the library
> 
> The  [source](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines) also uses a kind of library analogy, but in this case I prefer this analogy more since visualizing webpages as a single page instead of a book makes more sense to me.

<mark style="background: #FFF3A3A6;">CLIENTS</mark>: computers connected to the Internet, used by a typical web user, that requests information to a server in order to access a website

# How are websites accessed?

## Terms

<mark style="background: #FFF3A3A6;">INTERNET CONNECTION</mark>: allows the user to send and receive data on the web

<mark style="background: #FFF3A3A6;">PROTOCOL</mark>: a system of rules that define how data is exchanged between computers; the devices **must** agree on the format of the data that is being exchanged
- Types include:
	- <mark style="background: #FFF3A3A6;">TRANSMISSION CONTROL PROTOCOL (TCP) / INTERNET PROTOCOL (IP):</mark> communication protocols that define how data travels across the internet
		- Example → a car/bike that you use to get to the store; aka the *method of travel* used to get to a destination
	- <mark style="background: #FFF3A3A6;">HYPERTEXT TRANSFER PROTOCOL (HTTP)</mark>: a protocol that defines a language for clients and servers to speak to each other
		- [[hypertext|Notes on hypertext]]

<mark style="background: #FFF3A3A6;">DOMAIN NAME SYSTEM (DNS)</mark>: kind of like an address book for websites; used by the browser to find a specific website’s IP address depending on the domain name typed in
- The browser must find out what server the domain is in to send HTTP messages to the right place
- More notes on domain names:
	- [[internet vs web#^62944a|internet vs web → domain names]]
	- [[domain names and dns requests]]
## Order of connection to a website
1. Type in address of the website you want to visit (*you* as in the *client*)
2. Browser finds real address of server that the website lives on via the DNS server
3. Browser sends a HTTP request message to the server via TCP/IP
4. Server approves the client request via “200 OK” message
5. Client is then sent over a copy of the website via TCP/IP as data packets, or data chunks
6. Browser reassembles the data chunks into a complete web page

> **client**: hey girlie can i see your website please pretty please
> 
> **server**: ok fine but you can only have a copy of it. and i will only send it over to you in bits and pieces. and you have to reassemble them back together like a horrible puzzle
> 
> **client**: oh hell YEAH

- **Why is data sent in packets rather than whole files?**
	- Data can be dropped or corrupted, so smaller chunks are easier to replace compared to replacing entire files
	- Sending data is much faster in bite-sized portions. Think of it like chucking small rocks at something instead of a huge boulder
		- These bite-sized portions can also go through different paths of their own at the same time, like your GPS rerouting you to side streets because it’s rush hour and going through the freeway is going to be a clogged nightmare

# Order of component file parsing

> [!faq] What is parsing?
> Parsing is an action in which the [[web-related concepts#^5fafd9|component files]] are loaded in the correct order as the browser loads the web page sent by the server.

1. HTML is parsed first. 
2. The browser then finds any ```<link>``` references linking to CSS stylesheets and ```<script>``` references linking to JavaScript files.
3. Using the reference found, the browser parses the appropriate CSS and JavaScript files.
4. *“The browser generates an in-memory [[document object model|Document Object Model (DOM)]] tree from the parsed HTML, generates an in-memory <mark style="background: #FFB86CA6;">CSSOM</mark> structure from the parsed CSS, and <mark style="background: #FFB86CA6;">compiles and executes</mark> the parsed JavaScript.“*
	- Hey um what does this mean
1. Using the information from the **DOM** and **CSSOM** trees, the browser rebuilds the page and presents it on the screen to the user.

> [!example] Another fun analogy → parsing
> Imagine that, in the server, the component files are like people in a line with an assigned number from 1 to 5. The people assigned those numbers then get  on the bus but they can sit wherever they like. When they get to their destination, they exit the bus and enter through the gates of their destination in the same order that they were in according to their assigned number. In this case, it seems like multiple items are parsed all at once according to what parts of the CSS and JavaScript the HTML file references in its code.

# To do
- [x] Understand **DOM** and **CSSOM**
# External links and sources
- [What is the difference between webpage, website, web server, and search engine? - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines)
- [How the web works - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works#clients_and_servers)