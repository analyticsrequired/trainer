import express from "express";
import expressWinston from "express-winston";
import root from "./routes/root";
import auth from "./routes/auth";
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
auth(server);
train(server);

server.use(function(err, req, res, next) {
  if (err.code === "permission_denied") {
    res.status(403).end();
  }
});

export default server;
