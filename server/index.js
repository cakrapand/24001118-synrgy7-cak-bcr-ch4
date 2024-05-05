const http = require("http");
const { PORT = 8000 } = process.env;

const fs = require("fs");
const path = require("path");
const PUBLIC_DIRECTORY = path.join(__dirname, "../public");

function getStaticFile(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
  return fs.readFileSync(htmlFilePath);
}

function onRequest(req, res) {
  if (req.url == "/") {
    res.writeHead(200);
    res.end(getStaticFile("index.html"));
  } else if (req.url == "/example") {
    res.writeHead(200);
    res.end(getStaticFile("index.example.html"));
  } else if (req.url == "/cars" || req.url.includes("cars")) {
    res.writeHead(200);
    res.end(getStaticFile("cars.html"));
  } else {
    if (req.url.includes(".css")) {
      res.writeHead(200);
      res.end(getStaticFile(req.url));
    } else if (req.url.includes(".js")) {
      res.writeHead(200);
      res.end(getStaticFile(req.url));
    } else if (req.url.includes(".jpg")) {
      res.setHeader("Content-Type", "image/jpeg");
      res.writeHead(200);
      res.end(getStaticFile(req.url));
    } else if (req.url.includes(".png")) {
      res.setHeader("Content-Type", "image/png");
      res.writeHead(200);
      res.end(getStaticFile(req.url));
    } else if (req.url.includes(".svg")) {
      res.setHeader("Content-Type", "image/svg+xml");
      res.writeHead(200);
      res.end(getStaticFile(req.url));
    } else {
      res.writeHead(404);
      res.end(getStaticFile("404.html"));
    }
  }
}

const server = http.createServer(onRequest);

server.listen(PORT, () => {
  console.log("Server sudah berjalan, silahkan buka http://0.0.0.0:%d", PORT);
});
