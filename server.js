const express = require("express");
const server = express();
const helmet = require("helmet");

const ProjectRouter = require("./data/projectRouter.js");
const ActionRouter = require("./data/actionRouter.js");

server.use(express.json());
server.use(helmet());
server.use("/api/projects", ProjectRouter);
server.use("/api/actions", ActionRouter);

module.exports = server;
