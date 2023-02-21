
//create a server which will respond to / , /about-us, contact-us:-
//http://localhost:3000 ->index.html
//http://localhost:3000/about-us ->about-us.html
//http://localhost:3000/contact-us ->contact-us.html

const http = require("http");
const fs = require("fs");
const url=require("url");
const hostName = "127.0.0.1"; //localHost
const port = 3000;

console.log("Preparing server...");

//create the server.

const server = http.createServer((req, res) => {
  //handle/any request/response will be processed here.
  
  console.log("---------URL :- " + req.url);
  var q=url.parse(req.url,true);
  console.log("host :- "+ q.host); //returns 'localhost:8080'
  console.log("pathName:- "+q.pathname); //returns '/default.htm'
  console.log("search:- "+ q.search); //returns '?year=2017&month=february'


let fileName ="index.html";  //by default this is root.

  if(q.pathname === "/") {
    fileName="index.html";     //"/" called routs.
  }
  else if(q.pathname === "/AppWether.js"){
    fileName="AppWether.js";
  }
  
  fs.readFile(fileName, function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });


  
  //  res.statusCode=200;
  //  res.setHeader("Content-Type","text/html");
  //  res.end("Hello,<h1>Cdac</h1> I am <b>chetan Nagmoti</b>.")
});

//server started here with listen method.

server.listen(port, hostName, () => {
  console.log("Server is running at " + hostName + " port:" + port);
});

//server is always closed with ctrl+c.
