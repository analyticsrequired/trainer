export default server => {
  server.post(`/train`, (_, res) => {
    res.status(201).end();
  });
};
