const fs = require('fs');
var http = require('http');
//create a server object:
http.createServer(function(req, res) {
    console.log(req.url);
    const arr = req.url.split('?'); // /sendEmail?to=abc&from=xyz
    var path = arr[0]
    var queryString = arr[1];
    console.log("path===>", path, "queryString ==>", queryString);
    let body = ""
    console.log("req.method==>", req.method)
    if (req.method == "POST") {
        req.on("data", function(chunk) {
            body = body + chunk;
        });
        req.on("end", function() {
            console.log("body==>", body);
            if (path == "/sendEmail") {
                queryString = body;
                const queryParams = queryString.split("&");
                console.log("queryParams==>", queryParams);
                const to = queryParams[0].split("=");
                const from = queryParams[1].split("=");
                console.log(to[1], from[1]);
                // send email function..
                res.write("email send"); //write a response to the client
                res.end(); //end the response
            }
        })
    }
    if (path == "/") {
        fs.readFile("home.html", "utf-8", function(err, data) {
            if (err) { throw err; }
            res.write(data); //write a response to the client
            res.end();
        })
    } else
    if (path == "/emai.html") {
        fs.readFile("emai.html", "utf-8", function(err, data) {
            if (err) { throw err; }
            res.write(data); //write a response to the client
            res.end();
        })
    }

}).listen(8080); //the server object listens on port 8080