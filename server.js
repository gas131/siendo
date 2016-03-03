'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const server = new Hapi.Server();

server.register(Inert, (error) => {
	if(error)
		throw error;
})
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.file('./home.html')
    }
});

server.route({
    method: 'GET',
    path: '/js/build/bundle.js',
    handler: function (request, reply) {
        reply.file('./js/build/bundle.js')
    }
});

server.route({
  method: 'GET',
  path: '/resources/{path*}',
  handler: function(request, reply) {
      reply.file(request.url.path);
  }
 }); 

var options = {
    opsInterval: 1000,
    filter:{
        access_token: 'censor'
    },
    reporters: [{
        reporter: require('good-console'),
        events: { log: '*', response: '*' }
    }, {
        reporter: require('good-file'),
        events: { ops: '*' },
        config: './logs/log.txt'
    }]
};


server.register({
    register: require('good'),
    options: options
}, function (err) {

    if (err) {
        console.error(err);
    }
    else {
        server.start(function () {
            console.info('Server started at ' + server.info.uri);
        });
    }
});