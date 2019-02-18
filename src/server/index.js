import express from "express";
import morgan from "morgan";
import root from "./routes/root";
import train from "./routes/train";

const server = express();

server.use(morgan("tiny"));

// Routes

root(server);
train(server);

export default server;
