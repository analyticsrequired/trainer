import server from "./server";

const port = process.env.NODE_ENV === "production" ? process.env.PORT : 3000;

server.listen(port, () => console.log(`Trainer started on port: ${port}!`));
