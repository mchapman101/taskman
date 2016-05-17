var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/taskman');
var port = 3000;

var config = require('./config');

// Controllers //
var taskCtrl = require('./controllers/taskBackendController.js');
var userCtrl = require('./controllers/userBackendController.js');
var projectCtrl = require('./controllers/projectBackendController.js');
var teamCtrl = require('./controllers/teamBackendController.js');

// Services //
var passport = require('./services/passport');

// Policies //
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};

// Express //
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname+'./../public'));

app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave:false
}));

app.use(passport.initialize());
app.use(passport.session());

//tasks
app.get('/api/tasks', taskCtrl.Read);
app.get('/api/tasks/:id', taskCtrl.Find);
app.post('/api/tasks', taskCtrl.Create);
app.delete('/api/tasks/:id', taskCtrl.Delete);
app.put('/api/tasks/:id', taskCtrl.Update);

//Users
app.post('/api/users', userCtrl.Create);
app.get('/api/users/me', isAuthed, userCtrl.ReadMe);
app.get('/api/users/:id', userCtrl.Find);
app.put('/api/users/:id',isAuthed, userCtrl.Update);
app.post('/api/users/login', passport.authenticate('local', {successRedirect: "/api/users/me"}));
app.get('/api/logout', function(req, res, next){
  console.log("here's a hit!!!");
  req.logout();
  return res.status(200).send('Logged Out');
});

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
