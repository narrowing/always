var express = require('express'),
    routes = require('./routes'),
  	mongoose = require('mongoose'),
    engines = require('consolidate');
	
exports.startServer = function(config, callback) {

  var port = process.env.PORT || config.server.port;


  var app = express();
  var server = app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);
  });

  app.configure(function() {
    app.set('port', port);
    app.set('views', config.server.views.path);
    app.engine(config.server.views.extension, engines[config.server.views.compileWith]);
    app.set('view engine', config.server.views.extension);
    app.use(express.favicon());
    app.use(express.urlencoded());
    app.use(express.json());
    app.use(express.methodOverride());
    app.use(express.compress());
    app.use(config.server.base, app.router);
    app.use(express.static(config.watch.compiledDir));
  });

  app.configure('development', function() {
    app.use(express.errorHandler());
  });

  app.get('/', routes.index(config));
	
	// var models = require('./models'),
	// 	md5 = require('MD5');

	//routes list:
	//routes/.initialize(app);
	
	// var home = require('../controllers/home'),
	//     contacts = require('../controllers/contacts');
	 
	// module.exports.initialize = function(app) {
	//     app.get('/', home.index);
	//     app.get('/api/contacts', contacts.index);
	//     app.get('/api/contacts/:id', contacts.getById);
	//     app.post('/api/contacts', contacts.add);
	//     app.put('/api/contacts', contacts.update);
	// };
	
	// var MongoClient = require('mongodb').MongoClient;
	// 
	// MongoClient.connect(config.mongo.url, function(err, db) {
	// 	if(err) throw err;
	// 		thoughts = db.collection(config.mongo.collections.thoughts);
	// });
 
      // check if the db is empty, if so seed it with some contacts:
      //seeder.check();

  callback(server);
};



