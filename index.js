const fs = require("fs");
const express = require("express");
const app = express();

const port = process.argv[2];

app.use(express.static("."));
app.use(express.json());

app.get("/", function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(fs.readFileSync("index.html").toString());
})

const ids = [999];

app.post("/", function (req, res) {
    console.log(req.body);
    if (req.body.pin === "231203") {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({status: true, id: 999}));
    } else {
        res.writeHead(400, {"Content-Type": "application/json"});
        res.end(JSON.stringify({status: false, id: -1}));
    };
});

app.get("/nextpage", function (req, res) {
    if (req.params.id in ids) {
        ids.filter(v => v != req.params.pin);
        res.end("Successfully authed");
    }
    res.redirect("/");
})

app.listen(port, function () { console.log(`Running on port ${port}`) });