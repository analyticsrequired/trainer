import express from "express";
import morgan from "morgan";

const server = express();

server.use(morgan("tiny"));

server.get(`/`, (_, res) => {
  res.send("Analytics Required Trainer Service");
});

export default server;
