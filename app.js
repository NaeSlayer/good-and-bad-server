var http = require("http");
var PORTa = 7000;
var PORTb = 7500;

function handleRequestA(request, response) {
    response.end("You are amazing!");

}

function handleRequestB(request, response) {
    response.end("You are awful!");

}
var serverA = http.createServer(handleRequestA);
var serverB = http.createServer(handleRequestB);

serverA.listen(PORTa, function () {
    console.log("Server is listening on: http://localhost:%s", PORTa);
});

serverB.listen(PORTb, function () {
    console.log("Server is listening on: http://localhost:%s", PORTb);
});