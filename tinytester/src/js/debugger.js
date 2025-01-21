var debug = require('debug')('http')
  , http = require('http')
  , name = "Dan's example smart app";

// fake app

debug('booting %o', name);

http.createServer(function(req, res){
  debug(req.method + ' ' + req.url);
  res.end('hello\n');
}).listen(3000, function(){
  debug('listening');
});

// fake worker of some kind

require('./worker');

// require the core node events module
var EventEmitter = require('events').EventEmitter

//create a new event emitter
var emitter = new EventEmitter

// set up a listener for the event
emitter.on('pizza', function (message) {
  console.log(message)
})

// emit an event
emitter.emit('pizza', 'pizza is extremely yummy')