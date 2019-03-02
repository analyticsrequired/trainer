import server from "./server";

const port = process.env.NODE_ENV ? 80 : 3000;

server.listen(port, () => console.log(`Trainer started on port: ${port}!`));
