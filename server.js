const path = require("path");
const express = require("express");
const app = express();

//serve static files
app.use(express.static(__dirname + "/dist/frontend"));

//send all requests to index.html
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/frontend/index.html"));
});

// default heroku port
app.listen(process.env.PORT || 5000);