import { trainPost } from "./train";

describe("post controller", () => {
  let req;

  let res;

  beforeEach(() => {
    req = {
      body: {
        document: "Test document",
        classification: "test-classification",
        belongs: true
      }
    };

    res = {
      status: jest.fn(() => res),
      json: jest.fn(() => res)
    };
  });

  describe("validation", () => {
    describe("document", () => {
      describe("when undefined", () => {
        beforeEach(() => {
          req.body.document = null;
        });

        it("should return error", () => {
          trainPost(req, res);
          expect(res.status).toBeCalledWith(400);
          expect(res.json).toBeCalledWith(["document is required"]);
        });
      });

      describe("when empty", () => {
        beforeEach(() => {
          req.body.document = "";
        });

        it("should return error", () => {
          trainPost(req, res);
          expect(res.status).toBeCalledWith(400);
          expect(res.json).toBeCalledWith(["document can not be empty"]);
        });
      });
    });

    describe("classification", () => {
      describe("when undefined", () => {
        beforeEach(() => {
          req.body.classification = null;
        });

        it("should return error", () => {
          trainPost(req, res);
          expect(res.status).toBeCalledWith(400);
          expect(res.json).toBeCalledWith(["classification is required"]);
        });
      });

      describe("when empty", () => {
        beforeEach(() => {
          req.body.classification = "";
        });

        it("should return error", () => {
          trainPost(req, res);
          expect(res.status).toBeCalledWith(400);
          expect(res.json).toBeCalledWith(["classification can not be empty"]);
        });
      });

      describe("when invalid pattern", () => {
        beforeEach(() => {
          req.body.classification = "foo!bar";
        });

        it("should return error", () => {
          trainPost(req, res);
          expect(res.status).toBeCalledWith(400);
          expect(res.json).toBeCalledWith([
            "classification foo!bar doesnt match pattern: /^[a-zA-Z0-9_-]*$/"
          ]);
        });
      });
    });

    describe("belongs", () => {
      describe("when undefined", () => {
        beforeEach(() => {
          req.body.belongs = null;
        });

        it("should return error", () => {
          trainPost(req, res);
          expect(res.status).toBeCalledWith(400);
          expect(res.json).toBeCalledWith([
            "belongs is required and must be a boolean"
          ]);
        });
      });

      describe("when not a boolean", () => {
        beforeEach(() => {
          req.body.belongs = "true";
        });

        it("should return error", () => {
          trainPost(req, res);
          expect(res.status).toBeCalledWith(400);
          expect(res.json).toBeCalledWith([
            "belongs is required and must be a boolean"
          ]);
        });
      });
    });
  });
});
