import express from "express";
import morgan from "morgan";
import root from "./routes/root";

const server = express();

server.use(morgan("tiny"));

// Routes

root(server);

export default server;
