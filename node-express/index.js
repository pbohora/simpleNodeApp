const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dishRouter = require("./routes/dishRouter");

const hostname = "localhost";
const port = 3002;

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use("/dishes", dishRouter);

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is express server.</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`The server is running at: http//${hostname}:${port}`);
});
