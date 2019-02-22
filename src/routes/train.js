import { train, getTraining } from "../services/training";

export default server => {
  server.post(`/train`, trainPost);
  server.get(`/train`, trainGet);
};

export function trainPost(req, res) {
  const errors = validate(req.body);

  if (errors.length) {
    console.log(`ERRORS: ${JSON.stringify(errors)}`);
    res.status(400).json(errors);
    return;
  }

  train(req.body.document, req.body.classification, req.body.belongs)
    .then(() => {
      res.status(201).end();
    })
    .catch(e => {
      console.log(`ERROR: ${e}`);
      res
        .status(500)
        .send(`A server error occurred when training. Please resubmit.`);
    });
}

export function trainGet(req, res) {
  getTraining(req.query).then(rows => res.json(rows));
}

function validate(reqBody) {
  const { document, classification, belongs } = reqBody;

  const errors = [
    ...validateDocument(document),
    ...validateClassification(classification),
    ...validateBelongs(belongs)
  ].filter(x => x);

  return errors;
}

function validateDocument(document) {
  const errors = [];

  if (typeof document === "undefined" || document === null) {
    errors.push("document is required");
    return errors;
  }

  if (document.length === 0) {
    errors.push("document can not be empty");
  }

  return errors;
}

function validateClassification(classification) {
  const errors = [];

  if (typeof classification === "undefined" || classification === null) {
    errors.push("classification is required");
    return errors;
  }

  if (classification.length === 0) {
    errors.push("classification can not be empty");
  }

  const pattern = /^[a-zA-Z0-9_-]*$/;

  if (!classification.match(pattern)) {
    errors.push(
      `classification ${classification} doesnt match pattern: ${pattern}`
    );
  }

  return errors;
}

function validateBelongs(belongs) {
  const errors = [];

  if (typeof belongs !== "boolean") {
    errors.push("belongs is required and must be a boolean");
  }

  return errors;
}
