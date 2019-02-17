import server from "./server";

const port = 3000;

server.get(`/`, (_, res) => {
  res.send("Analytics Required Trainer Service");
});

server.listen(port, () => console.log(`Trainer started on port: ${port}!`));
