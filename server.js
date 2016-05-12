var express = require("express");
var bodyParser = require("body-parser");
// session = require("express-session");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/taskman');
var port = 3000;

var taskCtrl = require('./controllers/taskBackendController.js');
var userCtrl = require('./controllers/userBackendController.js');
var projectCtrl = require('./controllers/projectBackendController.js');
var teamCtrl = require('./controllers/teamBackendController.js');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

//tasks
app.get('/api/tasks', taskCtrl.Read);
app.get('/api/tasks/:id', taskCtrl.Find);
app.post('/api/tasks', taskCtrl.Create);
app.delete('/api/tasks/:id', taskCtrl.Delete);
// app.put('/api/tasks/:id', taskCtrl.Update);

//Users
app.get('/api/users/me', userCtrl.ReadMe);
app.get('/api/users/:id', userCtrl.Find);
app.post('/api/users', userCtrl.Create);
app.put('/api/users/:id', userCtrl.Update);

//Projects
app.post('/api/projects', projectCtrl.Create);
app.get('/api/projects/:id', projectCtrl.Find);
app.put('/api/projects/:id', projectCtrl.Update);
app.delete('/api/projects/:id', projectCtrl.Delete);

//Team
app.post("/api/team", teamCtrl.Create);
app.put("/api/team/:id", teamCtrl.Update);



app.listen(port, function(){
    console.log("Hey Listen! on: " + port);
});
