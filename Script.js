const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', function (req, res) {
    res.render("index");
});

app.get('/contact', function (req, res) {
    res.render("contact" {leakage:pipeline});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});