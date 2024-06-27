/**
 * Question: What is the same-origin policy in the context of AJAX requests, and how can you work around it?
 * 
 * ANS -: Same-origin policy in the context of AJAX requests refers to the security measure that restricts how a web page or script can interact with resources from a different origin (domain/protocol/port) than the one that served the web page. This policy is in place to prevent malicious scripts from accessing sensitive data from other origins.
 * 
 * To work around the same-origin policy in AJAX requests, you can use techniques like JSONP (JSON with Padding), CORS (Cross-Origin Resource Sharing), or server-side proxies. JSONP involves dynamically adding a script tag to the DOM to fetch data from a different domain. CORS allows servers to specify who can access their resources. Server-side proxies involve making requests to the same domain as the web page, and then the server forwards the request to the intended destination.
 */