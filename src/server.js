import express from "express";
import expressWinston from "express-winston";
import root from "./routes/root";
import train from "./routes/train";
import logger from "./logger";

const server = express();

server.use(express.json());
server.use(
  express.urlencoded({
    extended: true
  })
);

expressWinston.requestWhitelist.push("body");

server.use(
  expressWinston.logger({
    winstonInstance: logger,
    meta: true,
    msg: "HTTP {{req.method}} {{req.url}}",
    expressFormat: true,
    colorize: false
  })
);

// Routes

root(server);
train(server);

export default server;
