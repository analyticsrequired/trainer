import server from "./server/index";

const port = 3000;

server.listen(port, () => console.log(`Trainer started on port: ${port}!`));
