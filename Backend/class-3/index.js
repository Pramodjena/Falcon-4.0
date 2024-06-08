// import modules
const express = require("express");
const fs = require("fs");
require("dotenv").config();

// setup server
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Hello from server" });
  // res.end("Bye from server");
});

app.get("/service", (req, res) => {
  res.json({ msg: "Hello from service" });
});

app.get("/write", (req, res) => {
  const myName = "Pramod Kumar Jena";
  fs.writeFileSync("logs.txt", myName);
  res.json({ msg: "Successfully created" });
});

app.get("/read", (req, res) => {
  const data = fs.readFileSync("./logs.txt", "utf-8");
  res.send(data);
});

app.get("/append", (req, res) => {
  const sentence = "I am a SDE-I";
  fs.appendFileSync("logs.txt", sentence);
  res.json({ msg: "Successfully created" });
});

// start server
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
