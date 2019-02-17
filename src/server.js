import express from "express";

const server = express();

server.get(`/`, (_, res) => {
  res.send("Analytics Required Trainer Service");
});

export default server;
