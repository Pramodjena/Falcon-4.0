const http = require("http");
const fs = require("fs");
const os = require("os");

// console.log(http);
// console.log(fs);

// Create a server
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Hey welcome to my server");
//   } else if (req.url === "/about") {
//     res.end("Hey welcome to my about page");
//   } else if (req.url === "/contact") {
//     res.end("Hey welcome to my contact page");
//   } else {
//     res.end("404 page not found");
//   }
// });

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Hey welcome to my server");
      break;
    case "/contact":
      res.end("Hey welcome to my contact page");
      break;
    case "/about":
      res.end("Hey welcome to my about page");
      break;

    default:
      res.end("404 page not found");
      break;
  }
});

// Run/Start the server
const port = 1234;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
