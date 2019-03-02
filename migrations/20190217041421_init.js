const tableName = "training";

exports.up = knex =>
  knex.schema.createTable(tableName, table => {
    table.increments();
    table.string("document");
    table.string("classification");
    table.boolean("belongs");
    table.timestamps(true, true);
  });

exports.down = knex => knex.dropTableIfExists(tableName);
