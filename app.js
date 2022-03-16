const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

app.use(cors());
app.use(express.text());
app.use(express.raw({ type: "application/octet-stream" }));
app.use(express.json());

let reqCount = 0;

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

app.post("/", (req, res) => {
  setTimeout(() => {
    reqCount++;

    console.log("headers: ", req.headers);
    console.log("body: ", JSON.stringify(req.body, null, 2));
    console.log("req count: ", reqCount);
    res.send("ok");
  }, 1000);
});

app.post("/engine", (req, res) => {
  setTimeout(() => {
    reqCount++;

    console.log("headers: ", req.headers);
    console.log("body: ", JSON.stringify(req.body, null, 2));
    console.log("req count: ", reqCount);
    res.send("ok");
  }, 1000);
});

app.get("/", (req, res) => {
  setTimeout(() => {
    console.log("headers: ", req.headers);
    console.log("body: ", JSON.stringify(req.body, null, 2));
    res.send("GET ok");
  }, 1000);
});

app.get("/notimeout", (req, res) => {
  console.log("headers: ", req.headers);
  console.log("body: ", JSON.stringify(req.body, null, 2));
  res.send("GET ok");
});

app.post("/notimeout", (req, res) => {
  console.log("headers: ", req.headers);
  console.log("body: ", JSON.stringify(req.body, null, 2));
  console.log("req count: ", reqCount);
  res.send("ok");
});

module.exports = app;
