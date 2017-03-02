var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.get('/', function(req, res) {
    res.send('Hello World!');
    console.log(res);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(8878)
