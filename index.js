'use strict';

const Hapi = require('hapi');
const pkg = require('./package.json');

const server = new Hapi.Server();
server.connection({ port: 80, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply(`v${pkg.version} says: Hello, world!`);
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply(`v${pkg.version} says: Hello,  ${encodeURIComponent(request.params.name)}!`);
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
