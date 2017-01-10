'use strict';

const Server = require('./server');

const server = new Server();

server.boot();

process.on('SIGINT', server.halt);
