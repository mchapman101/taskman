var express = require("express");
var bodyParser = require("body-parser");
// session = require("express-session");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/taskman');
var port = 3000;
var taskCtrl = require('./controllers/taskBackendController.js');

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));

//tasks
app.get('/api/tasks', taskCtrl.Read);
app.get('/api/tasks/:id', taskCtrl.Find);
app.post('/api/tasks', taskCtrl.Create);
app.delete('/api/tasks/:id', taskCtrl.Delete);


app.listen(port, function(){
    console.log("Hey Listen! on: " + port);
});
