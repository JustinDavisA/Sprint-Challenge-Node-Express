const express = require('express');
const helmet = require('helmet');

const actionsRouter = require('./projects/projects-router.js');
const projectsRouter = require('./actions/actions-router.js');

const server = express();

server.use(express.json());
server.use(helmet())
server.use(upperCaser)

server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);

module.exports = server;