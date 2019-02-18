import db from "../db/index";

const tableName = "training";

export const train = (document, classification, belongs) => {
  return db(tableName).insert({ document, classification, belongs });
};

export const getTraining = (params = {}) => {
  return db(tableName)
    .select()
    .where(params);
};
