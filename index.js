const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
  const queryData = url.parse(request.url, true).query;
  response.writeHead(200, { "Content-Type": "text/html" });

  if (queryData.name) {
    // user told us their name in the GET request, ex: http://host:8000/?name=Tom

    response.end("Hello " + queryData.name);
  } else {
    response.end("Hello World call url/?name='yourname'\n");
  }
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
