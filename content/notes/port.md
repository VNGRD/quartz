---
created: 2023-12-14
last updated: 2023-12-14
tags:
  - glossary
  - webdev
source: https://developer.mozilla.org/en-US/docs/Glossary/Port
---

<mark style="background: #FFF3A3A6;">Ports are communication endpoints that directs data to a specific service. Each port has its own designated number that act as a gate used to access resources and services.</mark>

- It is **not** a kind of physical hardware present in a computer
- Below 1024, each port is associated by default with a specific [[web-related concepts#Terms|protocol]].
	- For example, HTTP listens on port 80 while HTTPS listens on port 443.
- Services, such as email/web/file/print services, can all run at the same time in one computer and share the same IP address.
	- Ports allow each individual service to be kept apart despite having the same IP address.
		- **Think of an IP address as an apartment building and each port is the different apartments.**

> [!tip] As part of the apartment analogy…
> If you want to send a letter to someone that lives in a different apartment complex, they will obviously have a different address (IP address) and apartment number (port). The same idea applies here.

# External links and sources
- [Port - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Port)
- [Port (computer networking) - Wikipedia](https://en.wikipedia.org/wiki/Port_(computer_networking))
- [What is a URL? - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#authority)
- A pretty good explanation of ports in an analogy: [ELI5: What is a network port?](https://www.reddit.com/r/explainlikeimfive/comments/zx7osk/comment/j1yuiea/?utm_source=share&utm_medium=web2x&context=3)
# Related
- [[uniform resource locators]]
- [[internet vs web#Communication terminology]]