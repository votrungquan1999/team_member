var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/profileRoutes');

var app = express();

var port = 8000; //switch to 8000

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(port);
console.log('listening to port ' + port);