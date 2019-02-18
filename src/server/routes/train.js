import { train, getTraining } from "../../services/training";

export default server => {
  server.post(`/train`, (req, res) => {
    const { document, classification, belongs } = req.body;
    train(document, classification, belongs).then(() => {
      res.status(201).end();
    });
  });

  server.get(`/train`, (req, res) => {
    getTraining(req.query).then(rows => {
      res.json(rows);
    });
  });
};
