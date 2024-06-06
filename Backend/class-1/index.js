const http = require("http");
const fs = require("fs");
const os = require("os");

// console.log(http);
// console.log(fs);

// Create a server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hey welcome to my server");
  }
});

// Run/Start the server
const port = 1234;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
